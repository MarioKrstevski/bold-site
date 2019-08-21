import React from 'react';
import styled from 'styled-components'

const SearchFilterContainer = styled.div`
    background: lightgreen;
    width: 100%;
    height:80px;
`
const SearchFilter = () => {
    return (
        <SearchFilterContainer>
            Search Filter
        </SearchFilterContainer>
    );
}

export default SearchFilter;