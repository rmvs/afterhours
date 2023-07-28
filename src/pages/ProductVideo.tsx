import { Row, Col} from "antd";
import { createRef, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import React from 'react'
import { Eyelash } from "Icons";
import Typography from "components/Typography";
import { motion, useScroll, useSpring } from "framer-motion";
import useParallax from "utils/parallax";

import ScrollMagic from 'scrollmagic';

const ProductContainer = styled.div`
    padding-top: 270.77px;
    // padding-bottom: 300px;
    background: #FFF;
    // margin-bottom: 300px;
    position: relative;
    // scroll-snap-type: y mandatory;

    @media(max-width: 480px){
      padding: 73px 19px 0 19px;
    }
`

const ProductVideoSection = styled(Row)`
    gap: 99px;
    margin-left: 258px;
    margin-right: 258px;

    @media(max-width: 480px){
      margin: inherit;
      gap: 47px;
    }
    display: flex;
    align-self: baseline;
`

const Video = styled(Col)`
  video {
    user-select: none;
    clip-path: inset(1px 1px);
    border-radius: 30px !important;
  }

  // display: flex;
  // align-self: baseline;
`

const VideoDescription = styled(Col)`
  display: flex;
  align-items: center;
  // overflow-y: scroll;

  // scroll-snap-align: center;
  // perspective: 250px;
`

const VideoDescriptionContainer = styled.div`
    // height: 293.54px;
    // overflow-y: scroll; 
    border-radius: 0px 27.081px 27.081px 27.081px;
    border: 1.354px solid var(--main-blue);    
    // max-width: 616px;

    // &::-webkit-scrollbar {
    //   height: 0.5em;
    //   width: 0.5em;
    //   background: transparent;
    // }
    
    // &::-webkit-scrollbar-thumb {
    //   background: transparent;
    //   -webkit-border-radius: 1ex;
    // }
    
    // &::-webkit-scrollbar-corner {
    //   background: transparent;
    // }

    @media(max-width: 480px){
      // height: 100%;
    }

    transition: opacity 0.4s ease 0s;
`

const VideoDescriptionItem = styled.div<{ $description?: boolean, $icon?: boolean }>`    
    ${ props => props.$description ?
      `
      display: grid;
      grid-gap: 13.54px;        
      ` : '' }
    ${ props => props.$icon ?
      `
      display: flex;
      flex-direction: column;
      height: 100%;
      ` : ''
    }
`

const DescriptionSection = styled.section`

    // width: 616.084px;
    padding: 40px;
    align-items: center;
    // gap: 21.665px;
    gap: 40.621px;

    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    // scroll-snap-align: center;
    // perspective: 500px;

    /* */
    // @media(max-width: 480px){
    //   padding: 15px;
    //   width: 284px;
    //   height: 323px;
    //   flex-direction: column;
    //   padding: 30px;
    //   gap: 20px;
    // }
    /* */
`

const MotionSection = styled.div`
  // max-height: 255px;
  // max-height: 300px !important;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 100px;
  // gap: 100vh;
  // align-items: center;
  // -webkit-box-reflect: below -50px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4));

  /** */
  // @media(max-width: 480px){
  //   display: inline-flex;
  //   align-items: flex-start;
  //   flex-direction: row;
  // }
/** */
  // overflow: hidden;
  position: relative;
`


const Benefit =  ({ title, text, opacity, id }: any) => {
  // const ref = useRef(null)
  // const { scrollYProgress } = useScroll({ target: ref });
  // const y = useParallax(scrollYProgress, 500);
  return (
    <VideoDescriptionContainer id={id} style={{opacity}}>
      <DescriptionSection className="description-section">
          <VideoDescriptionItem $icon>
            <div>
                <Eyelash width="58px" height="58px" />
            </div>
          </VideoDescriptionItem>
          <VideoDescriptionItem id="desc" $description>                     
                
                <Typography fontSize="32px" lineheight="40px" fontWeight="700" $type="Bold" >
                    {title}
                </Typography>
                <Typography fontSize="20px" letterSpacing="0" color="#6C6C6C" lineheight="24px" fontWeight="350" $type="Light">
                    {text}
                </Typography>
          </VideoDescriptionItem>                  
      </DescriptionSection>
    </VideoDescriptionContainer>
  )  
}

const VideoContainer = styled.div`
    position: absolute;
    // width: 100%;
    // backface-visibility: hidden;
    // z-index: 100;
    // display: flex;
    width: 844px;
    height: 475px;
    top: 0;
    left:0;
    margin: 0;
`


export default function ProductVideo({ children, slideContainerRef}: React.PropsWithChildren<{ slideContainerRef?: React.RefObject<HTMLDivElement>}>){

    const videoRef = useRef<HTMLVideoElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const btnVideo = useRef<HTMLButtonElement>(null)  
    const descriptionContainer = useRef<HTMLDivElement>(null)
    const [play, setPlay] = useState(false)

    const descriptionsBoxes = [
        {
            title: 'NO STRAPS',
            text:  `
                Designed to stay in place without a head strap or a nose bridge, our sleep mask patches 
                alleviate the discomfort and headaches often caused by wrap-around sleep masks.
            `
        },
        {
            title: '100% SILK',
            text: `
                Our sleep mask is made with 100% soft silk that feels soft and comfortable on the skin. 
                As an organic fabric, silk keeps skin hydrated, regulates body temperature, and prevents 
                wrinkles from forming.
            `
        },
        {
            title: 'FACE CONFORMING',
            text: `
            The unique shape of our sleep mask patches conform to the eye area 
            for a comfortable fit which blocks out 100% of light without the need for straps 
            which may cause headaches and pressure. Plus the unique concave shape allows you to sleep 
            easy without disturbing your eye creams and serums underneath.
            `
        },
        {
            title: 'SIDE-SLEEPER FRIENDLY',
            text: `
                Our sleep mask patches are a side sleeper’s best friend. 
                Just like how you rely on a side-sleeper pillow for total comfort – our sleep mask patches stay 
                in place on side sleepers and don’t add unnecessary pressure to the temples and forehead.
            `
        }
    ]

    const { scrollYProgress } = useScroll({ target: descriptionContainer })
    const y = useParallax(scrollYProgress, 500)

    const [ box, setBox ] = useState(0)
    
    
    useEffect(() => {
        if(btnVideo.current){
            btnVideo.current.click()
        }
    },[play])

    const domContentListener = (ev: any) => {
      const controller = new ScrollMagic.Controller();
      // product-video-section
      // document.getElementById('product-video-section')?.getBoundingClientRect().height!! + document.getElementById('video-container')?.getBoundingClientRect().height!!
        const videoNode = document.getElementById('video-container')
        const video = new ScrollMagic.Scene({
          triggerElement: '#product-video-section',
          duration: document.getElementById('product-video-section')?.getBoundingClientRect().height!! - document.getElementById('video-container')?.getBoundingClientRect().height!! - Math.ceil(document.getElementById('video-container')?.getBoundingClientRect().height!! * 0.5) - 90 - 25,
          offset: 475,
        }).setPin('#video-container')
          .addTo(controller)
          .on('progress',(ev) => {
            console.log(ev)
              const node = document.getElementById(`benefit-${box}`)!! as HTMLElement;
              const nodes = (document.querySelector('.motion-section'))?.childNodes!!
              const selectedNodes = (Array.from(nodes)).filter((value: any) => Math.ceil(value.getBoundingClientRect().bottom ) <= Math.ceil(videoNode?.getBoundingClientRect().bottom!!))
              const hideNodes = (Array.from(nodes)).filter((value: any) => Math.ceil(value.getBoundingClientRect().bottom ) > Math.ceil(videoNode?.getBoundingClientRect().bottom!!))
              if(selectedNodes){
                selectedNodes.forEach((value: any) => {
                  value.style.opacity = '1'
                })
              }
              if(hideNodes){
                hideNodes.forEach((value: any) => {
                  value.style.opacity = '0.05'
                })
              }
          })
    }


    console.log(document.getElementById('product-video-section')?.getBoundingClientRect().height!! - Math.floor(document.getElementById('product-video-section')?.getBoundingClientRect().height!! / 475*2))

    
    useEffect(() => {

      // const intro = document.querySelector('.motion-section');

      domContentListener(undefined)

      // document.addEventListener('DOMContentLoaded',domContentListener)

      return () => document.removeEventListener('DOMContentLoaded',domContentListener)
    },[])

    // const scaleX = useSpring(scrollYProgress, {
    //     stiffness: 100,
    //     damping: 30,
    //     restDelta: 0.001
    //   });

    return (
      <ProductContainer id={"product-container"} ref={containerRef}>
        <ProductVideoSection justify={"center"}>          
          <Video id="product-video-section" xs={24} md={10}>
              <VideoContainer id="video-container">
                <video
                    id="mask-video"
                      muted
                      loop
                      width={"844px"}
                      height={"475px"}
                      src="videos/product-animation.mp4"
                      ref={videoRef}
                />
                <button
                  ref={btnVideo}
                  onClick={() => videoRef.current?.play()}
                  hidden
                  style={{position: 'absolute'}}
                >
                  play
                </button> 
              </VideoContainer>
          </Video>
          <VideoDescription xs={24} md={7}>
            {/* <VideoDescriptionContainer className="description-container">
                {
                  descriptionsBoxes.map(({ title, text }, index) => (
                    <DescriptionSection className="description-section"key={index}>
                      <VideoDescriptionItem $icon>
                        <div>
                            <Eyelash width="58px" height="58px" />
                        </div>
                      </VideoDescriptionItem>
                      <VideoDescriptionItem id="desc" $description>                     
                            
                            <Typography fontSize="32px" lineheight="40px" fontWeight="700" $type="Bold" >
                                {title}
                            </Typography>
                            <Typography fontSize="20px" letterSpacing="0" color="#6C6C6C" lineheight="24px" fontWeight="350" $type="Light">
                                {text}
                            </Typography>
                      </VideoDescriptionItem>                  
                    </DescriptionSection>
                  ))
                }
            </VideoDescriptionContainer> */}            
            <MotionSection className="motion-section">
              {
                descriptionsBoxes.map(({title, text}, index) => (
                  <React.Fragment key={index}>
                      <Benefit id={`benefit-${index}`} title={title} text={text} opacity={index === 0 ? 1 : 0.05} />
                  </React.Fragment>
                  // <VideoDescriptionContainer>
                  //     <DescriptionSection className="description-section"key={index}>
                  //         <VideoDescriptionItem $icon>
                  //           <div>
                  //               <Eyelash width="58px" height="58px" />
                  //           </div>
                  //         </VideoDescriptionItem>
                  //         <VideoDescriptionItem id="desc" $description>                     
                                
                  //               <Typography fontSize="32px" lineheight="40px" fontWeight="700" $type="Bold" >
                  //                   {title}
                  //               </Typography>
                  //               <Typography fontSize="20px" letterSpacing="0" color="#6C6C6C" lineheight="24px" fontWeight="350" $type="Light">
                  //                   {text}
                  //               </Typography>
                  //         </VideoDescriptionItem>                  
                  //     </DescriptionSection>
                  // </VideoDescriptionContainer>
                ))
              }
            </MotionSection>
          </VideoDescription>
        </ProductVideoSection>
      </ProductContainer>
    );
}


// {
//   descriptionsBoxes.map(({ title, text },index) => (
//       <React.Fragment key={index}>
//           <Typography fontSize="32px" lineheight="40px" fontWeight="700" $type="Bold" >
//               {title}
//           </Typography>
//           <Typography fontSize="20px" letterSpacing="0" color="#6C6C6C" lineheight="24px" fontWeight="350" $type="Light">
//               {text}
//           </Typography>                           
//       </React.Fragment>
//   ))
// }