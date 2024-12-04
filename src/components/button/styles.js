import styled, { css } from "styled-components";

export const ButtonEditAndDelete = styled.button`
    width: 150px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #007bff;
    border: 1px solid #FFF;
    border-radius: 10px;
    color: #FFF;
    font-size: 16px;
    font-weight: bold;

    &:hover {
        cursor: pointer;
        color: #FFF;
        border: 1px solid #FFF;
        background-color: #0056b3;
        transition: 0.5s;
    }

    ${({variant}) => variant === 'delete' && css`
        background-color: #dc3545;

        &:hover {
            background-color: #c82333;
            transition: 0.5s;
        }
    `}

    ${({variant}) => variant === 'add' && css`
        background-color: #28a745;
        width: 90%;
        height: 60px;

        &:hover {
            background-color: #218838;
            transition: 0.5s;
        }
    `}
`