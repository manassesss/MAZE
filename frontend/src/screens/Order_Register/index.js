import * as React from 'react';
import styles from './styles.js';
import { View, Image, SafeAreaView, ScrollView } from 'react-native';
import { Button, Headline, TextInput, Checkbox, Text } from 'react-native-paper';
import Header from '../../components/Header/index.js';

const OrderRegister = () => {
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);
    const [clientName, setName] = React.useState('');
    const [data, setData] = React.useState('');
    const [quantity, setQuantity] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [cake, setCake] = React.useState(false);
    const [event, setEvent] = React.useState('');
    const [note, setNote] = React.useState('');
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <ScrollView>
                <Headline style={styles.textHead}>Cadastrar Encomenda</Headline>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginBottom: 30 }}>
                    <Image
                        source={require('../../assets/Planning.png')}
                        style={{ width: 200, height: 200 }}
                    />
                </View>
                <TextInput style={styles.input}
                    theme={{ colors: { primary: "#EECCAA" } }}
                    mode='flat'
                    label="Nome do Cliente"
                    value={clientName}
                    onChangeText={text => setName(text)}
                />
                <TextInput style={styles.input}
                    theme={{ colors: { primary: "#EECCAA" } }}
                    mode='flat'
                    label="Data de Entrega"
                    value={data}
                    onChangeText={text => setData(text)}
                />
                <TextInput style={styles.input}
                    theme={{ colors: { primary: "#EECCAA" } }}
                    mode='flat'
                    label="Quantidade de Salgados"
                    value={quantity}
                    onChangeText={text => setQuantity(text)}
                />
                <Headline style={styles.textOptions}>Vai ter Bolo?</Headline>
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: 25}}>
                    <Text style={styles.textOptions} >Sim</Text>
                    <Checkbox color="#EECCAA"
                        status={cake ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setCake(!cake);
                        }}
                    />

                </View>

                <TextInput style={styles.input}
                    theme={{ colors: { primary: "#EECCAA" } }}
                    mode='flat'
                    label="Preço"
                    value={price}
                    onChangeText={text => setPrice(text)}
                />
                <TextInput style={styles.input}
                    theme={{ colors: { primary: "#EECCAA" } }}
                    mode='flat'
                    label="Tipo de Evento"
                    value={event}
                    onChangeText={text => setEvent(text)}
                />
                <TextInput style={styles.input}
                    theme={{ colors: { primary: "#EECCAA" } }}
                    mode='flat'
                    label="Anotações"
                    multiline
                    numberOfLines={6}
                    value={note}
                    onChangeText={text => setNote(text)}
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

export default OrderRegister;
