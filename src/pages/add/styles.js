import styled from "styled-components";

export const Column = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 40px;
    padding: 20px;
`

export const Wrapper = styled.div`
    width: 50%;
    height: 90%;
    display: flex;
    margin: 30px;
    box-sizing: border-box;
`

export const Centralize = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100%;
    align-items: center;
    margin: auto 0;
    padding: 20px;
`

export const Container = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const StyledText = styled.textarea`
    width: 90%;
    height: 60px;
    border: 1px solid #FFF;
    border-radius: 10px;
    background-color: #121212;
    color: #FFF;
    padding: 10px;

    &::placeholder {
        color: #b0b0b0;
    }
`

export const StyledLabel = styled.label`
    font-size: 16px;
    color: #FFF; 
    margin-bottom: 8px;
    display: block; 
`