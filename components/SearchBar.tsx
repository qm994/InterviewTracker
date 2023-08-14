import {Searchbar} from 'react-native-paper';
import React, {useState} from 'react';

export const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = (query: string) => setSearchQuery(query);

    return <Searchbar placeholder="Search" onChangeText={onChangeSearch} value={searchQuery} />;
};
