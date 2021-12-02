import * as React from 'react';
import { List } from 'react-native-paper';
import styles from './styles';
import { StyleSheet } from 'react-native';

const ProductItem = ({ Nome, Quantidade, Preco, ...props }) => (
  <List.Accordion
    title={Nome}
    style={styles.item}
    theme={{ colors: { primary: "#000"} }} //seta a cor quando for apertado
    titleStyle={styles.text}>
    <List.Item style={stylesItem.item}
      title="Quantidade"
      description={Quantidade}
    />
    <List.Item style={stylesItem.item}
      title="Valor"
      description={Preco}
    />
  </List.Accordion>
);

export default ProductItem;


const stylesItem = StyleSheet.create({
  item: {
    marginBottom: 6,
    backgroundColor: "#fcfcfc"
  }
});