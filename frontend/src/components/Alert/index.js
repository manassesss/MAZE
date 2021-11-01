import * as React from 'react';
import { View } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

const Alert = () => (
    <Card>
        <Card.Content style={{ alignItems: "center", justifyContent: "center" }}>
            <Title>Alerta</Title>
            <Paragraph style={{textAlign:"center"}}>Você tem certeza que deseja que este produto seja deletado?</Paragraph>
            <View style={{flexDirection:"row"}}>
                <Button
                    mode='contained'
                    style={{
                        marginTop: 30,
                        marginRight: 20,
                        borderRadius: 8,
                        backgroundColor: "#59A834",
                    }}
                >
                    Confirmar
                </Button>
                <Button
                    mode='contained'
                    style={{
                        marginTop: 30,
                        marginLeft: 20,
                        borderRadius: 8,
                        backgroundColor: "#AB4967",
                    }}
                >
                    Cancelar
                </Button>

            </View>
        </Card.Content>
    </Card>
);

export default Alert;