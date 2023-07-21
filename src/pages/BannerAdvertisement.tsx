import styled from "styled-components"
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";

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

export default function BannerAdvertisement({ src, paddingTop, ...props }: React.PropsWithChildren<{ src: string, paddingTop?: string }>){
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
          setScrollY(window.scrollY);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      const parallaxOffset = scrollY * 0.3;

    return (
        <BannerContainer $src={src} $paddingtop={paddingTop} {...props}>
            {/* <img src={src} alt="" /> */}
            <motion.img src={src} alt="advertising woman"></motion.img>
        </BannerContainer>
    )
}