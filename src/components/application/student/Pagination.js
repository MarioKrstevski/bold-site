import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    background-color: pink;
    height:50px;
    width: 100%;
`;

const PaginateNumber = styled.div`
    border: 1px solid black;
    box-sizing: border-box;
    width:40px;
    padding: 5px;
    height: 40px;
    text-align:center;
    color: white;
    background-color: red;

    &:hover{
        background-color: darkred;
        cursor: pointer;
    }
    
`


const Pagination = ({size}) => {
    const array = new Array(size).fill(1);
    console.log(array)
    const displayArray = array.map((element,index) => <PaginateNumber key={index}>{index}</PaginateNumber>)
    
    return (
        <PaginationContainer>
            {displayArray}
        </PaginationContainer>
    );
}

export default Pagination;