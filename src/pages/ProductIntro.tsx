import { AfterHoursSlideStrapContainer, SlideContainer } from "components/AfterHoursSlideStrap";
import { ProductDescription } from "components/Product";
import Trivia from "components/Trivia";
import Slide from "components/Slide"
import AfterHoursStamp from "components/Stamp";
import { Logo } from "components/Logo";

export default function ProductIntro({ children, slideContainerRef, openModal }: React.PropsWithChildren< { slideContainerRef?: React.RefObject<HTMLDivElement>, openModal: any } >){
    return (
        <>
            <ProductDescription openModal={openModal}  />
            <Trivia />
            <AfterHoursSlideStrapContainer>
            <SlideContainer ref={slideContainerRef} $rotate="rotate(0.277deg)" id="slide-container">
                <Slide>
                    <>
                        <AfterHoursStamp strokeWidth="1" color="#D2EEF9" position="relative" inverted />
                        <Logo inverted width={'109.13px'} height={'52.86px'} />
                    </>
                </Slide>
            </SlideContainer> 
            </AfterHoursSlideStrapContainer>
        </>
    )
}