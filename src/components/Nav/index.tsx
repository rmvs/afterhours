import styled from 'styled-components'
import { Menu as AntMenu } from "antd";


const TopFrame = styled.div`
    display: flex;
    width: 100%;
    height: 56px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex-shrink: 0;
    background: var(--main-blue);
    overflow: hidden;
`

const PaddingContainer = styled("div")`
    padding-left: 40px;
`

const TopFrameContainer = styled((( { children, ...props  }: any ) => <PaddingContainer {...props} >{ children }</PaddingContainer>))`
    display: flex;
    align-items: center;
    gap: 40px;
`

const TopFrameLabel= styled.div`
    color: var(--light-electric-green);
    text-align: center;    

    /* CAPTION BOLD */
    font-size: 16px;
    font-family: Roc Grotesk;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 4.8px;
    text-transform: uppercase;
`

const TopFrameBlock = styled.div<{ $borderRight?: boolean, $paddingRight?: boolean }>`
    border-right: ${(props: any) => props.$borderRight ? 'solid 1px var(--light-electric-green)' : 'none'};
    padding-right: ${(props: any) => props.$paddingRight? '40px' : 0};
`

const Menu: typeof AntMenu = styled(AntMenu)`
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    gap: 16px;
    // width: 100%;

    @media (min-width: 1025px){
        // padding-left: 573px;
    };
    // @media (max-width: 767px){
    //     display: none;

    //     &.mobile-menu {
    //         display: contents !important;
    //     }        
    // };

    // @media(max-width: 820px){
    //     gap: 5px !important;
    // }

    .ant-menu-title-content {
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 20px;
    }
`



export { Menu, TopFrame, TopFrameContainer, TopFrameLabel, TopFrameBlock }