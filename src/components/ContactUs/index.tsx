import { useWindowSize } from "@react-hook/window-size";
import { Icon } from "Icons";
import { Modal as AntdModal, Button, Col, Input as AntdInput, Row, Space } from "antd";
import Typography from "components/Typography";
import React, { useEffect, useRef, useState } from "react";
import { userService } from "services";
import styled from "styled-components";

const Modal = styled(AntdModal)`
    border-radius: 30px;
    background: var(--bg, #FFFBF8);
    box-shadow: 0px 0px 100px 0px rgba(210, 240, 242, 0.60);

    .ant-modal-content {
        padding: 0px;
        background: var(--cream);
    }

    img {
        width: 100%;
        height: 100%;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;        
    }

    @media(max-width: 480px){
        .modal-image {
            display: flex;
        }
    }
`

const NotifyMe = styled.div`
    display: flex;
    // width: 467px;
    flex-direction: column;
    align-items: flex-start;
    gap: 49px;
    padding: 40px;
    // padding: 243.14px 102px 217.14px 116px;

    .ant-click-animating-node {
        display: none;
    }

    .buttons-mobile {
        display: none;
        flex-direction: column;
        gap: 15px;        

        button > span {
            line-height: 1.8;
        }
    }

    .catchphrase {
        display: flex;
        align-items: center;
    }

    :nth-child(3) {
        width: 100%;
    }    

    @media (max-width: 480px){
        // gap: 0px;
        gap: 1.25rem;
        // padding: 5rem 1rem 6rem 5rem;
        padding: 1.5rem;
        width: auto;
        .buttons-mobile {
            display: none;
        }
    }

    @media(max-width: 575px){
        padding: 25px;

        .buttons-mobile {
            display: none;
        }
    }

    @media (min-width: 576px) and (max-width: 767px) {
        padding: 20px;
        .headline > div:nth-child(2) {
            font-size: 15px !important;
            line-height: 18px;
            letter-spacing: 0;
        }
        svg {
            width: 2.5rem;
            height: 2.5rem;
        }
        gap: 10px;
        .default-notify-button {
            // display: none;
        }
        button {
            width: 110px;
        }
        button > .ant-btn-icon {
            margin-inline-end: 5px;
        }
        button > span {
            font-size: 15px;         
        }
        button {
            // border-radius: 16px !important;            
            // padding: 0;
        }
        button > span > svg {
            width: 25px;
            height: 25px;
        }
        .buttons-mobile {
            display: none;
        }
    }

    @media (min-width: 768px) and (max-width: 991px) {
        padding: 20px;        
    }

    @media (min-width: 992px) and (max-width: 1199px) {
        padding: 80px;
    }    

    @media (min-width: 1200px) and (max-width:1559px){
        // padding: 80px;
        max-height: 100%;
    }

    @media(min-width: 1600px) {

    }
`

const ModalHeadline = styled.div`
    @media(max-width: 480px){
        div:nth-child(1) {
            font-size: 0.87625rem !important;
            line-height: 1.16831rem;
        }
        div:nth-child(2) {
            font-size: 0.87625rem !important;
            line-height: 1.27788rem;
        }
        svg {
            width: 2.95994rem;
            height: 1.87125rem;
        }
    }
`

const ModalText = styled.div`
    div:nth-child(1) {
        font-family: Roc Grotesk Light;
        font-size: 0.875rem;
        line-height: 1.5rem;
    }
`

const NotifyButton = styled(Button)`
    // border-radius: 11.378px;
    border: 2.133px solid var(--main-blue, #164CA4);
    background: var(--main-blue, #164CA4);
    display: inline-flex;
    align-items: center !important;
    align-self: center;
    justify-content: center;
    // padding: 0px 15px !important;
    span {
        color: var(--cream);
        font-size: 17.067px;
        line-height: 22.757px; 
        font-family: Roc Grotesk Bold;
    }

    @media(max-width: 480px){
        span {
            font-size: 1rem;
        }
        align-items: normal !important;
    }


`

const Input: typeof AntdInput = styled(AntdInput)`
    border-radius: 10px;
    border-color: var(--main-blue);    
`

export default function ContactUs({ open, close }: React.PropsWithChildren<{ open: boolean, close: any }>){

    const [ width, height ] = useWindowSize()
    const [ userEmail, setUserEmail ] = useState<string | undefined>()
    const [ hasError, setHasError ] = useState(false)
    const [ modalWidth, setModalWidth ] = useState("60%")
    const [ disableButton, setDisabledButton ] = useState(false)

    const saveEmail = async () => {
        const error = !userEmail || userEmail?.length === 0 || !userEmail?.includes('@')
        let hasAPIError = false
        if(!error) {
            try{
                setDisabledButton(true)
                await userService.saveUser(userEmail)
            }catch(ex){
                hasAPIError = true
            }finally {
                close(true, hasAPIError)
                setUserEmail(undefined)
                setDisabledButton(false)
            }                        
        }
        setHasError(error)        
    }

    const clearForm = () => {
        setUserEmail(undefined)
        setHasError(false);
        close(false)
    }

    let cols = [
        <Col key={'image'} className="modal-image" xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
            <img src={"img/profile-modal.png"} alt="woman-with-mask" />                
        </Col>,
        <Col key={'form'} xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
            <div style={{height:'100%',display: 'flex', alignItems: 'center'}}>
                <NotifyMe>
                    <ModalHeadline className="headline">
                        <Typography className="catchphrase" fontSize="24px" lineheight="35px" $type="Bold" letterSpacing="0px">GET INTO BED WITH US. <Icon src="icons/eyelash-circle.svg" width="81px" height="51px" /> </Typography>
                    </ModalHeadline>
                    <ModalText>
                        <Typography fontSize="24px" lineheight="35px" letterSpacing="0px">
                            We are working day and <b>afterhours</b> to keep up with demand. 
                            Drop your email and we'll notify you when the <b>afterhours</b> sleep mask is back.
                        </Typography>
                    </ModalText>
                    <div>
                        <Space.Compact className="default-notify-button" style={{ width: '100%' }}>
                            <Input status={hasError ? "error" : "" } type="email" placeholder="Your Email" size="large" value={userEmail} onChange={(e) => setUserEmail(e.currentTarget.value)}  />
                            <NotifyButton disabled={disableButton} onClick={saveEmail} size="large" icon={<Icon src={"icons/stars.svg"} width="17px" height="17px" />}>Notify Me</NotifyButton>
                        </Space.Compact>
                        { hasError && <div style={{color: 'red'}}>A valid email is required.</div> }
                        <div className="buttons-mobile">
                            <Input status={hasError ? "error" : "" } placeholder="Your Email" size="large" />
                            <NotifyButton disabled={disableButton} onClick={saveEmail} icon={<Icon src={"icons/stars.svg"} />}>Notify Me</NotifyButton>
                        </div>
                    </div>                  
                </NotifyMe>
            </div>                
        </Col>
    ]

    if(width <= 480){
        cols = [ cols[1],cols[0] ]
    }

    useEffect(() => {
        if(width <= 480){
            setModalWidth("100%")
        }else if(width <= 1024){
            setModalWidth("50%")
        }else{
            setModalWidth("60%")
        }        
    },[width])

    return (
        <Modal width={modalWidth} onCancel={() => clearForm()} key={"modal"} footer={null} open={open} centered okButtonProps={{ style: { display: 'none' } }} cancelButtonProps={{ style: { display: 'none' } }}>
            <Row>
                {
                    cols.map((col,index) => (
                        <React.Fragment key={index}>
                            { col }
                        </React.Fragment>
                    ))
                }
            </Row>
        </Modal>
    )
}