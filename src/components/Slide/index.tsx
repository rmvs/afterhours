import { useWindowSize } from "@react-hook/window-size"
import { motion } from "framer-motion";
import React, { createRef, forwardRef, useEffect, useLayoutEffect, useRef, useState } from "react"
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

    const resetSlide = () => {
        setStart(false)
        setChildrenSlide([])
        setXCoords([])        
    }

    // useEffect(() => {
    //     window.addEventListener('resize',resetSlide)
    //     return () => window.removeEventListener('resize', resetSlide)
    // },[])


    // setTimeout(() =>{
    //     fitContent()
    // },500)

    // useEffect(() => {
    //     if(motionContainerRef.current.hasChildNodes()){
    //         debugger
    //     }
    // },[])
    

    // useEffect(() => {
    //     if(childrenSlide.length > 0){
    //         console.log(childrenSlide[0].ref.current.getBoundingClientRect())
    //     }
    // },[childrenSlide])

    // useEffect(() => {
    //     if(childrenSlide.length > 0){
    //         const { ref } = childrenSlide[0]
    //         if(true){
    //             debugger
    //             const { props: { children: child } } = childrenSlide[0]
    //             const { ref: _ref, children: c } = child[0]
    //             console.log(child[0],_ref)
    //             // React.Children.forEach(childrenSlide[0], (element) => {
    //             //     const { ref: innerRef } = element
    //             //     console.log(innerRef.current.getOffsetWidth)
    //             // })
    //         }
    //     }
    // },[childrenSlide, width, element])

    // useLayoutEffect(() => {
    //     const { ref } = children as any
    //     if(ref.current){
    //         debugger
    //         console.log(ref.current.getBoundingClientRect())
    //     }
    // },[])

    // useEffect(() => {
    //     if(childrenSlide.length > 0) {
    //         debugger
    //         const { ref } = childrenSlide[0]
    //         console.log(ref.current.getBoundingClientRect())
    //     }
    // },[childrenSlide])

    // useEffect(() => {
    //     if(childrenSlide.length === 0){
    //         debugger
    //         // const newChildren = React.createElement("div",{ ref: mainRef, children: (children as any[]).map((value: any,index: any) => React.cloneElement(value,{ ref: createRef() })) })
    //         const newChildren = React.createElement(React.Fragment, { key: 'children-0', children:  (children as any[]).map((value: any,index: any) => React.cloneElement(value,{ ref: createRef() })) })
    //         setChildrenSlide([newChildren])
    //     }
    // },[children])

    // useEffect(() => {
    //     if(children){                    
    //         if(childrenSlide.length === 0){
    //             debugger
    //             const ref = createRef()
    //             const id = uuidv4()   
    //             const { props: { children: child, } } = element as any
    //             const _children: any[] = []
    //             React.Children.forEach(child, (element) => {
    //                 let _ref = createRef()
    //                 const __e = React.cloneElement(element,{ ref: _ref })
    //                 _children.push(__e)
    //             })
    //             const parent = React.cloneElement(element as any,{ ref })
    //             // const newChild = forwardRef((props,ref) => <div>{ React.cloneElement(children as any,{ ref }) }</div>)
    //             setChildrenSlide([parent]) 
    //         }
    //         // const elm = React.forwardRef((props, ref) => React.cloneElement(children as any,{ ref: ref , id }))
            
    //     }       
    // },[children])   


    return (<motion.div className="slide-container"  dragElastic={0.000001}>
        <div className="motion-container" ref={motionContainerRef as any} > 
            { childrenSlide.map((value,index) => <React.Fragment key={index}>{ value }</React.Fragment>) }
        </div>
    </motion.div>)
}