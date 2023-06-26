'use client';
import styled from 'styled-components';

export const StyledList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem;
    place-items: center;
    transition: 0.2s ease all;

    @media (max-width: 960px) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }
    @media (max-width: 960px) {
    }
`;
