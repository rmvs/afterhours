import { SlideContainer as DefaultSlideContainer } from "components/AfterHoursSlideStrap";
import { ProductDescription } from "components/Product";
import Trivia from "components/Trivia";
import Slide from "components/Slide"
import AfterHoursStamp from "components/Stamp";
import { Logo } from "components/Logo";
import styled from "styled-components";


const ProductSlideSection = styled.div`
    background: ${ props => props.color || 'var(--main-blue)' };

    & .default-logo-slide .motion-container {
        gap: 69.93px;
        div {
            gap: 69.93px;
        }
    }

    @media(max-width: 480px), (max-width: 575px) {
        & .default-logo-slide .motion-container {
            gap: 21.84px;
            div {
                gap: 21.84px;
            }
        }
    }
`

const SlideContainer = styled(DefaultSlideContainer)`
    .motion-container {
        padding: 40.35px 0px 46.28px 0px;
    }
`

export default function ProductIntro({ children, slideContainerRef, openModal }: React.PropsWithChildren< { slideContainerRef?: React.RefObject<HTMLDivElement>, openModal: any } >){
    return (
        <>
            <ProductDescription openModal={openModal}  />
            <Trivia />
                <SlideContainer className="default-logo-slide"  ref={slideContainerRef} id="slide-container">                
                    <ProductSlideSection ref={slideContainerRef}>
                        <SlideContainer className="default-logo-slide">
                            <Slide>
                                <>
                                    <AfterHoursStamp strokeWidth="1" color="#D2EEF9" position="relative" inverted />
                                    <Logo className="logo-slide-section" inverted width={'109.13px'} height={'52.86px'} />
                                </>
                            </Slide>
                        </SlideContainer>
                    </ProductSlideSection> 
                </SlideContainer>
            {/* </AfterHoursSlideStrapContainer> */}
        </>
    )
}