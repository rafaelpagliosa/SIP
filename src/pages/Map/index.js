import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Picker } from "react-native";

import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import firebase from '../../config/firebaseconfig';
import styles from './style';

export default function Map({ navigation, route }) {
    const database = firebase.firestore();
    const [local, setlocal] = useState([]);


    useEffect(() => {
        database.collection("Tasks").doc(route.params.id).get().then((doc) => {
            if (doc.exists) {
                var dado = doc.data();
                console.log(dado);
                setlocal(dado.local.origin)
            }
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
                <MapView
                    style={styles.maps}
                    initialRegion={local}
                    showsUserLocation={true}
                    zoomEnabled={true}
                    loadingEnabled={true}
                >
                </MapView>
            </View>

        </View>
    )
}

