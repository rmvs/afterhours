import { Icon } from "Icons";
import { Col, Row } from "antd";
import DefaultBlock from "components/Block";
import Typography from "components/Typography";
import styled from "styled-components";

const Container = styled.div`
    // padding: 74px 258px 137px 258px;
    padding-bottom: 137px;
    background: rgba(255,251,248,1);

    .ant-row {
        // gap: 50px;
        gap: 2.5em;
    }    

    @media(max-width: 480px){
        // padding: 0 39px 70px 39px;

        // .ant-row > .ant-col > .trivia-header-section > div {
        //     font-size: 40px;
        //     letter-spacing: -1.2px;
        //     line-height: 40px;
        // }

        .trivia-header-section > div {
            font-size: 40px;
            letter-spacing: -1.2px;
            line-height: 40px;
        }
    }
`

const TextBlock = styled.div`
    position: relative;
    display: inline-flex;
    // padding: 40px;
    padding: 2.5em;
    flex-direction: column;
    align-items: flex-start;
    gap: 21px;
    flex-shrink: 0;

    @media (max-width: 767px) {
        padding: 0px
    }

    @media(max-width: 480px),(max-width: 575px){
        padding: 28px;
        .trivia-description {
            font-size: 16px;
            font-family: Roc Grotesk Light !important;
            line-height: 20px;
            letter-spacing: 0px;
            leading-trim: both;
            text-edge: cap;
        }
        .trivia-stamp {
            width: 3.8125rem;
            height: 3.7715rem;
        }
        gap: 1.46025rem;
        // svg {
        //     width: 61px;
        //     height: 60.344px;
        // }
    }
`
// ${ props => props.$containerName ? document.querySelector(props.$containerName)?.getBoundingClientRect().width + 'px' :'100%'}
const EyelashContainer = styled.div<{$width: number, $height: number, $containerName?: string}>`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    // top: -15px;
    // left: 75%;

    // @media(max-width: 480px){
    //     left: calc(100% - 50px);
    // }

    @media(max-width: 480px),(max-width: 575px){
        svg {
            margin-left: calc(100% - 79.36px * 0.5) !important;
            margin-top: calc(-92.928px * 0.5) !important;

            width: 79.36px !important;
            height: 92.928px !important;
        }
    }

    svg {
        margin-left: calc(100% - ${ props => props.$width}px * 0.7);
        margin-top: -3%;
        z-index: 999;
        width: ${ props => props.$width }px;
        height: ${ props => props.$height }px;
    }
`

const Block = styled(DefaultBlock)`
    padding: 0;
    // max-height: 438px;
    max-height: 27.375rem;
    max-width: 31.5625rem;

    border-radius: 3.125rem;

    @media(max-width: 480px){
        // max-height: fit-content;
    }

    @media(max-width: 767px){
        padding: 1.75rem;
        border-radius: 0.625rem;
    }
`

export default function Trivia(props: React.PropsWithChildren){
    return (
        <Container id="did-you-know">
            <Row justify={"center"}>
                <Col className="trivia-header-section" xs={10} sm={18} md={18} lg={12} xl={4} xxl={6}>
                    <Typography>
                        Did you know?
                    </Typography>
                </Col>
                <Col xs={22} sm={18} md={18} lg={12} xl={8} xxl={6}>
                    <Block className="trivia-block-01" background={'#FAF1E8'} borderless borderRadius={'50px'} width="auto" block>
                        <TextBlock>
                            <Icon className="trivia-stamp" src="icons/stamp-trivia-1.svg" width="93px" height="92px" />
                            <EyelashContainer $width={188.744} $height={102.097} $containerName=".trivia-block-01">
                                <Icon src="icons/eyelash-big.svg" />
                            </EyelashContainer>                     
                            <Typography className="trivia-description" fontSize={'24px'} lineheight="35px">
                                Side sleepers make up 74 percent of the population. 
                                afterHours relieves the discomfort often associated with traditional sleep masks and their tight bands which press on temples.
                            </Typography>
                        </TextBlock>                       
                    </Block>
                </Col>
                <Col xs={22} sm={18} md={18} lg={12} xl={8} xxl={6}>
                    <Block className="trivia-block-02" background={'#D2EEF9'} borderless borderRadius={'50px'} width="auto" block>
                     <TextBlock>
                        <>
                            <Icon className="trivia-stamp" src="icons/stamp-trivia-2.svg" width="93px" height="92px" />
                            <EyelashContainer $width={188.744} $height={102.097}>
                                <Icon src="icons/eyelash-big.svg" />
                            </EyelashContainer>
                        </>
                        {/* 24px 35px */}
                        <Typography className="trivia-description" fontSize={'1.5em'} lineheight="35px" letterSpacing="0px">
                            Light exposure = a nightmare for your sleep patterns. Exposure to light in the evenings (natural or artificial) has the potential to impact the natural process of falling asleep. 
                            A sleep mask that blocks out light is the answer.
                        </Typography>
                     </TextBlock>
                    </Block>
                </Col>
            </Row>
        </Container>
    )
}