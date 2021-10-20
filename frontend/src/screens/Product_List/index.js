import * as React from 'react';
import { List } from 'react-native-paper';
import ProductItem from '../../components/ProductItem'

const ProductList = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section title="Accordions">
      <ProductItem/>
    </List.Section>
  );
};

export default ProductList;