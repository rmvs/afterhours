import { motion, useTransform } from "framer-motion";
import React,{ cloneElement, useEffect, useRef, useState, Fragment, createRef } from "react";
import { useRafLoop } from "react-use";
import { useWindowSize } from "@react-hook/window-size";
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
        if(childrenMarquee.length > 0 && childrenMarquee[childrenMarquee.length - 1].ref.current && childrenMarquee.length < Math.ceil(width/childrenMarquee[childrenMarquee.length - 1].ref.current.getBoundingClientRect().width) + 1){
            // console.log(getComputedStyle(childrenMarquee[childrenMarquee.length - 1].ref.current))
            // console.log( childrenMarquee[childrenMarquee.length - 1].ref.current.getBoundingClientRect())
            const elementWidth = childrenMarquee[childrenMarquee.length - 1].ref.current.getBoundingClientRect().width
            const _threshold = Math.ceil(width/elementWidth)
            //setThreshold(_threshold)
            createNewMarquee(_threshold)
            //setThreshold(undefined)
        }
    },[width, childrenMarquee])

    // style={{ paddingLeft: 40 }}
    useEffect(() => {
        if(children){
            // const item: any = createRef()
            // const id = uuidv4() 
            // setChildrenMarquee([ <div id={id} ref={item}>{ children }</div> ])
            // setXCoords(prev => ({ ...prev, [id]: 0}))
            createNewMarquee(1)
        }     
    },[children])
    // style={{paddingLeft: 40}}
    const createNewMarquee = (n: number, ref?: any)  => {     
        // [id]: 0
        const newElements:any[] = []
        const newXCoords: any = []
        for(let i = 0;i < n; i++){
            const newRef: any = createRef()
            const id = uuidv4()
            const elm = React.cloneElement(children,{ ref: newRef })
            newElements.push(elm)
            // newElements.push(<div id={id} ref={newRef}>{ children }</div>)
            newXCoords[id] = 0
        }
        setXCoords(prev => ({ ...prev,  ...newXCoords  }))
        // ...prev,
        setChildrenMarquee(prev => [            
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
            x.current -= speed
            setX()            
        }
    }

    useRafLoop(loop,true)

    return (
        <div style={{position: 'relative', overflow: 'hidden'}} onMouseOver={() => {
            setSpeed(0.5);

        }} onMouseOut={() => {
            setSpeed(1)
        }}>
            <motion.div dragElastic={0.000001} className="marquee">
                {
                    childrenMarquee.map((value,index) => <Fragment key={index}>{ value }</Fragment>)
                }
            </motion.div>
        </div>
    )
}