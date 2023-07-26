import styled from 'styled-components'
import { Layout as DefaultLayout } from "antd";

const { Header, Content: AntdContent } = DefaultLayout

const StyledHeader = styled(Header)`
    background: var(--cream);
    padding: 15px 300px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    overflow: hidden;

    @media(max-width:480px){
        padding: 15px 0px;
        justify-content: flex-start;        
    }
    
    @media screen and (min-width: 1024px){
        gap: 473px !important;
    }
`

const Layout = styled(DefaultLayout)`
    
`


const Content = styled(AntdContent)`
    background: linear-gradient(149deg, #FFFBF8 0%, rgba(210, 240, 242, 0.00) 97.40%);
`

// overflow: hidden;

export { Layout, StyledHeader,Content }