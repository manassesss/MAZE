import * as React from 'react';
import styles from './styles.js';
import { View, Image, SafeAreaView , ScrollView  } from 'react-native';
import { Button, Headline, TextInput } from 'react-native-paper';
import Header from '../../components/Header/index.js';
import CardEdit from '../../components/CardEdit/index.js';


const ProductEdit = () => {
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);
    const [name, setName] = React.useState('');
    const [amount, setAmount] = React.useState(0);
    const [price, setPrice] = React.useState(0);

    return (
        <SafeAreaView style={styles.container}>
            <Header/>
            <ScrollView>
            <Headline style={styles.textHead}>Editar Produto no Estoque</Headline>
            <View style={{ flex: 1, justifyContent: "center", marginBottom:30}}>
                <CardEdit Nome="Trigo" Quantidade= "10" Preco="R$10,00"/>
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
                    Salvar
                </Button>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ProductEdit;
;
