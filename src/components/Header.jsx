import styled from "styled-components"

const StyledHeader = styled.header`
    background-color: #222;
    color: #fff;
    padding: 1rem;
    font-size: 22px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: fixed;
    z-index: 10;
    top: 0;
    width: 100%;

    p {
        background-color: #be2121;
        padding: .1rem;
        color: #fff;
    }
`

export default function Header() {
    return (
        <StyledHeader>
            <a>Logo</a>
            <p>MARVEL HQ STORE</p>
        </StyledHeader>
    )
}