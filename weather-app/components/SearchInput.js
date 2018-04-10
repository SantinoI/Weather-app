import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput } from 'react-native';


export default class SearchInput extends React.Component{
    state = {
      city:''
    }
    
    handleTextInput = (text) =>{
      this.setState({city: text});
    };
  
    render(){
      console.log("sto renderizzando di nuovo")
      console.log("nome corrente",this.state.city);
      return(
        <View style={this.props.style}>
            <TextInput
            placeholder="Insert City"
            underlineColorAndroid ="transparent"
            onChangeText = {this.handleTextInput}
            onSubmitEditing={() =>this.props.search(this.state.city)}>
            </TextInput>
        </View>
      )
    }
};
