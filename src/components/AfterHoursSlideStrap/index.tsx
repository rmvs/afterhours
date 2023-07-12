import { Row, Col } from "antd";
import { Logo } from "components/Logo";
import AfterHoursStamp from "components/Stamp";
import styled from "styled-components";

export const AfterHoursSlideStrapContainer = styled.div`
    background: ${ props => props.color ? props.color : 'var(--main-blue)' };
    transform: rotate(0.362deg);
    flex-shrink: 0;
    width: 100%;
    gap: 69.93px;
    margin-left: -1px;
`

export const SlideContainer = styled.div`
    padding-top: 25px;
    padding-bottom: 25px;
    display: inline-flex;
    transform: rotate(0.277deg);
    align-items: center;
    gap: 69.93px;
    margin-left: -5%;
`



export default function AfterHoursBar(props: React.PropsWithChildren){
    return (
        <SlideContainer>
            <AfterHoursStamp stroke="#164CA4" fill="#D2EEF9" inverted />
            <Logo />
        </SlideContainer>
    )
}