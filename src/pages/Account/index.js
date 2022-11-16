import React, { useState, useEffect } from 'react';
import {
    SafeareaView,
    View,
    Text,
    TouchableOpacity,
    FlatList
} from "react-native";

import firebase from '../../config/firebaseconfig';
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import styles from './style';

import Carregando from '../componentes/Carregando';

export default function Account({ navigation, route }) {

    var usuario = route.params.idUser;
    var email = route.params.emailUser;


    const database = firebase.firestore();

    const [uid, setUid] = useState(null);
    const [nome, setNome] = useState(null);
    const [cpf, setCpf] = useState(null);
    const [visible, setVisible] = useState(true);
    //const [email, setEmail] = useState(null);
    const [contato, setContato] = useState(null);

    useEffect(() => {
        database.collection("Users").where("email", "==", email).onSnapshot((query) => {
            const list = [];
            query.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id });
            });
            setNome(list[0].nome);
            setUid(list[0].uid);
            setCpf(list[0].cpf);
            setContato(list[0].contato);
        });
        setInterval(() => {
            setVisible(false);
        }, 2000);
    },
        []);

    return (
        <View style={styles.container}>

            <Carregando visible={visible} />

            <View style={styles.table}>

                <MaterialCommunityIcons
                    name="account"
                    size={30}
                    color="#f2ae1b"
                />
                <Text style={styles.linha}>
                    <Text>{nome}</Text>
                </Text>


                <MaterialCommunityIcons
                    name="card-account-details-outline"
                    size={30}
                    color="#f2ae1b"
                />
                <Text style={styles.linha}>
                    <Text>{cpf}</Text>
                </Text>


                <MaterialCommunityIcons
                    name="email"
                    size={30}
                    color="#f2ae1b"
                />
                <Text style={styles.linha}>
                    <Text>{email}</Text>
                </Text>



                <MaterialCommunityIcons
                    name="cellphone"
                    size={30}
                    color="#f2ae1b"
                />
                <Text style={styles.linha}>
                    <Text>{contato}</Text>
                </Text>
            </View>

        </View>
    )
}
