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

    const [ adminPassword, setAdminPassword ] = useState()
    const [ adminPasswordConfirmation, setAdminPasswordConfirmation ] = useState()
    const [ auth, setAuth ] = useState<boolean>()
    const [ secretKey, setSecretKey ] = useState<string | undefined>()
    const [alertModal, contextHolder] = Modal.useModal();
    
    const authenticate = () => {
        const secret = process.env.REACT_APP_SECRET_KEY;
        if(secretKey === secret){
            setAuth(true)
        }
    }

    const downloadCSV = async() => {
        try{
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
        }
    }

    return (
        <AdminContainer>
            {contextHolder}
            <div style={{width: '100%'}}>
                <Row justify={"center"}>
                    <Col xxl={24}>
                        <LogoContainer>
                            <Icon src={"logo.svg"} />
                        </LogoContainer>
                    </Col>
                    {
                        !auth && (
                            <Col xxl={4}>
                                <Form layout="vertical">
                                    <Form.Item label={"Secret Key"}>
                                        <Input placeholder={"Type your app secret key"} onChange={(e: any) => setSecretKey(e.target.value)} />
                                    </Form.Item>
                                    {/* <Form.Item label={"Your Admin Password"}>
                                        <Input placeholder={"Type your admin password"} onChange={(e: any) => setAdminPassword(e.target.value)} />
                                    </Form.Item>
                                    {
                                        !localStorage.getItem('adminPassword') && (
                                            <Form.Item label={"Your Admin Password Confirmation"}>
                                                <Input placeholder={"Type your admin password confirmation"} onChange={(e: any) => setAdminPasswordConfirmation(e.target.value)} />
                                            </Form.Item>
                                        )
                                    } */}
                                    <Form.Item>
                                        <Button type="primary" onClick={authenticate}>Submit</Button>
                                    </Form.Item>
                                </Form>
                            </Col>
                        )
                    }
                    {
                        auth && (
                            <Col xxl={24}>
                                <div style={{textAlign: 'center'}}>
                                    <Button color="#1677ff" type="link" onClick={downloadCSV}>Download the users' CSV file</Button>
                                </div>                    
                            </Col>
                        )
                    }
                </Row>
            </div>            
        </AdminContainer>
    )
}