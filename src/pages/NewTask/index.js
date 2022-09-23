import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Picker, ScrollView, Modal, Image } from "react-native";
import { FontAwesome } from '@expo/vector-icons'

import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import { Camera } from 'expo-camera'
import * as Permissions from 'expo-permissions';

import firebase from '../../config/firebaseconfig';
import styles from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { render } from 'react-dom';

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

    const camRef = useRef(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [hasPermission, sethasPermission] = useState(null);
    const [capturedPhoto, setCapturePhoto] = useState(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            sethasPermission(status === 'granted')
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }

    if (hasPermission === false) {
        return <Text>Acesso negado!</Text>;
    }

    async function takePicture() {
        if (camRef) {
            const data = await camRef.current.takePictureAsync();
            setCapturePhoto(data.uri);
            setOpen(true);
            console.log(data);
        }
    }


    return (
        <ScrollView style={styles.container}>
            <View style={{ height: 1350 }}>
                <Text style={styles.label}>Captura de Foto:</Text>
                <Camera
                    style={styles.maps}
                    type={type}
                    ref={camRef}
                >
                    <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row' }}>
                        <TouchableOpacity
                            style={{
                                position: 'absolute',
                                bottom: 20,
                                left: 20,
                            }}
                            onPress={() => {
                                setType(
                                    type === Camera.Constants.Type.back
                                        ? Camera.Constants.Type.front
                                        : Camera.Constants.Type.back
                                );
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 20,
                                    marginBottom: 13,
                                    backgroundColor: '#fff'
                                }}
                            >Trocar</Text>
                        </TouchableOpacity>
                    </View>
                </Camera>

                <TouchableOpacity style={styles.buttonCam} onPress={takePicture}>
                    <FontAwesome name='camera' size={23} color='#fff' />
                </TouchableOpacity>


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

                {capturedPhoto &&
                    <Modal
                        animationType='slide'
                        transparent={false}
                        visible={open}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20 }}>
                            <TouchableOpacity style={{ margin: 10 }} onPress={() => setOpen(false)}>
                                <FontAwesome name="window-close" size={50} color="#FF0000" />
                            </TouchableOpacity>
                            <Image
                                style={{ width: '100%', height: 300, borderRadius: 20 }}
                                source={{ uri: capturedPhoto }}
                            >

                            </Image>
                        </View>
                    </Modal>
                }
            </View>
        </ScrollView>

    )

}

