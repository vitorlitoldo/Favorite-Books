import React from "react";

import { Wrapper, Container, Row, MenuSite, ButtonNewBookPage } from "./styles.js";

const Header = ({ title, onClick }) => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <MenuSite><h1>Favorite Books</h1></MenuSite>
                </Row>
                <Row>
                    <ButtonNewBookPage onClick={onClick}>{title}</ButtonNewBookPage>
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header };