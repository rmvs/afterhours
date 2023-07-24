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
`

export default function Slide({ children }: React.PropsWithChildren){

    const [ childrenSlide, setChildrenSlide ] = useState<any[]>([])
    const [ start, setStart ] = useState(false)
    const [ xCoords, setXCoords ] = useState({ } as any)
    const [ gap, setGap ] = useState(0)

    const [width, height] = useWindowSize()
    const motionContainerRef = useRef({} as any)
    const speed = 1

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

    const createChild = () => {
        const { current: node } = motionContainerRef
        if(childrenSlide.length < Math.ceil(width/node.getBoundingClientRect().width)){
            const length = Math.ceil(width/node.getBoundingClientRect().width)
            const element = React.cloneElement(children as any,{ itemRef: createRef() })
            let ids = { ...xCoords }
            setChildrenSlide(prev => [...prev, ...Array.from({ length }).map((value,index) => {
                const id = uuidv4()
                ids = {...ids, [id] : 0}
                return <ElementContainer id={id} ref={createRef() as any}>{ children } </ElementContainer>
            })])
            setXCoords({ ...ids })                                             
        }
        setGap(parseInt(getComputedStyle(node).gap?.replace("px","") || "0"))
        setStart(true); 

    }

    // const onMotionContainerChanged = React.useCallback((node : HTMLDivElement) => {        
    //     if(node){            
    //         setTimeout(() => {
    //             fitContent(node)
    //         },500)
    //     }
    // },[])

    useEffect(() => {
        if(childrenSlide.length === 0){  
            const ids: any = {}
            let id = undefined;
            if((children as any).map){
                const els = (children as any[])?.map((value: any,index: any) => {
                    id = uuidv4()
                    ids[id] = 0
                    return <ElementContainer id={id} ref={createRef() as any}>{ value }</ElementContainer>;
                })
                setChildrenSlide(els)
            }else{
                id = uuidv4()
                ids[id] = 0
                setChildrenSlide([<ElementContainer id={id} ref={createRef() as any}>{ children }</ElementContainer>])
            }            
            
            // const temp = { [id]: 0 }
            setXCoords((prev: any) => ({ ...ids }))
        }else {
            setTimeout(() => {
                createChild()
            },500)
        }
    },[childrenSlide,children])


    const setX = (e: any) => {
        if(!start) return;
        for(let i = 0; i < childrenSlide.length; i++){
            const { ref: { current } } = childrenSlide[i]
            let xValue = xCoords[current.id] - speed
            let xPercent = xValue/current.getBoundingClientRect().width * 100

            if(xPercent < -100){
                xValue = gap
            }
            setXCoords((prev: any) => ({ ...prev, [current.id]: xValue }))
            current.style.transform = `translate3d(${xPercent}%,0,0)`
        }
    }


    useRafLoop(setX,true)

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

    const mainRef = useRef()

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