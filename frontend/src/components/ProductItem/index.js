import * as React from 'react';
import { List } from 'react-native-paper';

const ProductItem = () => (
  <List.Accordion title="Accordion 1">
    <List.Item
    title="First Item"
    description="Item description"
    left={props => <List.Icon {...props} icon="folder" />}
    />
  </List.Accordion>
);

export default ProductItem;