import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Appbar } from 'react-native-paper';
import styles from './styles';

const Header = () => {
    const navigation = useNavigation()
    return(
    <Appbar.Header style={styles.header}>
        <Appbar.BackAction
            onPress={() => navigation.goBack()} />
        <Appbar.Content title="Voltar" titleStyle={styles.headerText}/>
    </Appbar.Header>

)
}
export default Header;