import styled from "styled-components"
import SVG from 'react-inlinesvg'

const Dot = styled(SVG)<{ selected?: boolean }>`
    width: 11px;
    height: 11px;
    cursor: pointer;    
    circle {
        fill: ${ props => props.selected ? '#164CA4' : '#FAF1E8' }
    }
`

const SlickListContainer = styled.ul`
    display: flex;
    justify-content: center;
    gap: 9px;
    padding: 0px 9px;

    @media(max-width: 480px){
        margin-top: -5%;
        position:relative;
    }
`

export default function SlickList({ length, page, changePage }: React.PropsWithChildren<{ length: number, page: number, changePage?: any }>){
   

    return (
        <SlickListContainer className="carousel-dots">
            { Array.from({ length }).map((value: any,key: number) => (<Dot key={key} src={"icons/dot.svg"} selected={key === page} onClick={() => changePage(key)}  />)) }
        </SlickListContainer>
    )
}