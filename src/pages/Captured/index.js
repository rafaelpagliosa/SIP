import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Picker, Image } from "react-native";

import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import firebase from '../../config/firebaseconfig';
import styles from './style';

export default function Map({ navigation, route }) {
    const database = firebase.firestore();
    const storage = firebase.storage();
    const [foto, setFoto] = useState(null);


    useEffect(() => {
        database.collection("Tasks").doc(route.params.id).get().then((doc) => {

            var dado = doc.data();
            console.log(dado);

            storage.ref(dado.image).getDownloadURL().then((url) => {
                console.log(url);
                setFoto(url);
            })

        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }, []);


    return (
        <View style={styles.container}>
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

