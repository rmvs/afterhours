import { Row, Col, Grid } from "antd";
import { createRef, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import React from 'react'
import { Eyelash } from "Icons";
import Typography from "components/Typography";
import { motion, useScroll, useSpring } from "framer-motion";
import useParallax from "utils/parallax";

import ScrollMagic from 'scrollmagic';
import { useWindowSize } from "@react-hook/window-size";
import BenefitsParallax from "components/BenefitsParallax";

const { useBreakpoint } = Grid;

const ProductContainer = styled.div`
    padding-top: 270.77px;
    // padding-bottom: 300px;
    background: #FFF;
    // margin-bottom: 300px;
    position: relative;
    // scroll-snap-type: y mandatory;

    @media(max-width: 480px){
      // padding: 73px 19px 0 19px;
      display: none;
    }
`

const ProductVideoSection = styled(Row)`
    gap: 50px;
    // margin-left: 258px;
    // margin-right: 258px;

    @media(max-width: 480px){
      margin: inherit;
      // gap: 47px;
    }
    display: flex;
    align-self: baseline;
    position: relative;
`

const Video = styled(Col)`
  video {
    user-select: none;
    clip-path: inset(1px 1px);
    border-radius: 30px !important;
    width: 100%;
    // height: 100%;
    // width: 100%;
    // height: 200px;
  }

  // display: flex;
  // align-self: baseline;

  @media(max-width: )
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
      display: inline-flex;
      // flex-direction: column;
      height: 100%;
      align-self: baseline;
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
  // padding-top: 50px;1
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding-top: 50px;
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

  /* Extra Small Devices (up to 575.98px) */
    @media (max-width: 575.98px) {
      gap: 25px;
      .trivia-text{
        font-size: 16px;
      }
      .description-section {
        padding: 15px;
      }
      .trivia-title {
        font-size: 22px;
        letter-spacing:0px;
      }
    }

    /* Small Devices (576px to 767.98px) */
    @media (min-width: 576px) and (max-width: 767.98px) {
      gap: 25px;
      .trivia-text{
        font-size: 16px;
      }
      .description-section {
        gap: 15px;
      }
    }

    /* Medium Devices (768px to 991.98px) */
    @media (min-width: 768px) and (max-width: 991.98px) {
      gap: 25px;
      .trivia-text{
        font-size: 16px;
      }
      .description-section {
        padding: 15px;
        gap: 10px;
      }
      .trivia-title {
        font-size: 20px;
        line-height: 20px;
        letter-spacing: 0px;
      }
      padding-top: 10px;
    }

    /* Large Devices (992px to 1199.98px) */
    @media (min-width: 992px) and (max-width: 1199.98px) {
        gap: 30px;
        .trivia-text{
          font-size: 16px;
        }
        .description-section {
          padding: 15px;
        }
        .trivia-title {
          font-size: 20px;
          letter-spacing: 0px;
        }
        padding-top: 25px;
    }

    /* Extra Large Devices (1200px to 1399.98px) */
    @media (min-width: 1200px) and (max-width: 1399.98px) {
      gap: 30px;
      padding-top: 5px;
      .description-section {
        padding: 15px;
      }
      .trivia-text{
        font-size: 15px;
      }
      .trivia-title {
        font-size: 20px;
        letter-spacing: 0px;
      }
    }

    /* Extra Extra Large Devices (1400px and above) */
    @media (min-width: 1400px) {
      gap: 50px;      
    }

    @media(min-width: 1600px){
      gap: 100px;
    }

    .reflect-card {
      -webkit-box-reflect: below 10px linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.4));
    }
`


const Benefit =  ({ title, text, opacity, id }: any) => {
  // const ref = useRef(null)
  // const { scrollYProgress } = useScroll({ target: ref });
  // const y = useParallax(scrollYProgress, 500);
  return (
    <VideoDescriptionContainer className="reflect-card" id={id} style={{opacity}}>
      <DescriptionSection className="description-section">
          <VideoDescriptionItem $icon>
            <div>
                <Eyelash width="58px" height="58px" />
            </div>
          </VideoDescriptionItem>
          <VideoDescriptionItem id="desc" $description>                     
                
                <Typography className="trivia-title" fontSize="32px" lineheight="40px" fontWeight="700" $type="Bold" >
                    {title}
                </Typography>
                <Typography className="trivia-text" fontSize="20px" letterSpacing="0" color="#6C6C6C" lineheight="24px" fontWeight="350" $type="Light">
                    {text}
                </Typography>
          </VideoDescriptionItem>                  
      </DescriptionSection>
      {/* <div className="reflection-overlay"></div> */}
    </VideoDescriptionContainer>
  )  
}

const VideoContainer = styled.div`
    position: absolute;
    // width: 100%;
    // backface-visibility: hidden;
    // z-index: 100;
    // display: flex;
    // width: 844px;
    // height: 475px;
    top: 0;
    left:0;
    margin: 0;

    video {
      max-width: 100%;
      max-height: 100%;
    }
`


const VideoRollContainer = styled.div`
  position: relative;
  height: 100%;
  display: block;
`

const VideoAbsolute = styled.div`
  position: absolute;
  width: 100%;
  top:0;
  left: 0;
`


export default function ProductVideo({ children, slideContainerRef}: React.PropsWithChildren<{ slideContainerRef?: React.RefObject<HTMLDivElement>}>){

    const videoRef = useRef<HTMLVideoElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const btnVideo = useRef<HTMLButtonElement>(null)  
    const descriptionContainer = useRef<HTMLDivElement>(null)
    const [play, setPlay] = useState(false)
    const controller = new ScrollMagic.Controller();
    const [ scene, setScene ] = useState<ScrollMagic.Scene | undefined>()
    const [ videoLoaded, setVideoLoaded ] = useState(false)

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

    // const { scrollYProgress } = useScroll({ target: descriptionContainer })
    // const y = useParallax(scrollYProgress, 500)

    const [ box, setBox ] = useState(0)

    const [ width, height ] = useWindowSize();
    const screens = useBreakpoint();
    
    
    useEffect(() => {
        if(btnVideo.current){
            btnVideo.current.click()
        }
    },[play])

    useEffect(() => {
      if(videoLoaded){
        if(width <= 570){
          scene?.removePin(true)
          setScene(undefined)
        }else if(scene === undefined && width > 570){
          pinVideo()
        }
      }
    },[width,videoLoaded]) 


    const onVideoLoaded = (ev: Event) => {
      pinVideo()
      setVideoLoaded(true)      
    }


    useEffect(() => {
      videoRef.current?.addEventListener('loadeddata',onVideoLoaded)

      return () => videoRef.current?.removeEventListener('loadeddata',onVideoLoaded)
    },[videoRef])


    const isNext = (element1: DOMRect,element2: DOMRect,isFirst: boolean) => {
      
      const y = element1.top + element1.width * 0.3

      return y >= element2.top && y <= element2.bottom
    }
    
    
    const pinVideo = () => {
      const duration = (document.querySelector('#product-video-section') as HTMLElement)?.offsetHeight!! - (document.querySelector('#pinned-video') as HTMLElement)?.offsetHeight
      let lastElement: HTMLElement = document.querySelector('.motion-section')?.childNodes[0] as HTMLElement
      if(duration > 0){
        const _scene = new ScrollMagic.Scene({
          triggerElement: '#trigger-section',
          triggerHook: 'onLeave',
          duration: duration,
          offset: duration > 0 ? (-(document.querySelector('#pinned-video') as HTMLElement).offsetHeight * 0.4) : 0
        })
        .setPin('#pinned-video')
        .on('progress',(ev: any) => {
           const cards = Array.from((document.querySelector('.motion-section') as HTMLElement).childNodes);
           const pinned = document.querySelector('#pinned-video') as HTMLElement;

           const found = cards.filter((node: ChildNode,index) => isNext(pinned.getBoundingClientRect(),(node as HTMLElement).getBoundingClientRect(),index === 0));
           if(found && found.length > 0 && lastElement.id !== (found[0] as HTMLElement).id){
             (found?.[0] as HTMLElement).style.opacity = '1';
             lastElement.style.opacity = '0'
             lastElement = found[0] as HTMLElement
           }           

        })
        .addTo(controller)
        setScene(prev => _scene)
      }
    }

    // useEffect(() => {
    //   if(scene){
    //     debugger
    //     scene.update(true);
    //   }
    // },[width,height])

    // useEffect(() => {
    //   // if(Object.keys(screens).length > 0){
    //   //   const isSmall = (!!screens.sm || !!screens.xs) && (Object.entries(screens).filter(value => !['xs','sm'].includes(value[0])).every(value => !!value[1] === false));
    //   //   if(isSmall){
    //   //     scene?.removePin()
    //   //     setScene(undefined)
    //   //   }else if(!isSmall){
    //   //     if(!scene){
    //   //       debugger
    //   //       pinVideo()
    //   //     }
    //   //   }
    //   // }
    //   if(Object.keys(screens).length > 0 && scene){
    //     scene?.removePin()
    //     setScene(undefined)
    //   }
    // },[screens])

    // const scaleX = useSpring(scrollYProgress, {
    //     stiffness: 100,
    //     damping: 30,
    //     restDelta: 0.001
    //   });

    // width={"844px"}
    //                   height={"475px"}
    // xs={24} sm={18} md={18} lg={12} xl={12} xxl={4}
    // xs={24} lg={10}
    // xs={24} lg={7}
    // onLoadedData={pinVideo}
    return (
      <ProductContainer id={"product-container"} ref={containerRef}>
        <div id="trigger-section" style={{height: '1px'}}></div>
        <ProductVideoSection justify={"center"}>          
          <Video id="product-video-section" xs={18} sm={18} md={10} lg={10} xl={8} xxl={7}>
                <div id="pinned-video">
                  <video
                        id="video"
                        muted
                        loop                      
                        src="videos/product-animation.mp4"
                        ref={videoRef}                      
                    >
                      <source src="videos/product-animation.mp4" type="video/mp4"></source>
                    </video>
                    <button
                      ref={btnVideo}
                      onClick={() => videoRef.current?.play()}
                      hidden
                    >
                      play
                    </button>
                </div>
          </Video>
          <VideoDescription id="product-cards" xs={18} sm={18} md={10} lg={10} xl={8} xxl={7}>
            {/* <div style={{display: 'block'}}>
              <BenefitsParallax benefits={descriptionsBoxes.map(({ title, text },index) => ( <Benefit id={`benefit-${index}`} title={title} text={text} opacity={1} />))}  />
            </div> */}
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
            {/* index === 0 ? 1 : 0.05          */}
            <MotionSection className="motion-section">
              {
                descriptionsBoxes.map(({title, text}, index) => (
                  <React.Fragment key={index}>
                      <Benefit id={`benefit-${index}`} title={title} text={text} opacity={index === 0 ? 1 : 0} />
                  </React.Fragment>                  
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