import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Product_List from '../Product_List';
import ProductRegister from '../Product_Register';
import ProductEdit from '../Product_Edit';
import OrderList from '../Order_List';
import OrderRegister from '../Order_Register';

const HomeRoute = () =><Product_List/>;
const SearchRoute = () => <OrderRegister/>;
const FavoriteRoute = () =><ProductEdit/>;

const AgendIcon = (props)=> <MaterialCommunityIcons {...props} name='calendar' color="#000"/>
const PedidosIcon = (props)=> <MaterialCommunityIcons {...props} name='clipboard-check-outline' color="#000"/>
const IngredientesIcon = (props)=> <MaterialCommunityIcons {...props} name='cake-variant' color="#000"/>

export default class Base extends React.Component {
  //link de icons https://materialdesignicons.com/
  state = {
    index: 0,
    routes: [
      { key: 'home', title: 'Agenda', icon: AgendIcon },
      { key: 'search', title: 'Pedidos', icon: PedidosIcon },
      { key: 'favorite', title: 'Ingredientes', icon: IngredientesIcon },
    ]
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap( 
  {
    home: HomeRoute,
    search: SearchRoute,
    favorite: FavoriteRoute,
  });

  render() {
    return (    
        <BottomNavigation
          navigationState={this.state}
          onIndexChange={this._handleIndexChange}
          renderScene={this._renderScene}
          shifting={true}
          barStyle={{ backgroundColor: '#fff' }}
        />
    );
  }
}