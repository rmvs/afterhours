import styled from "styled-components";
import SVG from 'react-inlinesvg'

// ${ props => props.position === 'absolute' ?
// `
//  top: 37%;
//  left: 89%;
// ` : ``
// }

const StampContainer = styled.div<{ position?: string }>`
    // position: ${ props => props.position || 'relative' };

    // z-index: 999;
    // max-width: 100%;
    // max-height: 100%;

    @media(max-width: 480px){
        bottom: 0px;
        left: 80%;
        top: unset;       
    }
`

// ${ position === 'absolute' ? `
//         top: 35%;
//         left: 88%;
//     ` : '' }

{/* <StampContainer ></StampContainer>) */}
const AfterHoursStamp = styled(({ position, inverted, ...props }: any) => <SVG id="afterhours-stamp-logo" {...props} style={{position, top: position === 'absolute' ? '35%' : 'inherit', left: position === 'absolute' ? '90%' : 'inherit' }} src={inverted ? 'stamp-inverted.svg' : 'icons/stamp.svg'} />)`    
    flex-shrink: 0;
    width: 163px;
    height: 163px;
    z-index: 9;
    @media(max-width: 480px){
        // width: 68.912px !important;
        // height: 68.912px !important;
        width: 34px;
        height: 34px;
    }
`

export default AfterHoursStamp
