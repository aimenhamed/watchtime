import styled from 'styled-components';

export const MovieContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const AppHeader = styled.header`
    background-color: #202020;
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
`;

export const Search = styled.input`
    background-color: transparent;
    border: 2px solid #ffffff;
    border-radius: 50px;
    color: white;
    font-family: inherit;
    font-size: 1.2rem;
    padding: 0.5rem 1.5rem;

    :focus {
        outline: 0;
    }
`;