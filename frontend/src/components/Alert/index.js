import * as React from 'react';
import { View, Modal } from 'react-native';
import { Card, Title, Text, Button } from 'react-native-paper';
import styles from './styles';

const Alert = ({visible, setVisible, title, content, ...props}) => {
    const hideAlert = () => setVisible(false)
    return(
        <Modal
        onDismiss={hideAlert}
        animationType="fade"
        statusBarTranslucent
        visible={visible}
        contentContainerStyle={styles.container}
    >
    <Title>{title}</Title>
    <Text>{content}</Text>
    <View>
        <Button onPress={hideAlert}>Ok!</Button>
    </View>
    </Modal>
)
};

export default Alert;