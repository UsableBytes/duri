import styled from '@emotion/styled';


export const GuideContainer = styled.div ``;

export const GuideCard = styled.div `
    position: relative;
    width: 370px;
    height: 500px;
    background: #ffffff;
    transition: all 0.6s ease-in-out;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.4);
        z-index: 2;
        opacity: 0;
        display: block;
        transition: 0.5s ease-in-out;
    }

    &:hover {
        cursor: pointer;

        * ${GuideContent} {
            left: 0;
            right: 0;
            margin-left: 0;
            transform: translateX(0);
            background: #5d55fa;
        }

        &::before {
            opacity: 1;
        }
    }
`;

export const GuideContent = styled.div `
    position: absolute;
    bottom: 0;
    margin-left: 120px;
    text-align: center;
    display: inline-block;
    background: #1f2933;
    padding: 1rem;
    margin-left: 50%;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(-50%, 50%);
    transition: all 0.5s ease-in-out;
    z-index: 3;
    box-shadow: 1px 2px 1px rgba(1, 2, 2, 0.3)
`;

export const ContentHeader = styled.h1 `
    font-size: calc(0.5rem + 3vmin);
    text-align: center;
`;

export const ContentSubHeader = styled.p `
    font-size: calc(0.1rem + 2vmin);
    text-align: center;
    font-weight: normal;
`;
