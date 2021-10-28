import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Menu from './screens/Menu';
import Product_List from './screens/Product_List';

const AppStack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator 
                screenOptions={{
                    headerShown:false,
                    cardStyle : {
                    }
                }}
            >
                <AppStack.Screen name ="Home" component={Menu}/>
                <AppStack.Screen name ="Product" component={Product_List}/>
            </AppStack.Navigator>
        </NavigationContainer>

    )
}