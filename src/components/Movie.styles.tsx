import styled from 'styled-components';

export const MovieInfo = styled.div`
    width: 300px;
    margin: 1rem;
    background-color: #373b69;
    border-radius: 3px;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.1);
    overflow: hidden;
    position: relative;
`;

export const MovieImage = styled.img`
    max-width: 100%;
`;

export const MovieCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    
    h3 {
        margin: 0;
    }
`;

export const MovieOverview = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    color: #22254b;
    padding: 1rem;
    transform: translateX(100%);

    ${MovieInfo}:hover & {
        transform: translateX(0%);
    }
`;