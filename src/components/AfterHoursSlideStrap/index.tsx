import { Logo } from "components/Logo";
import AfterHoursStamp from "components/Stamp";
import styled from "styled-components";

export const AfterHoursSlideStrapContainer = styled.div`
    background: ${ props => props.color ? props.color : 'var(--main-blue)' };
    transform: rotate(0.362deg);
    // flex-shrink: 0;
    // width: 100%;
    // gap: 69.93px;
    // margin-left: -1px;

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

export const SlideContainer = styled.div<{$rotate?: string}>`
    .motion-container {
        padding-top: 25px;
        padding-bottom: 25px;
        display: flex;        
        align-items: center;
        /*gap: 69.93px;*/
        gap: 50px;
        /*width:auto;*/
        clear:both;
        width: fit-content;
    }
    ${ props => props.$rotate ? 
    `
    transform: ${ props.$rotate ? `rotate(${ props.$rotate }deg)`: '' } ;
    ` : `` }
    /*margin-left: -5%;*/

    @media(max-width: 480px){
        &.default-logo-slide .motion-container {
            // gap: 80px !important;
            padding-top: 12.09px;
            padding-bottom: 13.87px;
        }
        & .motion-container {
            gap: 45.2px;
            padding: 1.5px 0px;
        }
    }
`



export default function AfterHoursBar(props: React.PropsWithChildren){
    return (
        <SlideContainer>
            <AfterHoursStamp stroke="#164CA4" fill="#D2EEF9" inverted />
            <Logo />
        </SlideContainer>
    )
}