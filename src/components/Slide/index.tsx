import { motion } from "framer-motion";
import React, { createRef, useEffect, useRef, useState } from "react"
import { useRafLoop } from "react-use";
import { styled } from "styled-components";
import { v4 as uuidv4 } from 'uuid';


const ElementContainer = styled.div`
    display: inline-flex;
    gap: 69.93px;
    align-items: center;

    @media (max-width: 480px), (max-width: 575px){
        // gap: 21.84px;
        // gap: 45.20px;
    }
`

export default function Slide({ children }: React.PropsWithChildren){

    const [ childrenSlide, setChildrenSlide ] = useState<any[]>([])
    const [ start, setStart ] = useState(false)
    const [ xCoords, setXCoords ] = useState({ } as any)
    const [ gap, setGap ] = useState(0)

    // const [width, height] = useWindowSize()
    const [ windowSize, setWindowSize ] = useState({ width: window.innerWidth, height: window.innerHeight })
    const [ actualWidth, setActualWidth ] = useState<number | undefined>(window.innerWidth)
    const motionContainerRef = useRef({} as any)
    const speed = 1


    const onResize = (ev: Event) => {
        setStart(false)
        setWindowSize({ width: window.innerWidth, height: window.innerHeight })        
        setChildrenSlide([])
        setXCoords({})              
    }


    // useEffect(() => {
    //     window.addEventListener('resize', onResize)

    //     return () => window.removeEventListener('resize', onResize)
    // },[])


    // useEffect(() => {
    //     if(start){
    //         debugger
    //         setChildrenSlide([])
    //         setXCoords({})
    //     }
    // },[windowSize, start])
    

    // const fitContent = React.useCallback((node:HTMLDivElement)  => {
    //     debugger
    //     console.log(node.getBoundingClientRect().width)
    //     if(childrenSlide.length < Math.ceil(width/node.getBoundingClientRect().width) + 1){
    //         const length = Math.ceil(width/node.getBoundingClientRect().width)
    //         const element = React.cloneElement(children as any,{ itemRef: createRef() })
    //         let ids = {}
    //         setChildrenSlide(prev => [...prev, ...Array.from({ length }).map((value,index) => {
    //             const id = uuidv4()
    //             ids = {...ids, [id] : 0}
    //             return <ElementContainer id={id} ref={createRef() as any}>{ children } </ElementContainer>
    //         })])
    //         setXCoords({ ...xCoords, ...ids })
    //         setStart(true)            
    //     }
    // },[])

    const hasLessElements = (node: any) => {
        const gap = parseInt(getComputedStyle(node).gap?.replace("px","") || "0")
        return childrenSlide.length <= Math.ceil(windowSize.width/(node.getBoundingClientRect().width + gap))
    }

    const createChild = () => {
        const { current: node } = motionContainerRef
        const gap = parseInt(getComputedStyle(node).gap?.replace("px","") || "0")        
        if(hasLessElements(node)){
            const length = Math.ceil(windowSize.width/(node.getBoundingClientRect().width + gap)) + 1
            const element = React.cloneElement(children as any,{ itemRef: createRef() })
            let ids = { ...xCoords }
            const elements = Array.from({ length }).map((value,index) => {
                const id = uuidv4()
                ids = {...ids, [id] : 0}
                return <ElementContainer id={id} ref={createRef() as any}>{ children } </ElementContainer>
            })
            setChildrenSlide(prev => [...elements])
            setXCoords({ ...ids })                               
        }      
        setGap(gap)
        setStart(true);  
    }

    // const onMotionContainerChanged = React.useCallback((node : HTMLDivElement) => {        
    //     if(node){            
    //         setTimeout(() => {
    //             fitContent(node)
    //         },500)
    //     }
    // },[])

    // useEffect(() => {
    //     if(childrenSlide.length === 0){
    //         // const ids: any = {}
    //         // let id = undefined;
    //         // if((children as any).map){
    //         //     const els = (children as any[])?.map((value: any,index: any) => {
    //         //         id = uuidv4()
    //         //         ids[id] = 0
    //         //         return <ElementContainer id={id} ref={createRef() as any}>{ value }</ElementContainer>;
    //         //     })
    //         //     setChildrenSlide(els)
    //         // }else{
    //         //     // id = uuidv4()
    //         //     // ids[id] = 0
    //         //     // setChildrenSlide([<ElementContainer id={id} ref={createRef() as any}>{ children }</ElementContainer>])
    //         // }            
            
    //         // const temp = { [id]: 0 }
    //         // setXCoords(ids)
    //         // setTimeout(() => {
    //         //     createChild()
    //         // },500)
    //     }
    //     // else {
    //     //     setTimeout(() => {
    //     //         createChild()
    //     //     },500)
    //     // }
    // },[childrenSlide,children])

    
    
    useEffect(() => {
        // setTimeout(() => {
        //     if(children){
        //         debugger
        //         createChild()
        //     }
        // },500)
        if(childrenSlide.length === 0){
            const { props: { children: els = [] } } = children as any
            setChildrenSlide(els)
        }else if(!start){
            setTimeout(() => {
                createChild()
            },500)
        }
    },[children, childrenSlide])


    const setX = (e: any) => {
        if(!start) return;
        for(let i = 0; i < childrenSlide.length; i++){
            const { ref } = childrenSlide[i]
            if(ref){
                const { current } = ref
                let xValue = xCoords[current.id] - speed
                let xPercent = xValue/current.getBoundingClientRect().width * 100

                if(xPercent < -100){
                    xValue = gap
                }
                setXCoords((prev: any) => ({ ...prev, [current.id]: xValue }))
                current.style.transform = `translate3d(${xPercent}%,0,0)`
                }
        }
    }

    useRafLoop(setX,true);

    return (<motion.div className="slide-container"  dragElastic={0.000001}>
        <div className="motion-container" ref={motionContainerRef as any} > 
            { childrenSlide.map((value,index) => <React.Fragment key={index}>{ value }</React.Fragment>) }
        </div>
    </motion.div>)
}