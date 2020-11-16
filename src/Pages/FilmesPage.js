import React from 'react';
import { View } from 'react-native';
import FilmesList from '../component/FilmesList'
import api from './api';


export default class FilmesPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      filmes: [],
      pesquisa: 'star%20wars'   
    }
  }
 
 async componentDidMount() {
  const response = await api.get(this.state.pesquisa);
  this.setState({ filmes: response.data });  
}
 
render(){
  return (      
      <View>                
          <FilmesList filmes={this.state.filmes}
         onPressItem={ (filme) => {
          this.props.navigation.navigate('Informações sobre o filme',
          {"filme": filme})
      }} /> 
      </View>
  );
}
}
 
