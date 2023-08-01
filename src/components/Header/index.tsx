import styled from 'styled-components'
import { Layout as DefaultLayout } from "antd";

const { Header, Content: AntdContent } = DefaultLayout

const StyledHeader = styled(Header)`
    background: var(--cream);
    padding: 0.938rem;
    height: auto;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    // gap: 16px;
    // gap: 120rem;
    // overflow: hidden;

    // @media(max-width:480px){
    //     padding: 15px 0px;
    //     justify-content: flex-start;
    //     gap: 0rem;        
    // }
    
    // @media screen and (min-width: 1024px){
    //     // gap: 473px !important;
    //     gap: 29.5625;
    // }


    .burger-menu {
        display: none;
        position: absolute;
        right: 1rem;
    }

    /* Extra Small Devices (up to 575.98px) */
    @media (max-width: 575.98px) {
        justify-content: flex-start;
        .menu {
            display: none;
        }
        .burger-menu {
            display: flex !important;
        }
        padding: 0.9375rem;
    }

    /* Small Devices (576px to 767.98px) */
    @media (min-width: 576px) and (max-width: 767.98px) {
        justify-content: flex-start;
        .menu {
            display: none;
        }
        .burger-menu {
            display: flex !important;
        }
        padding: 0.9375rem;
    }

    /* Medium Devices (768px to 991.98px) */
    @media (min-width: 768px) and (max-width: 991.98px) {
        justify-content: flex-start;
        .menu {
            display: none;
        }
        .burger-menu {
            display: flex !important;
        }
        padding: 0.9375rem;
    }

    /* Large Devices (992px to 1199.98px) */
    @media (min-width: 992px) and (max-width: 1199.98px) {
        gap: 0rem;
    }

    /* Extra Large Devices (1200px to 1399.98px) */
    @media (min-width: 1200px) and (max-width: 1399.98px) {
        gap: 10rem;
    }

    /* Extra Extra Large Devices (1400px and above) */
    @media (min-width: 1400px) {
      gap: 25rem;      
    }

    @media(min-width: 1600px){
        gap: 40rem;
    }

`

const Layout = styled(DefaultLayout)`
    
`


const Content = styled(AntdContent)`
    background: linear-gradient(149deg, #FFFBF8 0%, rgba(210, 240, 242, 0.00) 97.40%);
`

// overflow: hidden;

export { Layout, StyledHeader,Content }