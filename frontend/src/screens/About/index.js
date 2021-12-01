import * as React from 'react';
import styles from './styles.js';
import { View, Image, SafeAreaView, ScrollView } from 'react-native';
import { Headline, TextInput, Checkbox, Text } from 'react-native-paper';

const About = () => {
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Headline style={styles.textHead}>Sobre</Headline>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginBottom: 30 }}>
                    <Image
                        source={require('../../assets/logo.png')}
                        style={{ width: 200, height: 80 }}

                    />
                </View>
                <Text style={{textAlign: "center"}}>Este é um aplicativo pessoal para minha mãe administrar seu trabalho. 
                    Ela trabalha com bufê de festas e precisa administrar pedidos e estoques de produtos usados na 
                    confecção de bolos e outras coisas. Aliado a isso, preciso praticar minhas habilidades com Javascript e React-Native. 
                    Por esse motivo, decidi fazer este aplicativo para ajudar a mim e a ela..</Text>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginBottom: 30 }}>
                    <Image
                        source={require('../../assets/Baker.png')}
                        style={{ width: 300, height: 300 }}

                    />
                    
                    <Headline style={styles.textOptions}>Funcionalidades</Headline>
                    <Text style={{textAlign: "center"}}>No app, é possivel administrar o estoque de produtos utilizados para a produção de bolos
                    e salgados. Nesse controle de estoque, é possivel ter noção dos gastos com os produtos estocados. Além disso, é possivel agendar as 
                    encomendas. Nesse agendamento, você pode ter controle da data acertada para entrega, quantidade de salgados encomendadas, dados sobre o 
                    bolo e qual o tipo de evento.</Text>
                    <Headline style={styles.textOptions}>Sobre os tipos de Eventos</Headline>
                    <Text style={{textAlign: "center"}}>Para ter uma ideia mais intuitiva dos eventos cadastrados, e para melhor facilidade de recordação
                    dos mesmos, é utilizado um esquema de coloração da seguinte maneira:</Text>
                    <Image
                        source={require('../../assets/captions.png')}
                        style={{ width: 250, height: 190 }}

                    />
                    <Headline style={styles.textOptions}>Modelos de bolos</Headline>
                    <Text style={{textAlign: "center"}}>Para facilitar as negociações e ajudar na demonstração dos produtos, é utilizado na aba
                    produtos um modelo de tamanho e preço dos bolos produzidos.</Text>
                </View>
            </ScrollView>
        </SafeAreaView >
    );
};

export default About;
