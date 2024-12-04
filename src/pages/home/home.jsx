import { List } from "../../components/list/list.jsx"
import { Header } from "../../components/header/header.jsx";
import { Container, Wrapper } from "./styles.js"
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
    <Wrapper>
        <Header title="Add Books" onClick={() => navigate('/add')} />
        <Container>
            <List />
        </Container>
    </Wrapper>
)   
}

export { Home }