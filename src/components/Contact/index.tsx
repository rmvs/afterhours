import { Icon } from "Icons"
import { SlideContainer } from "components/AfterHoursSlideStrap"
import Slide from "components/Slide"
import Typography from "components/Typography"
import React from "react"
import styled from "styled-components"

const ContactSection = styled.div`
    // display: flex;
    // height: 80px;
    // justify-content: center;
    // align-items: center;
    // gap: 60px;
    flex-shrink: 0;
    background: var(--cream);
    margin-top: 154px;

    .contacts {
        white-space: nowrap;
    }

    .motion-container {
        display: flex;
        gap: 10px;
    }

    .motion-container > div {
        gap: 10px;
    }

    @media(max-width: 480px){
        // display: none;
        .motion-container {
            padding: 25px 0;
        }
    }

    @media (min-width: 481px) and (max-width: 768px){
        .contacts {
            font-size: 10px;
        }
        gap: 5px;
    }

    
    @media (min-width: 1024px) and (max-width: 1439px) {
        .contacts {
            font-size: 13px;
        }
        gap: 10px;
    }

    @media (min-width: 1440px) and (max-width: 1559px){
        .contacts {
            font-size: 15px;
        }
    }

    @media (min-width: 1600px){
        .contacts {
            // font-size: 25px;
        }
    }
`

/* eslint-disable jsx-a11y/no-distracting-elements */
export default function Contact(props: React.PropsWithChildren){

    return (
        <>            
            <ContactSection>
                <SlideContainer>
                    <Slide>
                        <>
                            <Typography className="contacts" fontSize="16px" lineheight="20px" letterSpacing="0px" $textTransform="uppercase">Free shipping on 2+ mask (USA only)</Typography>            
                            <Icon src="icons/eyelash-blue.svg"  />
                        </>
                    </Slide>
                </SlideContainer>
            </ContactSection>
        </>
    )
}