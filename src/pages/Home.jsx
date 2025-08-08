import styled from "styled-components";
import Header from "../components/Header";
import HqCard from "../components/HqCard";

const CardContainer = styled.div`
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`

export default function Home() {
    return (
        <>
            <Header />
            {/* teste */}
            <CardContainer>
                <HqCard />
                <HqCard />
            </CardContainer>
        </>
    )
}