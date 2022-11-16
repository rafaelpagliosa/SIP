import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Picker } from "react-native";

import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import firebase from '../../config/firebaseconfig';
import styles from './style';

import Carregando from '../componentes/Carregando';

export default function Map({ navigation, route }) {
    const database = firebase.firestore();
    const [local, setlocal] = useState([]);

    const [visible, setVisible] = useState(true);

    const [latitude, setLatitude] = useState(false);
    const [longitude, setLongitude] = useState(false);
    const [latitudeDelta, setLatitudeDelta] = useState(false);
    const [longitudeDelta, setLongitudeDelta] = useState(false);

    useEffect(() => {
        database.collection("Tasks").doc(route.params.id).get().then((doc) => {
            if (doc.exists) {
                var dado = doc.data();
                console.log(dado);
                setlocal(dado.local.origin)

                setLatitude(dado.local.origin.latitude);
                setLongitude(dado.local.origin.longitude);
                setLatitudeDelta(dado.local.origin.latitudeDelta);
                setLongitudeDelta(dado.local.origin.longitudeDelta);
            }

            setInterval(() => {
                setVisible(false);
            }, 1000);

        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }, []);

    return (
        <View style={styles.container}>
            <Carregando visible={visible} />
            <Text style={styles.id}>{route.params.id}</Text>
            <View
                style={styles.container2}
            >
                <MapView
                    style={styles.maps}
                    region={{
                        latitude: latitude,
                        longitude: longitude,
                        latitudeDelta: latitudeDelta,
                        longitudeDelta: longitudeDelta,
                    }}
                    showsUserLocation={true}
                    zoomEnabled={true}
                    loadingEnabled={true}
                >
                </MapView>
            </View>

        </View>
    )
}

