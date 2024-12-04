import React, { useEffect } from "react";
import { useState } from "react";
import { FaBook } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { MdDescription } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ButtonEditAndDelete } from "../button/styles.js";
import { ConfirmationModal } from "../confirm/confirm.jsx";

import { api } from "../../services/api.js"

import { Wrapper, Container, Row, Column, IconContainer, NoBooksFound, Centralize, Strong, CentralizeC } from "./styles.js"

const List = () => {
    const navigate = useNavigate();

    const [books, setBooks] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBookId, setSelectedBookId] = useState(null);

    const handleGetBooks = async () => {
        try {
            const { data } = await api.get("/books")
            setBooks(data)
        } catch (error) {
            console.error("Erro ao buscar os livros:", error);
        }
    }

    useEffect(() => {
        handleGetBooks();
    }, []);

    const handleDeleteBook = async () => {
        try {
            await api.delete(`/books/${selectedBookId}`);
            setBooks(books.filter((book) => book.id !== selectedBookId));
            closeModal();
        } catch (error) {
            console.error('Erro ao deletar livro:', error)
        }
    }

    const handleEditPage = (id) => {
        navigate(`edit/:${id}`)
    }

    const openModal = (bookId) => {
        setSelectedBookId(bookId);
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setSelectedBookId(null);
        setIsModalOpen(false);
    }

    return (
        <>
            <CentralizeC>
            {books.length > 0 ? ( books.map((book) => (
                    <Wrapper>
                        <Container>
                            <Row>
                                <p><IconContainer><FaBook /></IconContainer><Strong>Title: </Strong>{book.title}</p>
                                <p><IconContainer><IoMdPerson /></IconContainer><Strong>Author: </Strong>{book.author}</p>
                            </Row>
                        </Container>
                        <Container>
                            <Column>
                                <p><IconContainer><MdDescription /></IconContainer><Strong>Description: </Strong>{book.description}</p>
                            </Column>
                        </Container>
                        <Container>
                            <Row variant="button">
                                <ButtonEditAndDelete variant="edit" onClick={() => handleEditPage(book.id)}>Edit Book</ButtonEditAndDelete>
                                <ButtonEditAndDelete variant="delete" onClick={() => openModal(book.id)}>Delete Book</ButtonEditAndDelete>
                            </Row>
                        </Container>
                    </Wrapper>
            ))) : (<Centralize><NoBooksFound><h1>No books found!</h1></NoBooksFound></Centralize>)} </CentralizeC>
            <ConfirmationModal 
                isOpen={isModalOpen}
                onClose={closeModal}
                onConfirm={handleDeleteBook}
            />
        </>
    )
}

export { List };