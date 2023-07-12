import { motion, useSpring, useTransform } from "framer-motion";
import { cloneElement, useEffect, useRef, useState, Fragment, createRef } from "react";
import { useRafLoop } from "react-use";
import { useWindowSize } from "@react-hook/window-size";


export default function Marquee({ children }: any){

    const item: any = useRef(null)
    const rect: any = useRef({})
    const [speed,setSpeed] = useState(1)

    const x = useRef(0)

    const [width, height] = useWindowSize()
   

    useEffect(() => {
        rect.current = item.current.getBoundingClientRect()
        x.current = width
    },[width, height])
    

    const setX = () => {
        if(!item.current || !rect.current) return;
        const xPercent = x.current/rect.current.width * 100;        
        // if((x.current + clientRect.current.width) < -100){
        //     x.current = width
        // }
        
        // if((x.current + rect.current.width) < 0){
        //     console.log('minus 0')
        //     x.current = rect.current.width;
        // }
        // x.current = (x.current/rect.current.width) * 100;        
        item.current.style.transform = `translate3d(${xPercent}%,0,0)`
    }

    const loop = (e: any) => {
        x.current -= speed;
        setX()
        if(item.current.getBoundingClientRect().right  > 0 && (item.current.getBoundingClientRect().right < width)){
            
        }
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
                <div id="motion"  ref={item}>{ children }</div>
            </motion.div>
        </div>
    )
}