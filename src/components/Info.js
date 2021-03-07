import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import api from '../services/api'


export default class Info extends Component {

    state = {
        user: "afermanx",
        nome: "",
        img: "",
        bio: "",
        seguindo: null,
        seguidores: null,
        empresa: "",
        cidade: "",
        link: ""


    }
    componentDidMount() {
        this.loadInfo()

    }

    loadInfo = async () => {
        const response = await api.get(`/${this.state.user}`)


        const users = await response.data

        if (users.name === null) {
            this.setState({ nome: users.login })

        } else {
            this.setState({ nome: users.name })
        }

        if (users.avatar_url === null) {
            this.setState({ img: "" })

        } else {
            this.setState({ img: users.avatar_url, })
        }

        if (users.bio === null) {
            this.setState({ bio: "" })

        } else {
            this.setState({ bio: users.bio })
        }
        if (users.company === null) {
            this.setState({ empresa: "Não encontrada" })

        } else {
            this.setState({ empresa: users.company })
        }

        if (users.location === null) {
            this.setState({ cidade: "Não encontrada" })

        } else {
            this.setState({ cidade: users.location })
        }

        if (users.blog === "") {
            this.setState({ link: "Não encontrado" })

        } else {
            this.setState({ link: users.blog })
        }

        this.setState({
            seguindo: users.following,
            seguidores: users.followers,
        })
        


    }



    render() {
    






        return (
            <View style={styles.container}>


                <Image
                    style={styles.avatar}
                    source={{ uri: this.state.img }}
                />

                <Text style={styles.name}>{this.state.nome}</Text>

                <Text style={styles.extra}>{`${this.state.bio}`}</Text>
                <Text style={styles.extra}>{`Empresa: ${this.state.empresa}`}</Text>
                <Text style={styles.extra}>{`Cidade: ${this.state.cidade}`}</Text>
                <Text style={styles.extra}>{`Site: ${this.state.link}`}</Text>
                <Text >
                    <Text style={styles.extra}>{`Seguidores: ${this.state.seguidores} `}</Text>
                    <Text style={styles.segs}>{`Seguindo: ${this.state.seguindo}`}</Text>
                </Text>

                <TextInput value={this.state.user} onChangeText={text => this.setState({ user: text })}
                    style={styles.input}

                />


                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={this.loadInfo}>
                    <Text style={styles.submitButtonText}> Hookar Usuário </Text>
                </TouchableOpacity>

                <Text>
                <TouchableOpacity
                    style={styles.repo}
                    >
                    <Text style={styles.submitButtonText}> Repositórios</Text>
                </TouchableOpacity>
                <Text>   </Text>

                <TouchableOpacity
                    style={styles.repo}
                    >
                    <Text style={styles.submitButtonText}> Eventos</Text>
                </TouchableOpacity>
                
                </Text>
            </View>










        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:30,

        justifyContent: "center",
        alignItems: "center"





    },
    name: {
        color: 'white',



        fontSize: 32
    },

    extra: {
        color: 'white',
        marginLeft: 5,

        fontSize: 15,

    },

    segs: {
        color: 'white',
        marginLeft: 5,

        fontSize: 15,

    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100
    },

    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    repo: {
        backgroundColor: '#4544',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText: {
        color: 'white'
    },
    input: {
        height: 40,
        marginTop:10,
       textAlign:'center',
        width: 310,
        backgroundColor:'#9fafafaf',
        borderColor: '#7a297a',
        borderWidth: 1,
        color: '#fff',
        fontSize: 20
    }
});



