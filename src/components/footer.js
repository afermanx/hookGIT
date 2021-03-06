import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function Footer() {
  return (
    <View style={styles.footer}>

      <Text>

        <Text style={styles.txt} >By Alex Ferman</Text>



      </Text>


    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    paddingBottom: 5,
    bottom: 0,
    right: 0,
    left: 0,
    position: 'absolute',
    textAlign: 'center',
    backgroundColor: '#7a297a',


  },

  txt: {

    color: "#fff",
    fontSize: 20,
    fontFamily: 'monospace',
    fontWeight: 'bold',

  }
});