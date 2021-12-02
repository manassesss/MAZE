import * as React from 'react';
import { List } from 'react-native-paper';
import styles from './styles';
import { useState } from 'react';

export default function OrderItem({ Nome_Cliente, tipo, ...props }) {
  const colors = {
      Casamento: "#EE9999",
      Festa: "#533DEB",
      Aniversario: "#E6EA2D",
      Outro: "#D9D0DE",
    }

  return (
    <List.Item 
    title={Nome_Cliente} 
    style={{backgroundColor: "#fcfcfc", borderRadius: 10, borderLeftWidth: 12, borderLeftColor: colors[tipo]}} 
    titleStyle={styles.textItem} 
    />
  );

}
