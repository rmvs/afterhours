import styled from 'styled-components'
import { Layout as AntdLayout } from "antd";

const { Header, Content } = AntdLayout

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
`;

const Layout = styled(AntdLayout)`
    
`;

// overflow: hidden;

export { Layout, StyledHeader,Content }