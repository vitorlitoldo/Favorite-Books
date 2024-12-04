import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 75px;
    background-color: #1F1F1F;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    width: 100%;
    max-width: 80%;
    height: 75px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`

export const Row = styled.div`
    display: flex;
    align-items: center;
`

export const MenuSite = styled.div`
    color: #FFF;
    display: flex;
    height: 75px;
    align-items: center;
`

export const ButtonNewBookPage = styled.button`
    width: 150px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFF;
    border: none;
    border-radius: 10px;
    color: #121212;
    font-size: 16px;
    font-weight: bold;

    &:hover {
        cursor: pointer;
        color: #FFF;
        border: 1px solid #FFF;
        background-color: transparent;
        transition: 0.5s;
    }
`