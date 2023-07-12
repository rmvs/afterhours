import { motion, useTransform } from "framer-motion";
import { cloneElement, useEffect, useRef, useState, Fragment, createRef } from "react";
import { useRafLoop } from "react-use";
import { useWindowSize } from "@react-hook/window-size";
import $ from 'jquery'
import { v4 as uuidv4 } from 'uuid';


export default function Marquee({ children }: any){

    
    // const rect: any = useRef({})
    const [ childrenMarquee, setChildrenMarquee ] = useState<any[]>([])
    const [ createMarquees, setCreatedMarquees ] = useState(false)
    const [ removeChildrenQueue, setRemoveChildrenQueue ] = useState<any[]>([])
    const [ needMoreElements, setNeedMoreElements ] = useState<boolean>(false)
    const [ elementsQueue, setElementsQueue ] = useState<any[]>([])
    const [speed,setSpeed] = useState(1)

    const [ xCoords, setXCoords ] = useState<{ [key: string]: any }>({})

    const x = useRef(0)

    const [width, height] = useWindowSize()

    const [ threshold, setThreshold ] = useState<number>()

    useEffect(() => {
        if(childrenMarquee.length > 0 && childrenMarquee[childrenMarquee.length - 1].ref && !threshold){
            const _threshold = Math.ceil(width/childrenMarquee[childrenMarquee.length - 1].ref.current.getBoundingClientRect().width)
            setThreshold(_threshold)
            createNewMarquee(_threshold)
        }
    },[width, childrenMarquee])


    useEffect(() => {
        if(children){
            const item: any = createRef()
            const id = uuidv4()         
            setChildrenMarquee([ <div id={id} ref={item} style={{ paddingLeft: 40 }}>{ children }</div> ])
            setXCoords(prev => ({ ...prev, [id]: 0}))
        }     
    },[children])

    const createNewElements = () => {
        const { ref } = childrenMarquee[0]
        const num = Math.ceil(width / ref.current.getBoundingClientRect().width)
        if(num > 1){              
            createNewMarquee(num - 1)            
        }
    }

    // useEffect(() => {
    //     if(childrenMarquee.length > 0 && !createMarquees){
    //         createNewElements()
    //         setCreatedMarquees(true)
    //     }
    // },[childrenMarquee])

    // Number(getComputedStyle(ref.current).transform.split(',')[4].trim())
    const createNewMarquee = (n: number, ref?: any)  => {
        // !ref ? 0 : Number(getComputedStyle(ref.current).transform.split(',')[4].trim())        
        // [id]: 0
        const newElements:any[] = []
        const newXCoords: any = []
        for(let i = 0;i < n; i++){
            const newRef: any = createRef()
            const id = uuidv4()
            newElements.push(<div id={id}  style={{paddingLeft: 40}} ref={newRef}>{ children }</div>)
            newXCoords[id] = 0
        }
        // const newXCoords: any = Array.from({ length: n }).reduce((prev: any,value) => {
        //     return { ...prev, [uuidv4()]: 0 }
        // },{})
        setXCoords(prev => ({ ...prev,  ...newXCoords  }))
        // const newElements = Array.from({ length: n }).map((value,index) => <div id={id}  style={{paddingLeft: 40}} ref={newRef}>{ children }</div>)
        setChildrenMarquee(prev => [
            ...prev,
            ...newElements
        ])
        setCreatedMarquees(true)
    }
   

    // useEffect(() => {
    //     x.current = 0
    // },[width, height])

    // useEffect(() => {
    //     if(removeChildrenQueue.length > 0){            
    //         const ids: any[] = removeChildrenQueue.map(({ ref: { current : { id = undefined}  } }) => id).filter(id => id !== undefined)
    //         if(ids.length === 0) return;
    //         const newChildrenMarquee = childrenMarquee.filter((s: any) => !ids.includes(s.ref.current.id))
    //         setChildrenMarquee(value => ([ ...newChildrenMarquee ]))
    //         if(newChildrenMarquee.length !== 0) {
    //             const temp = Object.keys(xCoords).filter(s => !ids.includes(s))
    //             const newXCoords = temp.reduce((prev,curr) => {
    //                 return ({ ...prev, [curr]: curr === newChildrenMarquee[0].ref.current.id ? createRef() : xCoords[curr]})
    //             },{})
    //             setXCoords(value => ({...newXCoords}))
    //         } 
    //         setRemoveChildrenQueue([])            
    //         // removeChildrenQueue.forEach(s => {
    //         //     document.getElementById(s.ref.current.id)?.remove()
    //         // }) 
    //         //setIsRemovingChildren(false)
    //     }
    // },[removeChildrenQueue, childrenMarquee, xCoords])


    useEffect(() => {
        if(elementsQueue?.length > 0){
            const ids = elementsQueue.map(value => value.ref.current.id)
            // xCoords[value]            
            const newChildrenMarquee = [...childrenMarquee.filter(s => !ids.includes(s.ref.current.id))]
            const idsChildrenMarquee = newChildrenMarquee.map(s => s.ref.current.id)
            const tempKeys = Object.keys(xCoords)
            // .filter(s => idsChildrenMarquee.includes(s))
            const newXCoords:any = { 
                ...tempKeys.reduce(
                    (prev,value, index) => {
                        const found = newChildrenMarquee.find(k => k.ref.current.id === value)                        
                        return { ...prev,[value]: 0}
                    }, {}) }
            // for(let i = 0;i < elementsQueue.length; i++){
            //     const { ref } = elementsQueue[i]
            //     ref.current.style.transform = `translate3d(${width}px,0,0)`
            //     if(getComputedStyle(ref.current).paddingLeft === undefined || getComputedStyle(ref.current).paddingLeft === '0px'){
            //         ref.current.style.paddingLeft = '40px'
            //     }
            //     newXCoords[ref.current.id] = 0
            //     newChildrenMarquee.shift()
            // }
            // newChildrenMarquee[0].ref.current.paddingLeft = "0px"; 
            // const { ref: firstRef = {} } = newChildrenMarquee[0]
            // if(firstRef){
            //     newXCoords[firstRef.current.id] = 0;
            // }
            const newList = [...newChildrenMarquee]
            setXCoords(newXCoords)
            //setChildrenMarquee(newList) 
            setElementsQueue([])                    
        }
    },[elementsQueue])
    

    const setX = () => {
        const q: any[] = [];
        for(let i = 0;i < childrenMarquee.length; i++){
            const { ref } = childrenMarquee[i];
            if(!ref.current) {
                continue
            }
            let xValue = xCoords[ref.current.id] - speed
            let xPercent = xValue/ref.current.getBoundingClientRect().width * 100;
            
            let _xCoord = { [ref.current.id]: xValue }

            if(xPercent < -100){
                // xPercent = Math.ceil(width/ref.current.getBoundingClientRect().width * 100);
                // xValue = 0;
                // q.push(childrenMarquee[i])
                // continue
                _xCoord[ref.current.id] = 0
            }

            setXCoords(prev => ({ ...prev, ..._xCoord }))
            ref.current.style.transform = `translate3d(${xPercent}%,0,0)`
                        
        }
        if(q.length > 0){
            setElementsQueue(q)
        }
    }

    const loop = (e: any) => {
        if(createMarquees){
            // x.current -= speed;           

            // if((childrenMarquee?.[0].ref.current.getBoundingClientRect().right ) < 0){
            //     // debugger 
            //     // console.log(`putting ${childrenMarquee?.[0].ref.current.id} to remove, right: ${childrenMarquee?.[0].ref.current.getBoundingClientRect().right}`)
            //     setRemoveChildrenQueue([childrenMarquee?.[0]])
            // }

            if(elementsQueue.length === 0){
                x.current -= speed
                setX()
            }
    
            // if(childrenMarquee?.[childrenMarquee.length - 1]){
            //     const { ref } = childrenMarquee?.[childrenMarquee.length - 1]
            //     if(( ref.current.getBoundingClientRect().right) < width){
            //         console.log('criou')
            //         // createNewMarquee(1,ref)
            //     }
            // }
            
            // if(threshold && childrenMarquee.length > threshold){
            //     const newArr = childrenMarquee.slice(1,childrenMarquee.length)
            //     setChildrenMarquee(prev => ([...newArr]))
            // }
            
        }
    }

    useRafLoop(loop,true)

    // if(childrenBar.length === 0){
    //     debugger
    //     return <div>asdsd</div>
    // }

    return (
        <div style={{position: 'fixed'}} onMouseOver={() => {
            setSpeed(0.5);

        }} onMouseOut={() => {
            setSpeed(1)
            console.log('mouse out')
        }}>
            <motion.div dragElastic={0.000001} className="marquee">
                {/* <div>{ children }</div>
                <div>{ children }</div> */}
                {
                    childrenMarquee.map((value,index) => <Fragment key={index}>{ value }</Fragment>)
                }
            </motion.div>
        </div>
    )
}