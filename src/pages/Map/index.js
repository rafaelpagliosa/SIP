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
    return (
        <View style={styles.container}>
            <Text style={styles.id}>{route.params.id}</Text>

            <MapView
                style={styles.maps}
                initialRegion={route.params.origin}
                showsUserLocation={true}
                zoomEnabled={true}
                loadingEnabled={true}
            >
            </MapView>
        </View>
    )
}

