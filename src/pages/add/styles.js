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

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`