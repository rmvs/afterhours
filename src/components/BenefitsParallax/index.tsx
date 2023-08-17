import { useScroll } from "framer-motion";
import React from "react";
import { useRef } from "react";
import styled from "styled-components";
import useParallax from "utils/parallax";


const Section = styled.section` 
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    scroll-snap-align: center;
`

const ObjectContainer = styled.div` 
    position: relative;
    overflow: hidden;
`

const BenefitContainer = ({ children, id }: React.PropsWithChildren<{id: number}>) => {
    const ref = useRef(null);
    // const { scrollYProgress } = useScroll({ target: ref });
    // const y = useParallax(scrollYProgress, 300);
    return (
        <Section style={{alignItems: id === 0 ? 'flex-start' : 'center'}}>
            <ObjectContainer ref={ref}>
                { children }
            </ObjectContainer>
        </Section>
    )
}

export default function BenefitsParallax({ benefits }: React.PropsWithChildren<{ benefits: any[] }>){
    

    return (
        <>
            {
                benefits.map((child,index) => (
                    <BenefitContainer key={index} id={index}>
                        { child }
                    </BenefitContainer>
                ))
            }
        </>
    )
}