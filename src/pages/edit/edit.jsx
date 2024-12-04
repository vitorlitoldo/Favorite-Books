import { Header } from "../../components/header/header.jsx";
import { Input } from "../../components/input/input.jsx";
import { ButtonEditAndDelete } from "../../components/button/styles.js";
import { Column, Wrapper, Centralize, Container } from "./styles.js"
import { useNavigate } from "react-router-dom";

const Edit = () => {
    const navigate = useNavigate();

    return (<>
    <Header title="Home" onClick={() => navigate('/')} />
    <Centralize>
        <Wrapper>
            <Container>
                <Column>
                    <Input placeholder="Book Name" />
                    <Input placeholder="Book Author" />
                    <Input placeholder="Book Description" />
                    <ButtonEditAndDelete variant="add" >Confirm Edit Book</ButtonEditAndDelete>
                </Column>
            </Container>
        </Wrapper>
    </Centralize>
</>)
}

export { Edit }