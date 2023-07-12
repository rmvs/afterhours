import { Icon } from "Icons";
import { Col, Row } from "antd";
import Block from "components/Block";
import Typography from "components/Typography";
import styled from "styled-components";

const Container = styled.div`
    padding: 74px 258px 137px 258px;
    background: rgba(255,251,248,1);
`

const TextBlock = styled.div`
    display: inline-flex;
    padding: 40px;
    flex-direction: column;
    align-items: flex-start;
    gap: 21px;
    flex-shrink: 0;
`

const EyelashContainer = styled.div`
    position: absolute;
    top: -15px;
    right: 0;
`

export default function Trivia(props: React.PropsWithChildren){
    return (
        <Container>
            <Row gutter={[100,1]} justify={"center"}>
                <Col span={6}>
                    <Typography>
                        Did you know?
                    </Typography>
                </Col>
                <Col span={9}>
                    <Block background={'#FAF1E8'} borderless borderRadius={'50px'} width="auto" block>
                        <TextBlock>
                            <div>
                                <Icon src="icons/stamp-trivia-1.svg" width="93px" height="92px" />
                                <EyelashContainer>
                                    <Icon src="icons/eyelash-big.svg" width="188.744px" height="102.097px" />
                                </EyelashContainer>
                            </div>                        
                            <Typography fontSize={'24px'} lineheight="35px">
                                Side sleepers make up 74 percent of the population. 
                                afterHours relieves the discomfort often associated with traditional sleep masks and their tight bands which press on temples.
                            </Typography>
                        </TextBlock>                       
                    </Block>
                </Col>
                <Col span={9}>
                    <Block background={'#D2EEF9'} borderless borderRadius={'50px'} width="auto" block>
                     <TextBlock>
                        <div>
                            <Icon src="icons/stamp-trivia-2.svg" width="93px" height="92px" />
                            <EyelashContainer>
                                <Icon src="icons/eyelash-big.svg" width="188.744px" height="102.097px" />
                            </EyelashContainer>
                        </div>
                        <Typography fontSize={'24px'} lineheight="35px" letterSpacing="0px">
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