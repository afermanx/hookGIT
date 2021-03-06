import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,  View } from 'react-native';

import Header from './src/components/header'

import Main from './src/components/main'

import Footer from './src/components/footer'

export default function App() {
  return (
    
    <View style={styles.container}> 
    
     
      <Header />   
    
      <Main/>
      <Footer />
     
     
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333"
},
});
