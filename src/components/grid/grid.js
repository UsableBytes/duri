import React from 'react';
import { GridContainer, GridColoumn } from './grid.style';

export const Grid = (props) => {
    return (
        <GridContainer>
           {props.children.map((elem, index) => {
               return <GridColoumn key= {index}>{elem}</GridColoumn>
           })}
        </GridContainer>
    )
};
