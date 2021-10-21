import * as React from 'react';
import styles from './styles.js';
import { View } from 'react-native';
import { List } from 'react-native-paper';
import ProductItem from '../../components/ProductItem'
import SearchBox from '../../components/SearchBox';

const ProductList = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <View style={styles.container}>
    <SearchBox/> 
    <List.Section>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>    
    </List.Section>
    </View>
  );
};

export default ProductList;
