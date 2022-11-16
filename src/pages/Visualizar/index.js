import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from "react-native";
import MapView from 'react-native-maps';


import firebase from "../../config/firebaseconfig"
import styles from "./style"

import Carregando from '../componentes/Carregando';

export default function Details({ navigation, route }) {
    const [descriptionEdit, setDescriptionEdit] = useState(route.params.description)
    const [idEdit, setIdEdit] = useState(route.params.id)
    const [tipoEdit, setTipoEdit] = useState(route.params.tipo)
    const [statusEdit, setStatusEdit] = useState(route.params.status)
    const [urgenciaEdit, setUrgenciaEdit] = useState(route.params.urgencia)
    const [dataEdit, setDataEdit] = useState(null)
    const idTask = route.params.id;
    const [visible, setVisible] = useState(true);

    const [latitude, setLatitude] = useState(false);
    const [longitude, setLongitude] = useState(false);
    const [latitudeDelta, setLatitudeDelta] = useState(false);
    const [longitudeDelta, setLongitudeDelta] = useState(false);


    useEffect(() => {
        database.collection("Tasks").doc(route.params.id).get().then((doc) => {
            if (doc.exists) {
                var dado = doc.data();
                //console.log("Aqui");
                setDataEdit(dado.data);

                setLatitude(dado.local.origin.latitude);
                setLongitude(dado.local.origin.longitude);
                setLatitudeDelta(dado.local.origin.latitudeDelta);
                setLongitudeDelta(dado.local.origin.longitudeDelta);
            }
        })
            .then(result => {
                setInterval(() => {
                    setVisible(false);
                }, 1000);
            })
            .catch((error) => {
                console.log("Error getting document:", error);
                Alert.alert(
                    "Erro",
                );
            });

    }, []);


    const database = firebase.firestore();
    return (
        <View style={styles.container}>

            <Carregando visible={visible} />
            <Text style={styles.id}>{idEdit}</Text>


            <Text style={styles.label}>Relato:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setDescriptionEdit}
                value={descriptionEdit}
                editable={false}
            />

            <Text style={styles.label}>Situação:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setTipoEdit}
                value={statusEdit}
                editable={false}
            />

            <Text style={styles.label}>Tipo:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setTipoEdit}
                value={tipoEdit}
                editable={false}
            />

            <Text style={styles.label}>Urgencia:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setTipoEdit}
                value={urgenciaEdit}
                editable={false}
            />


            <Text style={styles.label}>Data</Text>
            <TextInput
                style={styles.input}
                onChangeText={setDataEdit}
                value={dataEdit}
                editable={false}
            />
        </View>
    )
}