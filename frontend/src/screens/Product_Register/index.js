import * as React from 'react';
import styles from './styles.js';
import { View, Image, SafeAreaView , ScrollView  } from 'react-native';
import { Button, Headline, TextInput } from 'react-native-paper';
import Header from '../../components/Header/index.js';

const ProductRegister = () => {
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);
    const [name, setName] = React.useState('');
    const [amount, setAmount] = React.useState('');
    const [price, setPrice] = React.useState('');

    return (
        <SafeAreaView style={styles.container}>
            <Header/>
            <ScrollView>
            <Headline style={styles.textHead}>Cadastrar Produto no Estoque</Headline>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginBottom:30}}>
                <Image
                    source={require('../../assets/Grocer1.png')}
                    style={{ width: 200, height: 200 }}
                />
            </View>
                <TextInput style={styles.input}
                    theme={{ colors: { primary: "#EECCAA" } }}
                    mode='flat'
                    label="Nome do Produto"
                    value={name}
                    onChangeText={text => setName(text)}
                />
                <TextInput style={styles.input}
                    theme={{ colors: { primary: "#EECCAA" } }}
                    mode='flat'
                    label="Quantidade"
                    value={amount}
                    onChangeText={text => setAmount(text)}
                />
                <TextInput style={styles.input}
                    theme={{ colors: { primary: "#EECCAA" } }}
                    mode='flat'
                    label="Preço"
                    value={price}
                    onChangeText={text => setPrice(text)}
                />
                <Button
                    mode='contained'
                    style={styles.button}
                >
                    Cadastrar
                </Button>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ProductRegister;
