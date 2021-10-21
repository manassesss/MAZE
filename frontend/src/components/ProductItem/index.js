import * as React from 'react';
import { List } from 'react-native-paper';
import styles from './styles';
import {StyleSheet} from 'react-native';

const ProductItem = () => (
  <List.Accordion title= "Produto" style={styles.item} titleStyle={styles.text}>
    <List.Item style={stylesItem.item}
    title="Quantidade"
    description="10"
    />
    <List.Item style={stylesItem.item}
    title="Valor"
    description="R$ 10,00"
    />
  </List.Accordion>
);

export default ProductItem;


const stylesItem = StyleSheet.create({
  item:{
    marginBottom: 6,
    backgroundColor: "#FFFFFF"
  }
});