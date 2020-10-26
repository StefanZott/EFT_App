import React, { useState } from 'react';
import { TextInput } from 'react-native';
import styles from '../Style/handyStyle';



const SearchInput = () => {
    const [search, setSearch] = useState('');
    return (
      
        <TextInput
          style={styles.TextInput}
          placeholder='Search for Item'
          onChangeText={search => setSearch(search)}
          defaultValue={search}
        />

    );
  }
  
  export default SearchInput;