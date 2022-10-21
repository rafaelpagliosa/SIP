import React, { useState, useEffect } from 'react';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
} from "react-native";

//import firebase from '../../config/firebaseconfig';
import firebase from 'firebase/app'
import styles from './style';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Platform } from 'react-native-web';

export default function NewUser({ navigation }) {

    const database = firebase.firestore();
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [contato, setContato] = useState("");
    const [password, setPassword] = useState("");
    const [errorRegister, setErrorRegister] = useState("");

    const [uid, setUid] = useState("");

    const register = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                let user = userCredential.user;
                let teste = user.uid;
                alert(teste);
                setUid(teste);
                navigation.navigate("Login");

                database.collection("Users").add({
                    nome: nome,
                    email: email,
                    cpf: cpf,
                    contato: contato,
                    uid: teste,
                })
                alert("Olá " + nome + " Seja Bem Vindo.");
            })
            .catch((error) => {
                setErrorRegister(true);
                let errorCode = error.code;
                let errorMessage = error.message;
            });
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <Text style={styles.title}>Criar Conta</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu Nome"
                type="text"
                onChangeText={(text) => setNome(text)}
                value={nome}
            />
            <TextInput
                style={styles.input}
                placeholder="Digite o E-mail"
                type="text"
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <TextInput
                style={styles.input}
                placeholder="Digite seu Cpf"
                type="text"
                onChangeText={(text) => setCpf(text)}
                value={cpf}
            />
            <TextInput
                style={styles.input}
                placeholder="Digite seu Contato"
                type="text"
                onChangeText={(text) => setContato(text)}
                value={contato}
            />
            <TextInput
                style={styles.input}
                placeholder="Digite sua Senha"
                secureTextEntry={true}
                type="text"
                onChangeText={(text) => setPassword(text)}
                value={password}
            />

            {errorRegister === true
                ?
                <View style={styles.contentAlert}>
                    <MaterialCommunityIcons
                        name="alert-circle"
                        size={24}
                        color="#bdbdbd"
                    />
                    <Text style={styles.warningAlert}>E-mail ou senha inválida</Text>
                </View>
                :
                <View />
            }

            {email === "" || password === ""
                ?
                <TouchableOpacity
                    disabled={true}
                    style={styles.buttonRegister}
                >
                    <Text style={styles.textButtonRegister}>Registrar</Text>
                </TouchableOpacity>
                //ok
                :
                <TouchableOpacity
                    style={styles.buttonRegister}
                    onPress={() => {
                        register()
                    }}
                >
                    <Text style={styles.textButtonRegister}>Registrar</Text>
                </TouchableOpacity>
            }

            <Text style={styles.login}>Já é cadastrado?
                <Text
                    style={styles.linkLogin}
                    onPress={() => navigation.navigate("Login")}
                >

                    Voltar para tela de Login...
                </Text>
            </Text>
            <View
                style={{ height: 100 }}
            />

        </KeyboardAvoidingView>
    )
}