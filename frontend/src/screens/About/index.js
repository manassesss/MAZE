import * as React from 'react';
import styles from './styles.js';
import { View, Image, SafeAreaView, ScrollView } from 'react-native';
import { Headline, TextInput, Checkbox, Text } from 'react-native-paper';
import Header from '../../components/Header/index.js';

const About = () => {
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);
  
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <ScrollView>
                <Headline style={styles.textHead}>Sobre</Headline>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginBottom: 30 }}>
                    <Image
                        source={require('../../assets/logo.png')}
                        style={{ width: 200, height: 80 }}

                    />
                </View>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare tortor at ante mollis tincidunt.
                    Vivamus sit amet rhoncus est. Ut in ornare ex. Sed condimentum justo ut lacus rhoncus, ullamcorper luctus erat rhoncus.
                    Aliquam feugiat nulla a finibus luctus. Pellentesque blandit condimentum mi, vel fringilla metus porttitor et.
                    Ut eu nulla sit amet lacus venenatis egestas. Maecenas sed ante eu ante faucibus condimentum quis a orci. Duis vitae est nisl.
                    Nulla facilisi. Praesent non feugiat est, et egestas turpis.</Text>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginBottom: 30 }}>
                    <Image
                        source={require('../../assets/Baker.png')}
                        style={{ width: 300, height: 300 }}

                    />
                    <Headline style={styles.textOptions}>Legendas</Headline>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare tortor at ante mollis tincidunt.
                    Vivamus sit amet rhoncus est. Ut in ornare ex. Sed condimentum justo ut lacus rhoncus, ullamcorper luctus erat rhoncus.
                    Aliquam feugiat nulla a finibus luctus.</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default About;
