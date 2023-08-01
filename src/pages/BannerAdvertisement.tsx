import styled from "styled-components"
import { motion, useScroll, useSpring, useTransform, useViewportScroll } from 'framer-motion';
import { useEffect, useRef, useState } from "react";

const BannerContainer = styled.div<{$src: string,$paddingtop?: string}>`
    // flex-shrink: 0;
    // border-radius: 8px;
    // padding-top: ${ props => props.$paddingtop || '0px' };
    // padding-bottom: 333px;
    // background-image: url("${ props => props.$src || "" }");
    // background-size: cover;
    img {
        width: 100%;
    }
    padding-top: ${ props => props.$paddingtop || '0px' };
    // padding-bottom: 333px;

`


const ParallaxImage = ({ imageSrc }: any) => {
  // const { scrollYProgress } = useViewportScroll();
  // const y = useTransform(scrollYProgress, [0, 100], ['0', '100%']); // Adjust the factor for the parallax effect

  // const [ hookedPosition, setHookedPosition ] = useState(0)

  // useEffect(() => {
  //   scrollYProgress.onChange((pos) => {
  //     setHookedPosition(pos)
  //     console.log(pos)
  //   })
  // },[scrollYProgress])

  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0", "70%"]);

  backgroundY.onChange((value) => console.log(value))

  return (
    <>
      <div ref={ref} style={{width: '100%',height:'100vh',overflow:'hidden',position:'relative',placeItems: 'center'}}>      
        <motion.div
          style={{
            backgroundImage: `url('${imageSrc}')`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: backgroundY,
            position: 'absolute',
            inset: 0,
            zIndex: 20
          }}    
        />      
      </div>
    </>
  );
};


export default function BannerAdvertisement({ src, paddingTop, ...props }: React.PropsWithChildren<{ src: string, paddingTop?: string }>){


      // <BannerContainer $src={src} $paddingtop={paddingTop} {...props}>
      //       {/* <img src={src} alt="" /> */}
      //       <motion.img src={src} alt="advertising woman"></motion.img>
      //   </BannerContainer>

    return (
      <>        
        <ParallaxImage imageSrc={src} />
      </>        
    )
}