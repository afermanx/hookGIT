import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>

      <Text>

        <Text style={styles.txt} >HookGIT</Text>



      </Text>


    </View>
  );
}

const styles = StyleSheet.create({
  header: {

    paddingTop: 5,
    paddingBottom: 10,
    textAlign: 'center',
    backgroundColor: '#7a297a',


  },
  img: {

    width: 50,
    height: 50,



  },
  txt: {

    color: "#fff",
    fontSize: 32,


    fontFamily: 'monospace',
    fontWeight: 'bold',

  }
});