import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/header/header.jsx";
import { Input } from "../../components/input/input.jsx";
import { ButtonEditAndDelete } from "../../components/button/styles.js";
import { Column, Wrapper, Centralize, Container, StyledText, StyledLabel } from "./styles.js"
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api.js"

const Edit = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [bookData, setBookData] = useState({
        title: "",
        author: "",
        description: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setBookData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleEdit = async (e) => {
        e.preventDefault();
        try {
            await api.put(`/books/${id}`, { title: bookData.title, author: bookData.author, description: bookData.description });
            navigate('/')
        } catch (error) {
            console.error('Erro ao adicionar livro:' + error)
        }
    }

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await api.get(`/books/${id}`)
                setBookData(response.data)
            } catch (error) {
                console.error('Erro ao buscar livro:' + error)
            }
        }
        fetchBook();
    }, [id]);

    return (<>
    <Header title="Home" onClick={() => navigate('/')} />
    <Centralize>
        <Wrapper>
            <Container onSubmit={handleEdit}>
                    <Column>
                        <StyledLabel htmlFor="title">Title:</StyledLabel>
                        <Input 
                        placeholder="Book Title" 
                        type="text" 
                        id="title" 
                        name="title" 
                        value={bookData.title} 
                        onChange={handleChange} 
                        required />
                        
                        <StyledLabel htmlFor="author">Author:</StyledLabel>
                        <Input 
                        placeholder="Book Author" 
                        type="text" 
                        id="author" 
                        name="author" 
                        value={bookData.author} 
                        onChange={handleChange} 
                        required />
                        
                        <StyledLabel htmlFor="description">Description:</StyledLabel>
                        <StyledText 
                        placeholder="Book Description" 
                        type="text" 
                        id="description" 
                        name="description" 
                        value={bookData.description} 
                        onChange={handleChange} 
                        required />
                        <ButtonEditAndDelete variant="add" >Confirm Edit Book</ButtonEditAndDelete>
                    </Column>
            </Container>
        </Wrapper>
    </Centralize>
</>)
}

export { Edit }