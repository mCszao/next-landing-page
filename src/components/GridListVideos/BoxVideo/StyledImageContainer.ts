import styled from 'styled-components';

export const StyledImageContainer = styled.div`
    position: relative;
    box-sizing: border-box;

    & > header {
        overflow: hidden;
    }
    img {
        transition: 0.2s ease all;
        max-width: 100%;
        position: relative;
    }
    &:hover img {
        transform: scale(1.1);
    }

    .icon {
        position: absolute;
        opacity: 0;
        top: 50%;
        left: 50%;
        transition: 0.2s ease all;
        transform: translate(-50%);
    }

    &:hover > .icon {
        opacity: 1;
    }
`;
