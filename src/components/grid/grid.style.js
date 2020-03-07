import styled from '@emotion/styled';


export const GridContainer = styled.div `
    position: relative;
    display: grid;
    grid-row-gap: 2rem;
    grid-column-gap: 1rem;
    justify-items: center;
    grid-template-columns: repeat(auto-fit,minmax(370px, 1fr));
`;

export const GridColoumn = styled.div `
    display: flex;
    justify-items: center;
`;
