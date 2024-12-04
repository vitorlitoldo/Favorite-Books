import styled, { css } from "styled-components";

export const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`

export const Container = styled.div`
    width: 400px;
    height: 200px;
    background-color: #121212;
    color: #FFF;
    border: 1px solid #FFF;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    z-index: 1001;
`

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
`

export const ButtonEditAndDelete = styled.button`
    width: 150px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #FFF;
    border-radius: 10px;
    color: #FFF;
    font-size: 16px;
    font-weight: bold;

    &:hover {
        cursor: pointer;
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

        &:hover {
            background-color: #218838;
            transition: 0.5s;
        }
    `}
`