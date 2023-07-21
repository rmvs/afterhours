import { Icon } from "Icons";
import { Col, Row } from "antd";
import Block from "components/Block";
import React from "react";
import styled from "styled-components";

const BenefitsSection = styled(Row)`
    padding-bottom: 115px;
    gap: 30px;
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
              <div>{value}</div>
            </Block>
          </Col>
        ))}
      </BenefitsSection>
    );
}