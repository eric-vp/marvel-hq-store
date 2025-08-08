import styled from "styled-components"

const StyledCard = styled.div`
    width: 500px;
    height: 500px;
    padding: 1rem;
    border: 1px solid black;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        /* height: max-content;
        width: max-content; */
        overflow: hidden;
    }
`

// codigo provisório
export default function HqCard() {
    return (
        <StyledCard>
            <img src="https://m.media-amazon.com/images/I/71mDEdjcyuL._SL1069_.jpg" alt="Capa batman 1" />
            <p>Título</p>
            <p>Preço</p>
            <button>Adicionar ao carrinho</button>
        </StyledCard>
    )
}