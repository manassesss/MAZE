import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import styles from './styles';

const SearchBox = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      style={styles.input}
      placeholder="Buscar pelo produto"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default SearchBox;