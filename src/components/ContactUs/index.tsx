import { useWindowSize } from "@react-hook/window-size";
import { Icon } from "Icons";
import { Modal as AntdModal, Button, Col, Input as AntdInput, Row, Space } from "antd";
import Typography from "components/Typography";
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
    width: 467px;
    flex-direction: column;
    align-items: flex-start;
    gap: 49px;
    padding: 243.14px 102px 217.14px 116px;

    .catchphrase {
        display: flex;
        align-items: center
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
    display: flex;
    align-items: baseline !important;
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

const Input = styled(AntdInput)`
    border-radius: 10px;
    border-color: var(--main-blue);    
`
{/* <NotifyButton size="large" type="primary">Notify Me</NotifyButton> */}
{/* <Button type="primary" icon={<Icon src={"icons/stars.svg"} width="24px" height="24px" />}>Try Now</Button> */}
export default function ContactUs({ open, setClose }: React.PropsWithChildren<{ open: boolean, setClose: any }>){

    const [ width, height ] = useWindowSize()

    let cols = [
        <Col className="modal-image" xs={24} sm={6} md={6} lg={12}>
            <img src={"img/image-1171276628.png"} alt="woman-with-mask" />                
        </Col>,
        <Col xs={24} sm={6} md={6} lg={12}>
        <NotifyMe>
            <ModalHeadline>
                <Typography fontSize="24px" $type="Bold" lineheight="32px" letterSpacing="0px">Dear Client,</Typography>
                <Typography className="catchphrase" fontSize="24px" lineheight="35px" $type="Bold" letterSpacing="0px">GET INTO BED WITH US. <Icon src="icons/eyelash-circle.svg" width="81px" height="51px" /> </Typography>
            </ModalHeadline>
            <ModalText>
                <Typography fontSize="24px" lineheight="35px" letterSpacing="0px">
                    We are working day and <b>afterhours</b> to keep up with demand. 
                    Drop your email and we'll notify you when the <b>afterhours</b> sleep mask is back.
                </Typography>
            </ModalText>
            <div>
                <Space.Compact style={{ width: '100%' }}>
                    <Input placeholder="Your Email" size="large"  />
                    <NotifyButton onClick={() => setClose((prev: any) => !prev)} size="large" icon={<Icon src={"icons/stars.svg"} width="17px" height="17px" />}>Notify Me</NotifyButton>
                </Space.Compact>
            </div>                  
            </NotifyMe>                
        </Col>
    ]

    if(width <= 480){
        cols = [ cols[1],cols[0] ]
    }

    return (
        <Modal onCancel={() => setClose((prev: any) => !prev)} width={'auto'} key={"modal"} footer={null} open={open} centered okButtonProps={{ style: { display: 'none' } }} cancelButtonProps={{ style: { display: 'none' } }}>
            { cols }
        </Modal>
    )
}