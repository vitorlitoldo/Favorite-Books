import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    width: 90%;
    max-width: 1200px;
    height: auto;
    background-color: #121212;
    border: 2px solid #FFF;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 30px auto;
    flex-shrink: 0;
`

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Row = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 25px;

    @media (max-width: 732px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 25px;
        gap: 25px;
    }

        ${({variant}) => variant === 'button' && css`
            @media (max-width: 732px) {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 25px;
            gap: 25px;
        }
    `}
`

export const Column = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 25px;
`

export const IconContainer = styled.span`
    margin-right: 5px;
`

export const NoBooksFound = styled.div`
    width: 80%;
    height: 80%;
    background-color: #121212;
    border: 2px solid #FFF;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Centralize = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`

export const CentralizeC = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    overflow-y: auto;
    padding: 15px;

    &::-webkit-scrollbar {
        width: 8px;
    }
    &::-webkit-scrollbar-thumb {
        background: #555;
        border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb:hover {
        background: #777;
    }
`

export const Strong = styled.strong`
    margin-right: 10px;
`