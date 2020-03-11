import styled from '@emotion/styled';

export const TabList = styled.div `
    background-color: #1f2933;
    color: #ffffff;
    padding-top: 1rem;
    padding-bottom: 1rem;
`;

export const TabListHolder = styled.div `
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    flex-direction: row;
    justify-content: space-between;
    max-width: 1440px;
    margin: 0 auto;
`;

export const Tab = styled.span `
    cursor: pointer;
    padding: 0.5rem;
    color: ${props => props.isActive === 'true' ? '#7069fa':'#9aa5b1'};
    font-size: 1.2rem;

    &:hover {
        color: #7069fa;
    }
`;

export const TabContent = styled.div `
    max-width: 1440px;
    margin: 0 auto;
`;
