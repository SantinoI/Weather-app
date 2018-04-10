import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, KeyboardAvoidingView } from 'react-native';

import {fetchLocationId, fetchWeather} from './utils/api';
import getImage from "./utils/getImage";
import SearchInput from './components/SearchInput';

export default class App extends React.Component {
  state = {
    city:"",
    weather:"Initial",
    temperature:"",
  };

  onSubmitComplete = (nome) => {

    let locationId = fetchLocationId(nome);
    locationId.then(location =>{
      let newWeather = fetchWeather(location);
      newWeather.then(rest =>{
        this.setState({weather: rest.weather});
        this.setState({temperature: rest.temperature+"°"});
        this.setState({city: nome});
      })
    },error => this.setState({city: "City not found",weather:"Initial",temperature:""}));
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ImageBackground
          source ={getImage(this.state.weather)}
          style={styles.image}>
          <View style={styles.box}>
            <Text style={styles.largeText}>{this.state.city}</Text>
            <Text style={styles.smallText}>{this.state.weather == "Initial" ? "":this.state.weather}</Text>
            <Text style={styles.largeText}>{this.state.temperature}</Text>

            <SearchInput 
              style={styles.search}
              search = {this.onSubmitComplete} />

          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  search:{
    height:40,
    width:300,
    borderWidth:1,
    borderColor: 'rgba(223, 228, 234,0.7)',
    borderRadius:15,
    backgroundColor: 'rgba(0, 0, 0,0.8)',
    opacity: 0.8,
    justifyContent: 'center'
  },
  image:{
   flex:1,
   justifyContent: 'center'
  },

  box:{
    flex: 0.5,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    alignItems:'center',
    justifyContent:'center' ,
    
  },
  container: {
    flex: 1,
  },
  largeText: {
    textAlign:'center',
    opacity: 0.8,
    color:"white",
    fontSize: 44,
  },
  smallText: {
    textAlign:'center',
    color:"white",
    opacity: 0.8,
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
