import { Carousel as AntdCarousel } from "antd";
import styled from 'styled-components'
import { useRef } from "react";
import React from "react";
import { Icon } from "Icons";

const Pages = styled(AntdCarousel)` 
    /*& > * {
        height: 100% !important;
    }*/
    padding-bottom: 10px; 
    @media(max-width: 480px){
        padding-bottom: 0px;
    }

    img:focus,
    img:active {
        border: none;
    }
`

// const SlickList = styled.ul`
//     display: flex;
//     justify-content: center;
//     gap: 9px;
//     padding: 0px 9px;

//     @media(max-width: 480px){
//         margin-top: -5%;
//         position:relative;
//     }
// `

const Container = styled.div`
    /*width: 677px;
    height: 887px;*/
    height: 100%;
    @media (max-width: 480px) {
        width: 100%;
        height: 100%;
        // padding: 10px;
    }

    // .ant-carousel, .slick-slider, .slick-list, .slick-track, .slick-slide, .slick-slide * {
    //     /*height: 100%;*/
    //     max-height: 100%;
    //     overflow: hidden !important;
    //   }
      
    //   .slick-slide * > img {
    //     max-height: 100%;
    //     max-width: 100%;
    //   }
      
    //   .slick-slider > * {
    //     height: 100%;
    //   }

    .slick-slide:not(.slick-current) img {
        display: none !important;
    }

    .slick-arrow {
        margin-top: 100px;
        @media (max-width: 480px){
            margin-top: 0px;
        }
    }
`


const ContentCarousel = styled.div`
    margin: 0;
    color: #fff;
    /*line-height: 160px;*/
    text-align: center;      
`

export const CarouselThumbnail = styled.img`    
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

interface CarouselProps {
    cards: any
}

const Arrows =  ({currentSlide, slideCount, icon, ...props}: any) => <div {...props}>{ icon }</div>

export default function Carousel({ cards }: React.PropsWithChildren<CarouselProps>){

    const sliderRef: any = useRef()  

    return (
        <>             
            <Container> 
                <Pages draggable ref={ sliderRef as any} dots={false} prevArrow={<Arrows icon={<Icon src={"icons/arrow-left-thin.svg"} width="25px" height="25px" />} />} nextArrow={<Arrows icon={<Icon src={"icons/arrow-right-thin.svg"}  width="25px" height="25px" />} />} arrows>
                    {
                        cards.map((child: any,key: number) => (
                            <ContentCarousel className="content-carousel" key={key}>
                                { child }
                            </ContentCarousel>
                        ))
                    }            
                </Pages>
            </Container>
        </>
    )
}