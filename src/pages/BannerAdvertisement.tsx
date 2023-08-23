import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef} from "react";


const ParallaxImage = ({ imageSrc }: any) => {

  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0", "70%"]);

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

    return (
      <>        
        <ParallaxImage imageSrc={src} />
      </>        
    )
}