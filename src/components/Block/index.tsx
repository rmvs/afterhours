import styled from "styled-components";

// const Block = styled.div<{ type: 'primary' | 'default', hasborder?: boolean }>`
//     border-radius: ${ props => (props.hasborder === Boolean(1) ? '32px' : 'none') };
//     background: ${ props => props.type === 'default' ? 'background: linear-gradient(169deg, rgba(255,251,248,1) 39%, rgba(210,238,249,0.891281512605042) 61%, rgba(255,251,248,1) 82%);' : '#FFF' };
//     width: 265px;
//     padding: 28px;
// `

const BlockDiv = styled("div")``

const Block = styled(({ rounded, type, hasIcon, ...props }: any) => <BlockDiv {...props}>{props.children}</BlockDiv>)`
    border-radius: ${ props => !props.rounded ? '8px' : '32px' };
    background: ${ props => props.type === 'primary' ? 'background: linear-gradient(169deg, rgba(255,251,248,1) 39%, rgba(210,238,249,0.891281512605042) 61%, rgba(255,251,248,1) 82%);' : 'inherit' };
    width: 265px;
    padding: 28px;  
    border: 2px solid ${ props => props.type === 'primary' ? 'var(--main-blue)' : 'black' };
    box-shadow: ${props => props.type === 'primary' ? '4px 4px 0px 0px #164CA4' : 'none'};

    ${ props => props.hasIcon ?
        `display: flex;
        align-items: center;
        gap: 15px;

        color: var(--main-blue);        
        font-family: Roc Grotesk Light;
        font-size: 16px;
        font-style: normal;
        font-weight: 350;
        line-height: 24px;
        letter-spacing: 4.8px;
        text-transform: uppercase;
                
        `
        : ''
    }
`

export default Block;