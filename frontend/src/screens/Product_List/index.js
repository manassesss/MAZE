import * as React from 'react';
import styles from './styles.js';
import { View, FlatList } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { productList } from '../../services/products'
import ProductItem from '../../components/ProductItem'
import SearchBox from '../../components/SearchBox';

const ProductList = () => {
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);
  const navigation = useNavigation()

  const navigateToRegistration = () => {
    navigation.navigate('Register');
  }
  return (
    <View style={styles.container}>
      <SearchBox />
      <View style={{ alignItems: "center" }}>
        <IconButton
          icon="plus-circle-outline"
          color={"#59A834"}
          size={30}
          onPress={navigateToRegistration}
        />
      </View>
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
