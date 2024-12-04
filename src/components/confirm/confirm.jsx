import React from "react";
import { Background, Container, Row, ButtonEditAndDelete } from './styles.js'

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;
    
    return (
        <Background>
            <Container>
                <h2>Confirm Deletion</h2>
                <p>Are you sure you want to delete this book?</p>
                <Row>
                    <ButtonEditAndDelete variant="delete" onClick={onClose}>Cancel</ButtonEditAndDelete>
                    <ButtonEditAndDelete variant="add" onClick={onConfirm}>Yes, Delete</ButtonEditAndDelete>
                </Row>
            </Container>
        </Background>
    )
}

export { ConfirmationModal };