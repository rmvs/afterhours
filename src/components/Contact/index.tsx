import { Eyelash, Icon } from "Icons"
import Typography from "components/Typography"
import React from "react"
import styled from "styled-components"

const ContactSection = styled.div`
    display: flex;
    height: 80px;
    justify-content: center;
    align-items: center;
    gap: 60px;
    flex-shrink: 0;
    background: var(--cream);
    margin-top: 154px;
`

export default function Contact(props: React.PropsWithChildren){
    return (
        <ContactSection>
            {
                Array.from({ length: 3 }).map((value,index) => (
                    <React.Fragment key={index}>
                        <Typography fontSize="16px" lineheight="20px" letterSpacing="0px" $textTransform="uppercase">Free shipping on 2+ afterhours (USA only)</Typography>            
                        <Icon src="icons/eyelash-blue.svg"  />
                    </React.Fragment>
                ))
            }
        </ContactSection>
    )
}