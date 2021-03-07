import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class Header extends Component {
  render(){
    return (
      <View style={styles.container}>
       <Text style={styles.text}>HOOK GIT</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 10,
  
    
    backgroundColor: '#7a297a',
  },

  text:{
    color:'white',
    textAlign: 'center',
    fontSize:32
  }
});
