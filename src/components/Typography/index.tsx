import styled from "styled-components";


const Typography = styled.div<{ 
    fontSize?: string, 
    lineheight?: string, 
    letterSpacing?: string, 
    fontWeight?: string, 
    $type?: 'Bold' | 'Light', 
    $textTransform?: string,
    $fontFamily?: string}>`
    color: ${ props => props.color ? props.color : 'var(--main-blue)'};
    font-family: ${ props => props.$fontFamily || (props.$type ? `Roc Grotesk ${props.$type}` : 'Roc Grotesk') };
    font-size: ${props => !props.fontSize ? '55px' : props.fontSize};
    font-style: normal;
    font-weight: ${ props => props.fontWeight ? props.fontWeight : '400' };
    line-height: ${ props => !props.lineheight ? '55px' : props.lineheight };
    letter-spacing: ${ props => props.letterSpacing ? props.letterSpacing : '-1.65px' };
    text-transform: ${ props => props.$textTransform ? props.$textTransform : 'inherit' }


`

export default Typography