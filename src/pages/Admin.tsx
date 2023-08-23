import { Icon } from "Icons";
import { Button as AntdButton, Col, Form, Input, Modal, Row } from "antd";
import { useState } from "react";
import { userService } from "services";
import styled from "styled-components";

const Button: typeof AntdButton = styled(AntdButton)`
  span {
    color: ${props => props.color || 'white'};
  }
`

const AdminContainer = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    background: var(--cream);
`

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 1.5rem 0rem;
`

export default function Admin(props: React.PropsWithChildren){

    const [ auth, setAuth ] = useState<boolean>()
    const [ disable, setDisable ] = useState(false)
    const [ hasError, setHasError ] = useState(false)
    const [ secretKey, setSecretKey ] = useState<string | undefined>()
    const [ alertModal, contextHolder ] = Modal.useModal();
    
    const authenticate = () => {
        const secret = process.env.REACT_APP_SECRET_KEY;
        if(secretKey === secret){
            setAuth(true)
            setHasError(false)
        }
        setHasError(secretKey !== secret)
    }

    const downloadCSV = async() => {
        try{
            setDisable(true)
            const users = await userService.getUsers()
            const userCSV = ["email",...users.map(v => v.email)]
            const csvContent = "data:text/csv;charset=utf-8," + userCSV.join("\n");
            const encodedUri = encodeURI(csvContent);
            const link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", `afterhours-emails-${new Date().toISOString()}.csv`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }catch(ex){
            alertModal.error({
                content: (
                    <div style={{color: 'red'}}>
                        <div>Error trying to download CSV.</div>
                        <div>Reason: { String(ex) }</div>                    
                    </div>
                ),
                okType: 'default'
            })
        }finally{
            setDisable(false)
        }
    }

    return (
        <AdminContainer>
            {contextHolder}
            <div style={{width: '100%'}}>
                <Row justify={"center"}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <LogoContainer>
                            <Icon src={"logo.svg"} />
                        </LogoContainer>
                    </Col>
                    {
                        !auth && (
                            <Col xs={18} sm={10} md={10} lg={8} xl={6} xxl={4}>
                                <Form layout="vertical">
                                    <Form.Item label={"Secret Key"} validateStatus={hasError ? "error" : undefined} >
                                        <Input placeholder={"Enter your app secret key"} onChange={(e: any) => setSecretKey(e.target.value)} />
                                        { hasError && <div style={{color: 'red'}}>Invalid secret key.</div> }
                                    </Form.Item>
                                    <Form.Item>
                                        <Button type="primary" onClick={authenticate}>Submit</Button>
                                    </Form.Item>
                                </Form>
                            </Col>
                        )
                    }
                    {
                        auth && (
                            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                <div style={{textAlign: 'center'}}>
                                    <Button color="#1677ff" type="link" disabled={disable} onClick={downloadCSV}>{ !disable ? "Download the users' email CSV file" : 'Wait a moment, please...'  }</Button>
                                </div>                    
                            </Col>
                        )
                    }
                </Row>
            </div>            
        </AdminContainer>
    )
}