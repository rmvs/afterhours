import styled from 'styled-components'
import SVG from 'react-inlinesvg'

const EyelashSVG = styled(SVG)`
    width: 26.729px;
    height: 26.897px;
    display: flex;    
`

const StarSVG = styled(SVG)`
    width: 20.818px;
    height: 21.764px;
    flex-shrink: 0;
`

const MoonSVG = styled(SVG)`
    width: 21px;
    height: 21px;
    flex-shrink: 0;
`

const ArrowSVG = styled(SVG)`
    width: 24px;
    height: 24px;
    flex-shrink: 0;
`

interface IconProps {
    src: string,
    width?: string,
    height?: string,
    color?: string
    strokeWidth?: string
}

export const Icon = styled(SVG)<IconProps>`
  width: ${props => props.width};
  height: ${props => props.height };
  display: ${props => props.display || 'inherit'};  
  flex-shrink: 0;

  path {
    stroke: ${props => props.color};
    stroke-width: ${ props => props.strokeWidth || 1 };
    fill: ${ props => props.fill };
  }
`

export const Eyelash = ({ width, height, ...props }: any) => <Icon src="icons/eyelash.svg" {...props} width={width || "26.729px"} height={height || "26.897px"} display="flex" />
export const Star = (props: any) => <Icon src="icons/star.svg" width="20.818px" height="21.764px" />
export const Moon = (props:any) => <Icon src="icons/moon.svg" width="21px" height="21px" />
export const Chevron = ({ direction = 'top' }: { direction: 'top' | 'bottom' }) => <Icon src={`icons/chevron-${direction}.svg`} width="24px" height="24px" color={'#164CA4'} />