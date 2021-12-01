import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Product_List from '../Product_List';
import ProductRegister from '../Product_Register';
import ProductEdit from '../Product_Edit';
import OrderList from '../Order_List';
import OrderRegister from '../Order_Register';
import About from '../About';

const HomeRoute = () =><OrderList/>;
const SearchRoute = () => <Product_List/>;

const AboutRoute = () =><About/>;

const AgendIcon = (props)=> <MaterialCommunityIcons {...props} name='calendar' color="#000"/>
const PedidosIcon = (props)=> <MaterialCommunityIcons {...props} name='clipboard-check-outline' color="#000"/>
const AboutIcon = (props)=> <MaterialCommunityIcons {...props} name='information' color="#000"/>

export default class Base extends React.Component {
  //link de icons https://materialdesignicons.com/
  state = {
    index: 0,
    routes: [
      { key: 'home', title: 'Agenda', icon: AgendIcon },
      { key: 'search', title: 'Estoque', icon: PedidosIcon },
      { key: 'about', title: 'Sobre', icon: AboutIcon },
    ]
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap( 
  {
    home: HomeRoute,
    search: SearchRoute,
    about: AboutRoute,
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