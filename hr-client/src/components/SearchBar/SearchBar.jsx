import React, { useState } from 'react';
import './SearchBar.css'; // You can define your styles here
import Input from '../Input/Input';

const SearchBar = ({ placeholder, onSearch ,backgroundColor,color}) => {


    const handleSearch = (event) => {
        onSearch(event.target.value);
    };

    return (
        
        <Input type="text" placeholder={placeholder} onChange={handleSearch} customCss="searchBar" backgroundColor={backgroundColor} color={color}/>
        
    );
};

export default SearchBar;
