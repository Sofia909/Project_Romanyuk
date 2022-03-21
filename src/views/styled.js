import styled from 'styled-components'

export const Wrapper = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 10px;
`;

export const Selector = styled.div`
    display: flex;
    & > div {
        margin: 0 14px;
        padding: 4px;
        cursor: pointer;
    }
`;