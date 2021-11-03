import * as React from 'react';
import styles from './styles.js';
import { View, FlatList } from 'react-native';
import { List } from 'react-native-paper';
import { productList } from '../../services/products'
import ProductItem from '../../components/ProductItem'
import SearchBox from '../../components/SearchBox';

const ProductList = () => {
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);

  return (
    <View style={styles.container}>
      <SearchBox/>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={productList}
          renderItem={({ item, index }) =>
            <ProductItem
              Nome={item.Nome}
              Quantidade={item.Quantidade}
              Preco={item.Preco} />
          }
          keyExtractor={item => String(item.id)}
          horizontal={false}
        />
    </View>
  );
};

export default ProductList;
