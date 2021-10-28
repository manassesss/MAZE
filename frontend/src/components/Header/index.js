import * as React from 'react';
import { Appbar } from 'react-native-paper';
import styles from './styles';

const Header = () => (
    <Appbar.Header style={styles.header}>
        <Appbar.BackAction
            onPress={() => {}} />
        <Appbar.Content title="Voltar" titleStyle={styles.headerText}/>
    </Appbar.Header>
);

export default Header;