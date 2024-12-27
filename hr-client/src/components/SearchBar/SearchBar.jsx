import React, { useState } from 'react';
import './SearchBar.css'; // You can define your styles here
import Input from '../Input/Input';

const SearchBar = ({ placeholder, onSearch }) => {


    const handleSearch = (event) => {
        onSearch(event.target.value);
    };

    return (

        <Input type="text" placeholder={placeholder} onChange={handleSearch} customCss="searchBar" />
        
    );
};

export default SearchBar;
