import { Icon } from "Icons";
import { Col, Row } from "antd";
import Block from "components/Block";
import Typography from "components/Typography";
import React from "react";
import styled from "styled-components";

const BenefitsSection = styled(Row)`
    padding-bottom: 115px;
    gap: 30px;

    // @media(max-width: 480px), (max-width: 575px){
    //   // overflow-x: scroll;
    //     display: inline-flex;
    //     align-items: flex-start;
    //     flex-flow: nowrap;
    //     padding-bottom: 0px;
    //     padding-left: 0.5rem;
    // }
`

const BenefitsContainer = styled.div`
  margin-top: 153px;
  @media(max-width: 480px),(max-width: 575px){
    margin-top: 63px;
    overflow-x: scroll;
    margin-bottom: 115px;
  }
`

export default function Benefits(props: React.PropsWithChildren){

    const benefits: string[] = [
        'No straps',
        '100% Light Blocking',
        '100% Silk',
        'Reusable'
    ]

    // <Block type="primary" hasIcon>
    //                 <Icon src={"icons/stars.svg"} width={'47px'} height={'47px'} color={'#164CA4'} strokeWidth={"1"} />
    //                 <div>No straps</div>
    //             </Block>

    // <BenefitsSection>
    //         { benefits.map((value,index) => (
    //             <Block key={index} type="primary" hasIcon>
    //                 <Icon src={"icons/stars.svg"} width={'47px'} height={'47px'} color={'#164CA4'} strokeWidth={"1"} />
    //                 <div>{ value }</div>
    //             </Block>
    //         )) }
    //     </BenefitsSection>
    // gutter={[30,2]}
    return (
      <BenefitsContainer>
          <BenefitsSection justify={"center"}>
          {benefits.map((value, index) => (
            <Col key={index}>
              <Block key={index} type="primary" hasIcon>
                <Icon
                  src={"icons/stars.svg"}
                  width={"47px"}
                  height={"47px"}
                  color={"#164CA4"}
                  strokeWidth={"1"}
                />
                <Typography fontSize="1.25rem" lineheight="1.5rem" $textTransform="uppercase" $type="Bold" letterSpacing="0px">{value}</Typography>
              </Block>
            </Col>
          ))}
        </BenefitsSection>
      </BenefitsContainer>
    );
}