import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, KeyboardAvoidingView } from 'react-native';

import {fetchLocationId, fetchWeather} from './utils/api'

import SearchInput from './components/SearchInput';

export default class App extends React.Component {
  state = {
    city:"",
    weather:"",
    temperature:"",
  };

  onSubmitComplete = (nome) => {
    this.setState({city: nome})

    let locationId = fetchLocationId(nome);
    locationId.then(location =>{
      let newWeather = fetchWeather(location);
      newWeather.then(rest =>{
        this.setState({weather: rest.weather});
        this.setState({temperature: rest.temperature+"°s"});
      })
    });

    //this.setState({weather: locationId})
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
      
        <Text style={styles.largeText}>{this.state.city}</Text>
        <Text style={styles.smallText}>{this.state.weather}</Text>
        <Text style={styles.largeText}>{this.state.temperature}</Text>

        <SearchInput 
          style={styles.search}
          search = {this.onSubmitComplete} />

      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  search:{
    height:40,
    width:300,
    borderWidth:0.4,
    borderRadius:5,
    justifyContent: 'center'

  },
  container: {
    flex: 1,
    justifyContent: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  largeText: {
    textAlign:'center',
    fontSize: 44,
  },
  smallText: {
    textAlign:'center',
    fontSize: 18,
  },
  input:{
    width:300,
    height: 40,
    borderWidth: 0.4,
    borderRadius: 5,
    justifyContent: "center"
  }
});
