import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  SectionList,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';
import OrderItem from '../../components/OrderItem';
import SearchBox from '../../components/SearchBox';
import styles from './styles.js';
import { orderList } from '../../services/orders';

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const Item = ({ title, tipo }) => (
  <OrderItem Nome_Cliente={title} tipo={tipo}/>
);

export default function App() {
  const [data, setData] = useState(orderList);
  const [normalizedData, setNormalizedData] = useState([]);
  const navigation = useNavigation()

  const navigateToRegistration = () => {
    navigation.navigate('RegisterOrder');
  }

  useEffect(() => {
    let keys = [];
    let values = [];
    data.forEach((e) => {
      if (!keys.includes(e.data)) {
        keys.push(e.data);
        values.push([])
      }
    });

    data.forEach(d => {
      keys.forEach((k, i) => {
        if(d.data == k){
          values[i].push(d);
        }
      })
    });

    keys.forEach((date, i) => setNormalizedData(normalized => [...normalized, { title: date, data: values[i] }]));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <SearchBox />
      <View style={{ alignItems: "center" }}>
        <IconButton
          icon="plus-circle-outline"
          color={"#59A834"}
          size={30}
          onPress={navigateToRegistration}
        />
      </View>
      <SectionList
        sections={normalizedData}
        //keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item.nome_Cliente} tipo={item.evento} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
}

