import React from 'react';
import { View, Text } from 'react-native';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


export default class MenuNavegacao extends React.Component{
   
  render(){
    return (
        <View>
             <Tabs>
              <Tab label="Filmes"/>       
          </Tabs> 
        </View>
    )
  }
}