import styled from 'styled-components'
import SVG from "react-inlinesvg";
import {Button as AntdButton, Popover} from 'antd'
import { Menu } from '../Nav';

const NavButtonStripe = styled(SVG)`
    stroke-width: 3px;
    stroke: var(--main-blue, #164CA4);
`


const Button = styled(AntdButton)`
    display: inline-flex;
    /*padding: 10px;*/
    padding: 0px;
    background: none;
    border: none;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    cursor: -webkit-grab;
    display: none;
    height: auto;    

    @media(max-width: 480px){
        display: inherit;
        position: relative;
        /*right: 10px;*/
        margin-left: 50%;
    }
`

const MobileMenu = ({ items }: any) => {
    return <Menu className="mobile-menu" style={{display: 'contents'}} items={items} mode="vertical"  />
}


const MobileButton = <T extends React.PropsWithChildren<{ items: any[] }>>(props: T) =>   (
<Popover className="burger-menu" placement={'bottomRight'} content={<MobileMenu {...props} />} trigger={'click'}>
    <Button>
        {
            Array.from({ length: 3 }).map( (value,index) => <NavButtonStripe key={index} src="icons/stripe.svg" />)
        }
    </Button>
</Popover>
)


export default MobileButton

// export default  (
//     <MobileButton>
//         {
//             Array.from({ length: 3 }).map( (value,index) => <NavButtonStripe key={index} src="icons/stripe.svg" />)
//         }
//     </MobileButton>
// )