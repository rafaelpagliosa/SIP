import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from "react-native"

import firebase from "../../config/firebaseconfig"
import styles from "./style"

export default function Details({ navigation, route }) {
    const [descriptionEdit, setDescriptionEdit] = useState(route.params.description)
    const [idEdit, setIdEdit] = useState(route.params.id)
    const [tipoEdit, setTipoEdit] = useState(route.params.tipo)
    const [statusEdit, setStatusEdit] = useState(route.params.status)
    const [urgenciaEdit, setUrgenciaEdit] = useState(route.params.urgencia)
    const [dataEdit, setDataEdit] = useState(null)
    const idTask = route.params.id;


    useEffect(() => {
        database.collection("Tasks").doc(route.params.id).get().then((doc) => {
            if (doc.exists) {
                var dado = doc.data();
                console.log("Aqui");
                setDataEdit(dado.data)
                
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }, []);

    const database = firebase.firestore();
    return (
        <View style={styles.container}>
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