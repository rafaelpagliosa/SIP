import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Image,
} from "react-native";

import firebase from '../../config/firebaseconfig';
import styles from './style';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Platform } from "react-native-web"

import logo from './../../../assets/SIP.gif';


export default function Login({ navigation }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorLogin, setErrorLogin] = useState("");


    const loginFirebase = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                let user = userCredential.user;
                navigation.navigate("Task", { idUser: user.uid, emailUser: user.email })
            })
            .catch((error) => {
                setErrorLogin(true);
                let errorCode = error.code;
                let errorMessage = error.message;
            });
    }

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                navigation.navigate("Task", { idUser: user.uid, emailUser: user.email })
            }
        });

    }, [])

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <Image
                style={styles.logo}
                source={logo}
            />
            <Text style={styles.subTitle}>Solução em iluminação Publica</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite o E-mail"
                type="text"
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <TextInput
                style={styles.input}
                placeholder="Digite sua Senha"
                secureTextEntry={true}
                type="text"
                onChangeText={(text) => setPassword(text)}
                value={password}
            />

            {errorLogin === true
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
                    style={styles.buttonLogin}
                >
                    <Text style={styles.textButtonLogin}>Login</Text>
                </TouchableOpacity>
                //ok
                :
                <TouchableOpacity
                    style={styles.buttonLogin}
                    onPress={loginFirebase}

                >
                    <Text style={styles.textButtonLogin}>Login</Text>
                </TouchableOpacity>
            }
            <Text style={styles.registration}>Não é registrado?
                <Text
                    style={styles.linkSubscribe}
                    onPress={() => navigation.navigate("NewUser")}
                >
                    Cadastrar
                </Text>
            </Text>
            <View
                style={{ height: 100 }}
            />
        </KeyboardAvoidingView>
    )
}