import { Button as AntdButton } from "antd"
import styled from "styled-components"

const Button = styled(AntdButton)`
    border-radius: 16px;
    border: ${ props => props.type !== 'primary' ? '2px solid var(--black-90, #1B1B1B)' : 'none' };
    background-color: ${ props => props.color || (props.type ? `` : '#D9D9D9') };

    display: inline-flex;
    padding: ${props => props.icon ? '32px 32px 32px 16px' : '32px 32px'};
    align-items: center;

    gap: 5px;

    box-shadow: 4px 4px 0px 0px #D2F0F2;

    span {
        color: ${ props => props.type === 'default' ? 'var(--black-90)' : 'var(--cream)' };
        font-family: Roc Grotesk;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 32px;
    }

    svg {
        stroke: ${ props => props.type === 'default' ? 'var(--black-90)' : 'var(--cream)' };
    }
`

export default Button