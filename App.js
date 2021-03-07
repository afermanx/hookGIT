import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, TextInput, View, Text, ScrollView} from 'react-native';
import Info from './src/components/Info'
import Header from './src/views/header'

export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
     
        
       <Header/> 
       <ScrollView>
       
      <Info />
      </ScrollView>
     
     
    
      <StatusBar style="light"/>
    
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#333',
    
    
    
    
  },
});
