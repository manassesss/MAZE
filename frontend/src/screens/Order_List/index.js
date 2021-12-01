import * as React from 'react';
import styles from './styles.js';
import { View, FlatList } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { orderList } from '../../services/orders';
import OrderItem from '../../components/OrderItem';
import SearchBox from '../../components/SearchBox';

const OrderList = () => {
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);
  const navigation = useNavigation()

  const navigateToRegistration = () => {
    navigation.navigate('RegisterOrder');
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
        data={orderList}
        renderItem={({ item, index }) =>
          <OrderItem
            Nome_Cliente={item.nome_Cliente}
            Data={item.data} />
        }
        keyExtractor={item => String(item.id)}
        horizontal={false}
      />
    </View>
  );
};

export default OrderList;
