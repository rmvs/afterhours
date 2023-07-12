import styled from 'styled-components'
import SVG from 'react-inlinesvg'

const AfterHoursLogoSVG = styled(SVG)`
    width: 109.134px;
    height: 52.857px;
    flex-shrink: 0;
    @media(max-width: 480px){
        width: 25%;
        height: 25%;
        margin-left: 15px;
    }    
`


const Logo = (props: any) => <AfterHoursLogoSVG src="logo.svg" />

export { Logo }