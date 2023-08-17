import { Eyelash, Icon } from "Icons"
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

const ContactsSectionMobile = styled(ContactSection)`
    @media(max-width: 480px){
        display: flex;
    }
    max-height: 65px;
    display: none;
    gap: 1.2rem;
    justify-content:center;
    
    margin-top: 0px;

    .contact-shipping {
        font-size: 0.8125rem;
        line-height: 1.01563rem;
    }
`
/* eslint-disable jsx-a11y/no-distracting-elements */
export default function Contact(props: React.PropsWithChildren){

    const nodes = Array.from({ length: 3 }).map((value,index) => (
        <React.Fragment key={index}>
            <Typography className="contacts" fontSize="16px" lineheight="20px" letterSpacing="0px" $textTransform="uppercase">Free shipping on 2+ mask (USA only)</Typography>            
            <Icon src="icons/eyelash-blue.svg"  />
        </React.Fragment>
    ))

    return (
        <>
            {/* <ContactSection>
                    {
                        Array.from({ length: 3 }).map((value,index) => (
                            <React.Fragment key={index}>
                                <Typography className="contacts" fontSize="16px" lineheight="20px" letterSpacing="0px" $textTransform="uppercase">Free shipping on 2+ mask (USA only)</Typography>            
                                <Icon src="icons/eyelash-blue.svg"  />
                            </React.Fragment>
                        ))
                    }
            </ContactSection> */}

            
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


            {/* <ContactsSectionMobile> 
                    <Typography className="contact-shipping" fontSize="16px" lineheight="20px" letterSpacing="0px" $textTransform="uppercase">Free shipping on 2+ mask (USA only)</Typography>            
                    <Icon src="icons/eyelash-blue.svg"  />               
            </ContactsSectionMobile> */}
        </>
    )
}