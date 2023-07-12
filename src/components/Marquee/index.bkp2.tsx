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
    const [speed,setSpeed] = useState(0.5)

    const [ xCoords, setXCoords ] = useState<{ [key: string]: any }>({})

    const x = useRef(0)

    const [width, height] = useWindowSize()

    useEffect(() => {
        if(children){
            const item: any = createRef()
            const id = uuidv4()            
            setChildrenMarquee([ <div id={id} ref={item}>{ children }</div> ])
            setXCoords(prev => ({ ...prev, [id]: 0 }))
        }     
    },[children])

    const createNewElements = () => {
        const { ref } = childrenMarquee[0]
        const num = Math.ceil(width / ref.current.getBoundingClientRect().width)
        if(num > 1){              
            createNewMarquee(num - 1)            
        }
    }

    useEffect(() => {
        if(childrenMarquee.length > 0 && !createMarquees){
            createNewElements()
            setCreatedMarquees(true)
        }
    },[childrenMarquee])

    // Number(getComputedStyle(ref.current).transform.split(',')[4].trim())
    const createNewMarquee = (n: number, ref?: any)  => {
        const newRef: any = createRef()
        const id = uuidv4()
        setXCoords(prev => ({ ...prev,  [id]: !ref ? 0 : -300}))
        setChildrenMarquee(prev => [
            ...prev,
            ...Array.from({ length: n }).map((value,index) => <div id={id} style={{paddingLeft: 40}} ref={newRef}>{ children }</div>)
        ])
    }
   

    // useEffect(() => {
    //     x.current = 0
    // },[width, height])

    useEffect(() => {
        if(removeChildrenQueue.length > 0){            
            const ids: any[] = removeChildrenQueue.map(({ ref: { current : { id = undefined}  } }) => id).filter(id => id !== undefined)
            if(ids.length === 0) return;
            const newChildrenMarquee = childrenMarquee.filter((s: any) => !ids.includes(s.ref.current.id))
            setChildrenMarquee(value => ([ ...newChildrenMarquee ]))
            if(newChildrenMarquee.length !== 0) {
                const temp = Object.keys(xCoords).filter(s => !ids.includes(s))
                const newXCoords = temp.reduce((prev,curr) => {
                    return ({ ...prev, [curr]: curr === newChildrenMarquee[0].ref.current.id ? 0 : xCoords[curr]})
                },{})
                setXCoords(value => ({...newXCoords}))
            } 
            setRemoveChildrenQueue([])            
            // removeChildrenQueue.forEach(s => {
            //     document.getElementById(s.ref.current.id)?.remove()
            // }) 
            //setIsRemovingChildren(false)
        }
    },[removeChildrenQueue, childrenMarquee, xCoords])
    

    const setX = () => {
        const deleteQueue: any[] =  []
        for(let i = 0;i < childrenMarquee.length; i++){
            const { ref } = childrenMarquee[i];
            if(!ref.current || xCoords[ref.current.id] === undefined) {
                continue
            }
            
            
            const newXCoords:any = ({ [ref.current.id]: xCoords[ref.current.id] - speed}) 
            const xPercent = x.current/ref.current.getBoundingClientRect().width * 100;  
            setXCoords((prev: any) => {
                return {...prev, ...newXCoords}
            })          

            ref.current.style.transform = `translate3d(${xPercent}%,0,0)`

            if(ref.current.getBoundingClientRect().right < 0 && deleteQueue.find(s => s.ref.current.id === ref.curent.id) === undefined){
                // debugger 
                console.log(`putting ${ref.current.id} to remove, right: ${ref.current.getBoundingClientRect().right}`)
                deleteQueue.push(childrenMarquee[i])
                // childrenMarquee.unshift()
                // console.log('removing ',ref.current.id)
                // document.getElementById(ref.current.id)?.remove()
                // // ref.current.remove()
                // continue
            }
        }

        if(childrenMarquee?.[childrenMarquee.length - 1]){
            const { ref } = childrenMarquee?.[childrenMarquee.length - 1]
            if(( ref.current.getBoundingClientRect().right) < width && !ref.current.createdMew){
                ref.current.createdNew = true
                createNewMarquee(1,ref)
            }
        }
        // if(childrenMarquee?.[childrenMarquee.length -1]){
        //     const lastElementRect = childrenMarquee[childrenMarquee.length-1].ref.current.getBoundingClientRect()
        //     debugger
        //     console.log(lastElementRect)
        // }
        if(deleteQueue.length > 0){
            setRemoveChildrenQueue(deleteQueue)
        }        

        // const xPercent = x.current/item.current.getBoundingClientRect().width * 100;     
        // item.current.style.transform = `translate3d(${xPercent}%,0,0)`
    }

    const loop = (e: any) => {
        if(createMarquees){
            // x.current -= speed;
            if(removeChildrenQueue.length === 0){
                x.current -= speed
                setX()
            }
        }
        // if(item.current.getBoundingClientRect().right  > 0 && (item.current.getBoundingClientRect().right < width)){
            
        // }
        // console.log(item.current.getBoundingClientRect().left,item.current.getBoundingClientRect().right < width)
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