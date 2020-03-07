import styled from '@emotion/styled';
import tw from 'tailwind.macro';


export const Container = styled.div `
    ${tw `absolute`}
    top: 50%;
    transform: translateX(-50%);
    left: ${ props=> props.direction === 'left'? '2%': '98%' };
    z-index:999;
`;
