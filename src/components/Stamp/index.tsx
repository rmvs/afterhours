import styled from "styled-components";
import SVG from 'react-inlinesvg';


const AfterHoursStamp = styled(({ position, inverted, ...props }: any) => <SVG id="afterhours-stamp-logo" {...props} style={{position, top: position === 'absolute' ? '35%' : 'inherit', left: position === 'absolute' ? '90%' : 'inherit' }} src={inverted ? 'stamp-inverted.svg' : 'icons/stamp.svg'} />)`    
    flex-shrink: 0;
    width: 163px;
    height: 163px;
    z-index: 9;
    @media(max-width: 480px){
        width: 68.912px !important;
        height: 68.912px !important;
        // width: 34px;
        // height: 34px;
        top: 90% !important;
    }
`

export default AfterHoursStamp
