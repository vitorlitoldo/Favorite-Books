import styled from "styled-components";

export const Container = styled.div`
    width: 80%;
    height: 80vh;
    max-height: calc(100vh - 90px);
    background-color: #1F1F1F;
    margin: 45px auto;
    border-radius: 20px;
    overflow-y: auto;
    padding: 15px;

    &::webkit-scrollbar {
        width: 8px;
    }

    &::webkit-scrollbar-thumb {
        background: #555;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #777;
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100vh;
    overflow: hidden;
`