import React, { useState } from 'react';
import { TextInput, Dimensions } from 'react-native';
import Style from '../Style/Style';



SearchInput = () => {
    const [search, setSearch] = useState('');
    let styles = Style(Dimensions.get('window').width);

    return (
      
        <TextInput
          style={styles.textInput}
          placeholder='Search for Item'
          onChangeText={search => setSearch(search)}
          defaultValue={search}
        />

    );
  }
  
  export default SearchInput;