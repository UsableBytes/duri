import styled from '@emotion/styled';


export const Container = styled.div `
    max-width: 550px;
    margin: 0 auto;
    max-height: 500px;
    overflow-y: scroll;
`;


export const AccordianTabContainer = styled.div `
    position: relative;
    border: 1px solid #e2e2e2;
    margin-bottom : 0.2rem;
`;

export const Tab = styled.button `
    border: none;
    background: #ffffff;
    color: #9AA5B1;
    height: 48px;
    width: 500px;
    font-size: 1rem;
    padding-left: 2rem;
    padding-right: 1rem;

    text-align: left;
        &:hover {
            color: #7069FA;
            cursor: pointer;
        }

        &:focus {
            outline: none;
        }

        &::after {
            content: '☟';
            position: absolute;
            right: 1rem;
            transform: ${props => props.isActive ? 'none': 'rotate(-450deg)'};
            transition: transform 0.5s ease-out;
        }

        @media screen and (max-width: 600px){
            width: auto;
        }
`;

export const TabDetails = styled.div `
    font-size: 0.9rem;
    max-height: ${props => props.isActive ? '300px': 0};
    max-width: 500px;
    padding-left: 3rem;
    overflow: hidden;
    transition: max-height 0.5s ease-out;
`;
