import * as React from 'react';
import styles from './styles.js';
import { View, Image, FlatList } from 'react-native';
import { Button, Headline, TextInput } from 'react-native-paper';

const ProductRegister = () => {
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);
    const [name, setName] = React.useState('');
    const [amount, setAmount] = React.useState(0);
    const [price, setPrice] = React.useState(0);
    return (
        <View style={styles.container}>
            <Headline style={styles.textHead}>Cadastrar Produto no Estoque</Headline>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Image
                    source={require('../../assets/Grocer1.png')}
                    style={{ width: 200, height: 200 }}
                />
            </View>
            <View>
                <TextInput style={styles.input}
                    theme={{ colors: { primary: "#EECCAA" } }}
                    mode='flat'
                    label="Nome do Produto"
                    value={name}
                    onChangeText={text => setName(name)}
                />
                <TextInput style={styles.input}
                    theme={{ colors: { primary: "#EECCAA" } }}
                    mode='flat'
                    label="Quantidade"
                    value={amount}
                    onChangeText={Number => setAmount(amount)}
                />
                <TextInput style={styles.input}
                    theme={{ colors: { primary: "#EECCAA" } }}
                    mode='flat'
                    label="Preço"
                    value={price}
                    onChangeText={Number => setPrice(price)}
                />
                <Button
                    mode='contained'
                    style={styles.button}
                >
                    Cadastrar
                </Button>
            </View>
        </View>
    );
};

export default ProductRegister;
