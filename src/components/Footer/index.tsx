import { Icon } from "Icons"
import { Button as DefaultButton } from "components/Button"
import Typography from "components/Typography"
import styled from "styled-components"

const FooterContainer = styled.div`
    background: #164CA4;
`

const FooterBanner = styled.div`
    border-radius: 8px;
    background: url('img/banner-afterhours-footer.png'), lightgray 50% / cover no-repeat;
    background-size: cover;
    width: 100%;
    height: 767px;
    box-sizing: border-box;

    // #info-01 {
    //     margin-top: 316px;
    //     margin-left: 272px;
    // }

    
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
    margin-top: 316px;
    margin-left: 272px;
    box-sizing: border-box;
    flex-direction: column;
    display: inline-flex;
`

const InfoBar = styled.div`
    border-radius: 100px;
    background: var(--cream);
    width: fit-content;
    padding-left: 10px;
    padding-right: 15px;
`

const WhiteLogo = styled(Icon)`
    transform: rotate(24.446deg);
    margin-left: 80%;
    margin-top: -10%;
    width: 316px;
    height: 316px;
    
`

export default function Footer(props: React.PropsWithChildren){
    return (
        <FooterContainer>
            <FooterBanner>
                <Bars>
                    <InfoBar><Typography fontSize="40px" letterSpacing="0px" lineheight="48px" $type="Bold">Stays in place all night,</Typography></InfoBar>
                    <InfoBar><Typography fontSize="40px" letterSpacing="0px" lineheight="48px" $type="Bold">easy to remove in the</Typography></InfoBar>
                    <InfoBar><Typography fontSize="40px" letterSpacing="0px" lineheight="48px" $type="Bold">morning light.</Typography></InfoBar> 
                    <Button color="#D2EEF9" icon={<><Icon src={"icons/stars.svg"} width="24px" height="24px" /></>}>Shop Now</Button>
                </Bars>
                <WhiteLogo src="icons/white-logo.svg" />                
            </FooterBanner>
            <FooterHero> 
                <CopyRightSection>
                    <div>
                        <Icon src="logo-white.svg" />
                    </div>
                    <div>
                        <Typography color="#FFF" fontSize="14px" letterSpacing="0px" lineheight="24px">® { new Date().getFullYear() } afterhours, All Rights Reserved</Typography>
                    </div>
                </CopyRightSection>
            </FooterHero>                      
        </FooterContainer>
    )
}