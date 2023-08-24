import { motion } from "framer-motion";
import { useEffect, useRef, useState, Fragment, createRef } from "react";
import { useRafLoop } from "react-use";
import { useWindowSize } from "@react-hook/window-size";
import { v4 as uuidv4 } from 'uuid';


export default function Marquee({ children, padding }: any){

    
    // const rect: any = useRef({})
    const [ childrenMarquee, setChildrenMarquee ] = useState<any[]>([])
    const [ createMarquees, setCreatedMarquees ] = useState(false)
    const [ elementsQueue, setElementsQueue ] = useState<any[]>([])
    const [speed,setSpeed] = useState(1)

    const [ xCoords, setXCoords ] = useState<{ [key: string]: any }>({})

    const x = useRef(0)

    const [width, height] = useWindowSize()

    useEffect(() => {
        if(childrenMarquee.length > 0 && childrenMarquee[childrenMarquee.length - 1].ref && childrenMarquee.length < Math.ceil(width/childrenMarquee[childrenMarquee.length - 1].ref.current.getBoundingClientRect().width) + 1){
            const _threshold = Math.ceil(width/childrenMarquee[childrenMarquee.length - 1].ref.current.getBoundingClientRect().width)
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

    const createNewMarquee = (n: number, ref?: any)  => {
        const newElements:any[] = []
        const newXCoords: any = []
        for(let i = 0;i < n; i++){
            const newRef: any = createRef()
            const id = uuidv4()
            newElements.push(<div id={id}  style={{paddingLeft: 40}} ref={newRef}>{ children }</div>)
            newXCoords[id] = 0
        }
        setXCoords(prev => ({ ...prev,  ...newXCoords  }))
        setChildrenMarquee(prev => [
            ...prev,
            ...newElements
        ])
        setCreatedMarquees(true)
    }

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