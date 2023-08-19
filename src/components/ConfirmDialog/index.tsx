import { Icon } from "Icons";
import { Modal as AntdModal } from "antd";
import { Button } from "components/Button";
import Typography from "components/Typography";
import styled from "styled-components";

const ConfirmModalContainer = styled.div`
    padding: 2.5rem;

    display: flex;
    gap: 10px;
    align-items: center;    

    .confirmation-label {
        font-size: 2rem;
        line-height: inherit;
    }

    @media(max-width: 480px){
        padding: 1rem;
        gap: 5px;
        flex-direction: column;        
        .confirmation-label {
            font-size: 1.5rem;
        }
    }
    
`

const Modal = styled(AntdModal)`
    .ant-modal-content {
        background: var(--cream);
    }

    button {
        padding: 20px 20px 20px 8px;
        span {
            font-size: 1.1rem;
        }
        background: #164CA4;

        .ant-btn-icon {
            margin-inline-end: 0px !important;
        }

        svg {
            path {
                stroke: var(--cream);
            }
        }
    }
`

export default function ConfirmModal({ open, close }: any){

    return (
        <Modal footer={[
            <Button icon={<><Icon color={"#164CA4"} src={"icons/stars.svg"} /></>} onClick={close} key={"customOk"}>Ok</Button>
        ]} centered onOk={close} okType="default" cancelButtonProps={{ style: { display: 'none' }}} closable={false} open={open}>
            <ConfirmModalContainer>
                <Icon src={"icons/eyelash.svg"} /> <Typography $type="Light" className="confirmation-label">Thank you for your email.</Typography>
            </ConfirmModalContainer>        
        </Modal>
    )
}