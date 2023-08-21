import { Chevron } from "Icons";
import { Collapse as AntdCollapse } from "antd";
import styled from "styled-components";

// .ant-collapse-header-text {
//     display: flex;
//     gap: 17px;
//     flex-shrink: 0;
// }

const StyledCollapse = styled(AntdCollapse)`
    // margin-top: 30px;

    // height: 100%;

    .ant-collapse-header {
        border-radius: 0px !important;
        border-bottom: solid 1px #164CA4;
    }

    .ant-collapse-header[aria-expanded="false"] {
        margin-bottom: 40px;
    }

    .ant-collapse-header-text > #information-container {
        display: flex;
        gap: 17px;
        flex-shrink: 0;
    }

    #information-container > div {
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 4.8px;
        text-transform: uppercase;
    }

    .ant-collapse-content-box {
        margin-top: 27px;
        padding: 0px !important;

        display: flex;
        flex-direction: column;
        justify-content: center;

        color: var(--grey, #6C6C6C);
        leading-trim: both;
        text-edge: cap;
        font-family: Roc Grotesk Light;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px;

        gap: 20px;
    }
`

interface CollapseProps {
    items: {
        key: string,
        label: any,
        children: React.ReactNode
    }[],
    activeKeys: (string | number)[],
    onChange?: any,
    className?: any
}

export default function Collapse({ items, activeKeys, onChange,className }: React.PropsWithChildren<CollapseProps>){
    return <StyledCollapse className={className}  onChange={onChange} ghost defaultActiveKey={activeKeys} expandIconPosition="end" collapsible="icon" items={items} expandIcon={({ isActive }: any) => <Chevron direction={ isActive ? 'top' : 'bottom' } />} />
}