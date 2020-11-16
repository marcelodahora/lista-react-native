import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import FilmesPage from './pages/FilmesPage'
import FilmesDetailsPage from './pages/FilmesDetailsPage'
import { createStackNavigator } from '@react-navigation/stack'

const Menu = (props) => {
  const Stack = createStackNavigator();
   switch (props.type) {
    case 1:
  return (        
      <View style={styles.container}>            
      <NavigationContainer >
          <Stack.Navigator initialRouteName="PeoplePage">
            <Stack.Screen name="Filmes da saga Star Wars" component={FilmesPage} />
            <Stack.Screen name="Informações sobre o filme" component={FilmesDetailsPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>   
  )  
 }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',   
    
  },
  linetext:{       
    fontFamily: "Time News Romam",
    flexDirection: 'row',     
    fontSize: '30px',
    paddingLeft: 20,
    flex: 7,    
},   
});
export default Menu