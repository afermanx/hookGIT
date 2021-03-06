import React, { useState } from 'react';
import {
  View, Text, TextInput,
  StyleSheet, Button, Image
} from 'react-native';
import api from '../services/api'

const Main = () => {

  const [nome, setNome] = useState('')
  const [avatar, setAvatar] = useState('')
  const [user, setUser] = useState('')
  const [seguidores, setSeguidores] = useState('')
  const [seguindo, setSeguindo] = useState('')

  if (avatar == "") {
    setAvatar('https://bsn.ie/wp-content/uploads/2018/06/QuarterlyThirdBlacklab.gif')

  }



  const base = async () => {

    const response = await api.get(`/users/${nome}`)

    const { avatar_url, name, followers, following } = response.data

    if (JSON.stringify(name) == "null") {
      setUser('Sem nome')

    } else {
      setUser(JSON.stringify(name))
    }


    setAvatar(JSON.stringify(avatar_url))

    setSeguidores(JSON.stringify(followers))
    setSeguindo(JSON.stringify(following))







  }




  return (

    <View style={styles.form}>
      <View style={styles.avatar}>



        <Image
          style={styles.img}
          source={{ uri: `${avatar.replace(/['"]+/g, '')}` }}
        />





      </View>

      <Text style={styles.info}>
        <Text style={{ color: '#fff', padding: 5 }}>Nome: {user.replace(/['"]+/g, '')}</Text>
        <Text style={{ color: '#fff', padding: 5 }}>Seguidores: {seguidores}</Text>
        <Text style={{ color: '#fff', padding: 5 }}>Seguindo: {seguindo}</Text>


      </Text>





      <Text style={{ color: '#fff', fontSize: 15, }}>Entre com seu usuario GitHub:</Text>

      <TextInput value={nome} onChangeText={text => setNome(text)}
        style={{
          height: 40, borderColor: '#7a297a',
          borderWidth: 1, color: '#fff', fontSize: 20
        }}

      />
      <View style={{ marginTop: 10, width: 150 }}> <Button style={{ marginRight: 20 }}
        onPress={base}

        title="Exibir" color="#841584" /> </View>



    </View>


  );
}
const styles = StyleSheet.create({

  form: {
    paddingTop: 5,
    marginTop: 20,
    textAlign: 'center',

    alignItems: 'center'
  },

  info: {
    padding: 20,
    marginBottom: 35
  },

  avatar: {

    marginTop: 70,
    alignItems: 'center'
  },
  txt: {
    fontSize: 20,
    marginTop: 5,
    color: '#fff',
  },
  img: {
    borderRadius: 100,
    width: 150,
    height: 150



  }




})


export default Main;