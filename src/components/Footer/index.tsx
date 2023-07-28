import { Icon } from "Icons"
import { Button as DefaultButton } from "components/Button"
import Typography from "components/Typography"
import styled from "styled-components"

const FooterContainer = styled.div`
    background: #164CA4;
    overflow:hidden;
`

const FooterBanner = styled.div`
    // border-radius: 8px;
    // background: url('img/banner-afterhours-footer.png'), lightgray 50% / cover no-repeat;
    // background-image: url('img/banner-afterhours-footer.png');
    // background-size: cover;
    // width: 100%;
    // height: 767px;
    // box-sizing: border-box;

    // #info-01 {
    //     margin-top: 316px;
    //     margin-left: 272px;
    // }

    width: 100%;
  /* whatever width you want */
    display: block;
    position: relative;
    background-size: cover !important;
    background: url('img/banner-afterhours-footer.png') top center no-repeat;
    margin: 0 auto;
    background-color: var(--cream);
`

const FooterHero = styled.div`
    display: flex;
    // height: 170px;
    flex-direction: column;
    align-items: center;
`

const CopyRightSection = styled.div`
    display: flex;
    padding: 48px 0px;
    justify-content: space-between;
    gap: 70em;
    align-items: center;

    @media (max-width: 480px){
        gap: 2rem;
        
        // padding-left: 1.5rem;
        // padding-right: 1.5rem;

        .copyright-text{
            font-family: Roc Grotesk Light !important;
            word-break: break-all;
            font-size: 0.875rem;
            line-height: 1rem;
            width: 8.375rem;
        }
    }
`

const Button = styled(DefaultButton)`
    span {
        color: var(--main-blue);
    }

    path {
        stroke: #164CA4;
    }
    width: fit-content;
    box-shadow: 4px 4px 0px 0px #000;
    margin-top: 43px;
    // margin-left: 281px;
`

const Bars = styled.div`
    // margin-top: 316px;
    // margin-left: 272px;
    box-sizing: border-box;
    flex-direction: column;
    display: inline-flex;

    position: absolute;
    top: 50%;
    left: 22%;
    
    // position: relative;
    // padding-top: 19.25rem;

    @media(max-width: 480px){
        left: 10%;
        button {
            margin-top: 0.2rem;
            span {
                font-size: 0.625rem;                
            }
            padding: 0.5rem 0.5rem 0.5rem 0.2rem;
            gap: 0rem;

            svg{
                width: 1rem;
                height: 1rem;
            }
        }
    }

`

const InfoBar = styled.div`
    border-radius: 100px;
    background: var(--cream);
    width: fit-content;
    // padding-left: 10px;
    padding-left:1.31rem;
    // padding-right: 15px;
    padding-right:2.37rem;

    @media(max-width: 480px){
        .bar-text {
            font-size: 0.625rem;
            line-height: 1.5rem;
        }
        padding-left: 0.6rem;
        padding-right: 0.4rem;
    }
`

const WhiteLogo = styled(Icon)`
    transform: rotate(24.446deg);
    // margin-left: 80%;
    // margin-top: -10%;
    width: 316px;
    height: 316px;
    position: absolute;
    top: 60%;
    left: 82%;

    @media(max-width: 480px){
        width: 5rem;
        height: 5rem;

        top: 10%;
        left: 10%;
    }
    
`

const BannerContent = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    // color: black;
    // text-align: center;
    // margin-top: 5%;
`

export default function Footer({ openModal }: React.PropsWithChildren<{openModal: any}>){
    return (
        <>
            <FooterBanner className="footer-banner">
                <BannerContent>
                    <Bars>
                        <InfoBar><Typography className="bar-text" fontSize="2.5rem" letterSpacing="0px" lineheight="3rem" $type="Bold">Stays in place all night,</Typography></InfoBar>
                        <InfoBar><Typography className="bar-text" fontSize="2.5rem" letterSpacing="0px" lineheight="3rem" $type="Bold">easy to remove in the</Typography></InfoBar>
                        <InfoBar><Typography className="bar-text" fontSize="2.5rem" letterSpacing="0px" lineheight="3rem" $type="Bold">morning light.</Typography></InfoBar> 
                        <Button onClick={openModal} color="#D2EEF9" icon={<><Icon src={"icons/stars.svg"} width="24px" height="24px" /></>}>Shop Now</Button>
                    </Bars>
                    <WhiteLogo src="icons/white-logo.svg" /> 
                </BannerContent>
                {/* <Bars>
                    <InfoBar><Typography fontSize="40px" letterSpacing="0px" lineheight="48px" $type="Bold">Stays in place all night,</Typography></InfoBar>
                    <InfoBar><Typography fontSize="40px" letterSpacing="0px" lineheight="48px" $type="Bold">easy to remove in the</Typography></InfoBar>
                    <InfoBar><Typography fontSize="40px" letterSpacing="0px" lineheight="48px" $type="Bold">morning light.</Typography></InfoBar> 
                    <Button onClick={openModal} color="#D2EEF9" icon={<><Icon src={"icons/stars.svg"} width="24px" height="24px" /></>}>Shop Now</Button>
                </Bars>
                <WhiteLogo src="icons/white-logo.svg" />                 */}
            </FooterBanner>
            <FooterContainer>
                <FooterHero> 
                    <CopyRightSection>
                        <Icon src="logo-white.svg" />
                        <Typography className="copyright-text" color="#FFF" fontSize="14px" letterSpacing="0px" lineheight="24px">® { new Date().getFullYear() } afterhours, All Rights Reserved</Typography>
                    </CopyRightSection>
                </FooterHero>                                                 
            </FooterContainer>            
        </>
    )
}