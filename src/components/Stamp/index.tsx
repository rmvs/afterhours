import styled from "styled-components";
import SVG from 'react-inlinesvg'

const StampContainer = styled.div<{ position?: string }>`
    position: ${ props => props.position || 'relative' };
    ${ props => props.position === 'absolute' ?
       `
        top: 25%;
        left: -20%;
       ` : ``
     }
    z-index: 999;

    @media(max-width: 480px){
        top: -9%;
        left: 75%;        
    }
`

const AfterHoursStamp = styled(({ position, inverted, ...props }: any) => <StampContainer position={position} ><SVG {...props} src={inverted ? 'stamp-inverted.svg' : 'icons/stamp.svg'} /></StampContainer>)`    
    flex-shrink: 0;
    width: 163px;
    height: 163px;
    @media(max-width: 480px){
        width: 68.912px !important;
        height: 68.912px !important;
    }
`

export default AfterHoursStamp
