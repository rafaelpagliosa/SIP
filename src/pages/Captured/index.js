import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Picker, Image, Alert } from "react-native";

import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import firebase from '../../config/firebaseconfig';
import styles from './style';

import Carregando from '../componentes/Carregando';

export default function Map({ navigation, route }) {
    const database = firebase.firestore();
    const storage = firebase.storage();
    const [foto, setFoto] = useState(null);
    const [visible, setVisible] = useState(true);


    useEffect(() => {
        database.collection("Tasks").doc(route.params.id).get().then((doc) => {

            var dado = doc.data();
            console.log(dado);

            storage.ref(dado.image).getDownloadURL().then((url) => {
                console.log(url);
                setFoto(url);
            })
        })
            .then(result => {
                setInterval(() => {
                    setVisible(false);
                }, 4000);
            })
            .catch((error) => {
                console.log("Error getting document:", error);
                Alert.alert(
                    "Erro", error,
                    "Esse deu erro",
                );
            });

    }, []);


    return (
        <View style={styles.container}>

            <Carregando visible={visible} />
            <Text style={styles.id}>{route.params.id}</Text>
            <View
                style={styles.container2}
            >
                <Image
                    style={styles.img}
                    source={{
                        uri: foto,
                    }}
                />
            </View>
        </View>
    )
}

