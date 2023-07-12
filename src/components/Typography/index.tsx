import styled from "styled-components";

const Typography = styled.div<{ fontSize?: string, lineheight?: string, letterSpacing?: string }>`
    color: var(--main-blue);
    font-family: Roc Grotesk;
    font-size: ${props => !props.fontSize ? '55px' : props.fontSize};
    font-style: normal;
    font-weight: 400;
    line-height: ${ props => !props.lineheight ? '55px' : props.lineheight };
    letter-spacing: ${ props => props.letterSpacing ? props.letterSpacing : '-1.65px' };
`

export default Typography