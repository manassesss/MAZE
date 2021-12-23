import * as React from 'react';
import styles from './styles.js';
import { View, FlatList, Image} from 'react-native';
import { Button } from 'react-native-paper';
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
      <View >
          <Image
            source={require('../../assets/Cooking.png')}
            style={{ width: 200, height: 200 }}
          />
        </View>
      <View style={{ alignItems: "center" }}>
      <Button icon="plus-circle-outline" mode="text" onPress={navigateToRegistration} color="#525257">
            Cadastrar Produto
          </Button>
      </View>
      <FlatList
      style={{width: "100%"}}
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
