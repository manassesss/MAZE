import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Menu from './screens/Menu';
import Product_List from './screens/Product_List';
import ProductEdit from './screens/Product_Edit';
import ProductRegister from './screens/Product_Register';
import OrderList from './screens/Order_List';
import OrderRegister from './screens/Order_Register';


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
                <AppStack.Screen name ="Register" component={ProductRegister}/>
                <AppStack.Screen name ="Edit" component={ProductEdit}/>
                <AppStack.Screen name ="Order" component={OrderList}/>
                <AppStack.Screen name ="RegisterOrder" component={OrderRegister}/>

            </AppStack.Navigator>
        </NavigationContainer>

    )
}