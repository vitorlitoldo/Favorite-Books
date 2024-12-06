import React, { useState } from "react";
import { Header } from "../../components/header/header.jsx";
import { Input } from "../../components/input/input.jsx";
import { ButtonEditAndDelete } from "../../components/button/styles.js";
import { Column, Wrapper, Centralize, Container, StyledText, StyledLabel } from "./styles.js"
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api.js"

const Add = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        author: "",
        description: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/books', { title: formData.title, author: formData.author, description: formData.description });
            setFormData({ title: "", author: "", description: ""})
        } catch (error) {
            console.error('Erro ao adicionar livro:' + error)
        }
    }

    return (<>
    <Header title="Home" onClick={() => navigate('/')} />
    <Centralize>
        <Wrapper>
            <Container onSubmit={handleSubmit}>
                    <Column>
                        <StyledLabel htmlFor="title">Title:</StyledLabel>
                        <Input 
                        placeholder="Book Title" 
                        type="text" 
                        id="title" 
                        name="title" 
                        value={formData.title} 
                        onChange={handleChange} 
                        required />
                        
                        <StyledLabel htmlFor="author">Author:</StyledLabel>
                        <Input 
                        placeholder="Book Author" 
                        type="text" 
                        id="author" 
                        name="author" 
                        value={formData.author} 
                        onChange={handleChange} 
                        required />
                        
                        <StyledLabel htmlFor="description">Description:</StyledLabel>
                        <StyledText 
                        placeholder="Book Description" 
                        type="text" 
                        id="description" 
                        name="description" 
                        value={formData.description} 
                        onChange={handleChange} 
                        required />
                        <ButtonEditAndDelete variant="add" >Confirm New Book</ButtonEditAndDelete>
                    </Column>
            </Container>
        </Wrapper>
    </Centralize>
</>)
}

export { Add }