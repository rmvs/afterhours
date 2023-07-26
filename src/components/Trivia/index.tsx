import { Icon } from "Icons";
import { Col, Row } from "antd";
import DefaultBlock from "components/Block";
import Typography from "components/Typography";
import styled from "styled-components";

const Container = styled.div`
    padding: 74px 258px 137px 258px;
    background: rgba(255,251,248,1);

    .ant-row {
        gap: 50px;
    }

    @media(max-width: 480px){
        padding: 0 39px 70px 39px;

        .ant-row > .ant-col > .trivia-header-section > div {
            font-size: 40px;
            letter-spacing: -1.2px;
            line-height: 40px;
        }
    }
`

const TextBlock = styled.div`
    display: inline-flex;
    padding: 40px;
    flex-direction: column;
    align-items: flex-start;
    gap: 21px;
    flex-shrink: 0;

    @media(max-width: 480px){
        padding: 28px;
        .trivia-description {
            font-size: 16px;
            font-family: Roc Grotesk Light;
            line-height: 20px;
            letter-spacing: 0px;
        }
        svg {
            width: 61px;
            height: 60.344px;
        }
    }
`

const EyelashContainer = styled.div`
    position: absolute;
    top: -15px;
    left: 75%;

    @media(max-width: 480px){
        left: calc(100% - 50px);
    }
`

const Block = styled(DefaultBlock)`
    padding: 0;
    max-height: 438px;

    @media(max-width: 480px){
        max-height: fit-content;
    }
`

export default function Trivia(props: React.PropsWithChildren){
    return (
        <Container id="did-you-know">
            <Row justify={"center"}>
                <Col className="trivia-header-section" xs={24} md={4}>
                    <Typography>
                        Did you know?
                    </Typography>
                </Col>
                <Col xs={24} md={6}>
                    <Block background={'#FAF1E8'} borderless borderRadius={'50px'} width="auto" block>
                        <TextBlock>
                            <EyelashContainer>
                                <Icon src="icons/eyelash-big.svg" width="188.744px" height="102.097px" />
                            </EyelashContainer>
                            <div>
                                <Icon src="icons/stamp-trivia-1.svg" width="93px" height="92px" />                                
                            </div>                        
                            <Typography className="trivia-description" fontSize={'24px'} lineheight="35px">
                                Side sleepers make up 74 percent of the population. 
                                afterHours relieves the discomfort often associated with traditional sleep masks and their tight bands which press on temples.
                            </Typography>
                        </TextBlock>                       
                    </Block>
                </Col>
                <Col xs={24} md={6}>
                    <Block background={'#D2EEF9'} borderless borderRadius={'50px'} width="auto" block>
                     <TextBlock>
                        <div>
                            <Icon src="icons/stamp-trivia-2.svg" width="93px" height="92px" />
                            <EyelashContainer>
                                <Icon src="icons/eyelash-big.svg" width="188.744px" height="102.097px" />
                            </EyelashContainer>
                        </div>
                        <Typography className="trivia-description" fontSize={'24px'} lineheight="35px" letterSpacing="0px">
                            Light Exposure = a Nightmare for Your Sleep Patterns Exposure to light in the evenings (natural or artificial)  has the potential to impact the natural process of falling asleep. 
                            A sleep mask that blocks out light is the answer.
                        </Typography>
                     </TextBlock>
                    </Block>
                </Col>
            </Row>
        </Container>
    )
}