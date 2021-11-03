import * as React from 'react';
import { List } from 'react-native-paper';
import styles from './styles';

const OrderItem = ({Nome_Cliente, Data, ...props}) => (
  <List.Section>
    <List.Subheader style={styles.textHeader}>{Data}</List.Subheader>
    <List.Item title={Nome_Cliente} style={styles.item} titleStyle={styles.textItem}/>
  </List.Section>
);

export default OrderItem;