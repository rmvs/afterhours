import { Carousel as AntdCarousel } from "antd";
import styled from 'styled-components'
import SVG from 'react-inlinesvg'
import { useEffect, useRef, useState } from "react";
import AfterHoursStamp from "components/Stamp";

const Pages = styled(AntdCarousel)` 
    /*& > * {
        height: 100% !important;
    }*/
    padding-bottom: 10px; 
    @media(max-width: 480px){
        padding-bottom: 0px;
    }
`

const SlickList = styled.ul`
    display: flex;
    justify-content: center;
    gap: 9px;
    padding: 0px 9px;

    @media(max-width: 480px){
        margin-top: -5%;
        position:relative;
    }
`

const Container = styled.div`
    /*width: 677px;
    height: 887px;*/
    height: 100%;
    @media (max-width: 480px) {
        width: 100%;
        height: 100%;
        // padding: 10px;
    }
`


const ContentCarousel = styled.div`
    margin: 0;
    color: #fff;
    /*line-height: 160px;*/
    text-align: center;
`

const CarouselThumbnail = styled.img`    
    flex-shrink: 0;
    border-radius: 40px;
    width: 100%;
    height: auto;

    @media(max-width: 480px){
        border-radius: 16.911px;
    }
`

// background: url(${ props => props.src }) lightgray -252.833px 0px / 174.692% 100% no-repeat;


// const Dot = styled(SVG)(({ selected }: any) => `
//     width: 11px;
//     height: 11px;
//     ${(props: any) => ({
//         fill: props.$selected ? '#164CA4' : '#FAF1E8'
//     })}
// `


const Dot = styled(SVG)<{ selected?: boolean }>`
    width: 11px;
    height: 11px;
    cursor: pointer;    
    circle {
        fill: ${ props => props.selected ? '#164CA4' : '#FAF1E8' }
    }
`

interface CarouselProps {
    cards: {
        src: string,
        href: string
    }[]
}

export default function Carousel({ cards }: React.PropsWithChildren<CarouselProps>){

    const sliderRef: any = useRef()
    const [ page, setPage ] = useState(0)

    useEffect(() => {
        if(sliderRef.current){
            sliderRef.current?.goTo(page)
        }
    },[ page ])


    const afterChange = (currentSlide: number) => {
        if(currentSlide !== page){
            setPage(currentSlide)
        }
    }
    

    return (
        <Container>
            <AfterHoursStamp position="absolute" />
            <Pages ref={ sliderRef as any} dots={false} afterChange={afterChange}>                
                {
                    cards.map(({ src, href },key) => (
                    <ContentCarousel key={key}>
                        <CarouselThumbnail src={src} />                        
                    </ContentCarousel>))
                }            
            </Pages>
            <SlickList className="carousel-dots">
                { cards.map((value,key) => (<Dot key={key} src={"icons/dot.svg"} selected={key === page} onClick={() => setPage(key)}  />)) }
            </SlickList>
        </Container>
    )
}