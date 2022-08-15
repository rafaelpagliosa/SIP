import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Picker } from "react-native";

import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import firebase from '../../config/firebaseconfig';
import styles from './style';

export default function NewTask({ navigation, route, idUser }) {

    var usuario = route.params.idUser;
    var email = route.params.emailUser;
    var dia = new Date();

    const database = firebase.firestore();
    const [description, setDescription] = useState(null);
    const [selectedValue, setSelectedValue] = useState(null);
    const [selectedTipo, setTipoValue] = useState(null);

    const [location, setLocation] = useState(null);
    const [erroMsg, setErrorMsg] = useState(null);

    const [origin, setOrigin] = useState(null);

    useEffect(() => {
        (async function () {
            const { status, permissions } = await Location.requestForegroundPermissionsAsync();
            if (status === 'granted') {
                let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
                setOrigin({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.000922,
                    longitudeDelta: 0.000421
                })
            } else {
                throw new Error('Location permission not granted');
            }
        })();
    }, []);

    function addTask() {
        database.collection("Tasks").add({
            description: description,
            user: usuario,
            status: "pendente",
            urgencia: selectedValue,
            tipo: selectedTipo,
            data: dia,
            local: { origin },
        })

        alert("Solicitação Salva com Sucesso!")
        navigation.navigate("Task", {
            idUser: route.params.idUser,
            emailUser: email,
        });
    }

    //Retorna a posição e endereço do usuario
    function getLocation() {
        let location = Location.getCurrentPositionAsync({});
        console.log(location);
        alert("Botao precionado")
        //setLocation(location);
    }

    return (

        <View style={styles.container}>
            <Text style={styles.label}>Localização:</Text>
            <MapView
                style={styles.maps}
                initialRegion={origin}
                showsUserLocation={true}
                zoomEnabled={true}
                loadingEnabled={true}
            >
            </MapView>


            <Text style={styles.label}>Descrição</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite a Descrição"
                onChangeText={setDescription}
                value={description}
                multiline={true}
                numberOfLines={10}
            />

            <Text style={styles.label}>Gravidade:</Text>
            <Picker
                style={styles.select}
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Selecione" value="nd" />
                <Picker.Item label="Urgente" value="Urgente" />
                <Picker.Item label="Média" value="Média" />
                <Picker.Item label="Baixa" value="Baixa" />
            </Picker>

            <Text style={styles.label}>Tipo do Relato:</Text>
            <Picker
                style={styles.select}
                selectedTipo={selectedTipo}
                onValueChange={(itemValue, itemIndex) => setTipoValue(itemValue)}
            >
                <Picker.Item label="Selecione" value="nd" />
                <Picker.Item label="Iluminação" value="Iluminacao" />
                <Picker.Item label="Curtos" value="Curtos" />
                <Picker.Item label="Barulhos no Poste" value="Ruidos" />
                <Picker.Item label="Vandalismo" value="Vandalismo" />
            </Picker>

            <TouchableOpacity
                style={styles.buttonNewTask}
                onPress={() => {
                    addTask()
                }}
            >
                <Text style={styles.iconButton}>Salvar</Text>
            </TouchableOpacity>

        </View>
    )
}

