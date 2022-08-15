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

import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';


export default function Task({ navigation, route }) {
    const [task, setTask] = useState([]);
    const database = firebase.firestore();

    var usuario = route.params.idUser;
    var email = route.params.emailUser;

    function logout() {
        firebase.auth().signOut().then(() => {
            navigation.navigate("Login")
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>S.I.P</Text>
            <Text style={styles.subTitle}>Solução em iluminação Publica</Text>

            <TouchableOpacity
                style={styles.buttonNewTask}
                onPress={() =>
                    navigation.navigate("Novo Chamado", {
                        idUser: route.params.idUser,
                        emailUser: email,
                    })
                }
            >
                <Text style={styles.iconButtonPeople}>
                    <MaterialCommunityIcons
                        name="exclamation-thick"
                        size={80}
                        color="#f2ae1b"
                    />
                </Text>
                <Text style={styles.iconButton}>Informar Problema</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonMeusChamados}
                onPress={() =>
                    navigation.navigate("Meus Chamados", {
                        idUser: route.params.idUser,
                    })
                }
            >
                <Text style={styles.iconButtonPeople}>
                    <MaterialCommunityIcons
                        name="comment-search"
                        size={80}
                        color="#f2ae1b"
                    />
                </Text>

                <Text style={styles.iconButton}>Meus Chamados</Text>
            </TouchableOpacity>

            <Text
                style={styles.linha}
            />

            <TouchableOpacity
                style={styles.buttonPeople}
                onPress={() =>
                    navigation.navigate("Perfil", {
                        idUser: route.params.idUser,
                        emailUser: email,
                    })
                }
            >
                <Text style={styles.iconButtonPeople}>
                    <MaterialCommunityIcons
                        name="account"
                        size={35}
                        color="#f2ae1b"
                    />
                </Text>
            </TouchableOpacity>


            <TouchableOpacity
                style={styles.buttonLogout}
                onPress={() => { logout() }}
            >
                <Text style={styles.iconButtonLogout}>
                    <MaterialCommunityIcons
                        name="location-exit"
                        size={35}
                        color="#f2ae1b"
                    />
                </Text>
            </TouchableOpacity>

            <Text
                style={styles.linha2}
            />
        </View>
    )
}
