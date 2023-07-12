import styled from 'styled-components'
import SVG from 'react-inlinesvg'

const AfterHoursLogoSVG = styled(SVG)`
    width: ${ props => props.width || '109.13px'};
    height: ${ props => props.width || '52.86px' };
    flex-shrink: 0;
    @media(max-width: 480px){
        width: 25%;
        height: 25%;
        margin-left: 15px;
    }    
`


const Logo = ({ inverted, width, height }: { inverted?: boolean, width?: string, height?: string }) => <AfterHoursLogoSVG src={inverted ? "logo-inverted.svg" : "logo.svg"} width={width} height={height} />

export { Logo }