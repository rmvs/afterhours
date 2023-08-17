import styled from 'styled-components'
import SVG from 'react-inlinesvg'

const AfterHoursLogoSVG = styled(SVG)`
    width: ${ props => props.width || '109.13px'};
    height: ${ props => props.width || '52.86px' };
    flex-shrink: 0;
    @media(max-width: 480px), (max-width: 575px){
        // width: 25%;
        // height: 25%;
        // margin-left: 15px;
        &.logo-slide-section {
            width: 2.16713rem;
            height: 1.03194rem;
        }
        &.logo-slide-white {
            width: 3.89319rem;
            height: 1.85388rem;
        }
        &.logo-nav-section {
            width: 4.59375rem;
            height: 2.1875rem;
        }
    }    
`


const Logo = ({ inverted, width, height, ref, className }: { inverted?: boolean, width?: string, height?: string, ref?: any, className?: string }) => <AfterHoursLogoSVG className={className} ref={ref} src={inverted ? "logo-inverted.svg" : "logo.svg"} width={width} height={height} />

export { Logo }