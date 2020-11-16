import React from 'react';
import {View, StyleSheet} from 'react-native'
import FilmesListItem from './FilmesListItem'

const FilmesList = props => {
    const {filmes, onPressItem} = props
    const items = filmes.map(filme => {
          return (
            <FilmesListItem           
                filme={filme}
                    onPressItemDetails={onPressItem}/>
            )}
      )
    return (
        <View style={style.container}>
            {items}
        </View>
    )
}
 
const style = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
}
)
 
export default FilmesList