import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Modal, Image, Alert, ActivityIndicator } from "react-native";

import { Picker } from '@react-native-picker/picker';


import { FontAwesome } from '@expo/vector-icons';

import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import { Camera } from 'expo-camera'
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

import firebase from '../../config/firebaseconfig';
import styles from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { render } from 'react-dom';

import Loading from '../componentes/Loading';

export default function NewTask({ navigation, route, idUser }) {

    var usuario = route.params.idUser;
    var email = route.params.emailUser;

    var data = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();
    var dia2 = dia + '/' + mes + '/' + ano;

    const database = firebase.firestore();
    const [description, setDescription] = useState(null);
    const [selectedValue, setSelectedValue] = useState(null);
    const [selectedTipo, setTipoValue] = useState(null);
    const [visible, setVisible] = useState(false);


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

    //Retorna a posi????o e endere??o do usuario
    function getLocation() {
        let location = Location.getCurrentPositionAsync({});
        console.log(location);
        alert("Botao precionado")
        //setLocation(location);
    }
    const camRef = useRef(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [hasPermission, sethasPermission] = useState(null);
    const [nameImage, setNameImage] = useState(null);
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [height, setHeight] = useState(false);
    const [open, setOpen] = useState(false);


    const pickImage = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
        });
        const source = { uri: result.uri };
        console.log(source);
        setImage(source);
    };

    const uploadImage = async () => {
        console.log(image)
        if (image == null) {
            //envio da task

            database.collection("Tasks").add({
                description: description,
                user: usuario,
                status: "pendente",
                urgencia: selectedValue,
                tipo: selectedTipo,
                data: dia2,
                hora: data,
                local: { origin },
                image: null,
            })


            Alert.alert(
                "Sucesso",
                "Relato Protocolado! Vamos analisar sua solicita????o, acompanhe em Meus Chamados",
            );

            navigation.navigate("Task", {
                idUser: route.params.idUser,
                emailUser: email,
            });
        } else {
            setUploading(true);
            const response = await fetch(image.uri)
            const blob = await response.blob();
            const filename = image.uri.substring(image.uri.lastIndexOf('/') + 1);
            var ref = firebase.storage().ref().child(filename).put(blob);
            let uriimage = filename;

            try {
                await ref;
            } catch (e) {
                console.log(e);
            }
            setUploading(false);

            //envio da task
            database.collection("Tasks").add({
                description: description,
                user: usuario,
                status: "pendente",
                urgencia: selectedValue,
                tipo: selectedTipo,
                data: dia2,
                hora: data,
                local: { origin },
                image: uriimage,
            })
            Alert.alert(
                "Sucesso",
                "Relato Protocolado! Vamos analisar sua solicita????o, acompanhe em Meus Chamados",
            );

            navigation.navigate("Task", {
                idUser: route.params.idUser,
                emailUser: email,
            });
            setImage(null);
        }
    };

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


    return (
        <ScrollView style={styles.container}>
            <View style={{ height: 1950 }}>
                <Text style={styles.label}>Captura de Foto:</Text>
                <Text style={styles.aviso}>* A Foto n??s ajudar?? a identificar o local do relato.</Text>




                <SafeAreaView>
                    {image == null &&
                        <TouchableOpacity style={styles.selectButton} onPress={pickImage}>
                            <FontAwesome name='camera' size={23} color='#fff' />
                        </TouchableOpacity>
                    }
                    {image != null  &&
                        <View style={styles.imageContainer}>
                            {image && <Image source={{ uri: image.uri }} style={{ width: 300, height: 500 }} />}
                        </View>
                    }

                </SafeAreaView>


                <Text style={styles.linha} />
                <Text style={styles.label}>Localiza????o:</Text>
                <Text style={styles.aviso}>* A localiza????o autom??tica capturada pelo GPS de seu dispositivo.</Text>
                <View
                    style={styles.container2}
                >
                    <MapView
                        style={styles.maps}
                        initialRegion={origin}
                        showsUserLocation={true}
                        zoomEnabled={true}
                        loadingEnabled={true}
                    >
                    </MapView>
                </View>

                <Text style={styles.linha} />
                <Text style={styles.label}>Descri????o</Text>
                <Text style={styles.aviso}>Informa????es que voc?? julgar importantes para complementar o relato. Ex: Perto da casa verde, poste da cal??ada ou poste com transformador.</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite a Descri????o"
                    onChangeText={setDescription}
                    value={description}
                    multiline={true}
                    numberOfLines={10}
                />

                <Text style={styles.linha} />
                <Text style={styles.label}>Gravidade:</Text>
                <Text style={styles.aviso}>* Clique em selecione.</Text>
                <Picker
                    style={styles.select}
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)

                    }>
                    <Picker.Item style={styles.item} label="Selecione" value="nd" />
                    <Picker.Item style={styles.item} label="Urgente" value="Urgente" />
                    <Picker.Item style={styles.item} label="M??dia" value="M??dia" />
                    <Picker.Item style={styles.item} label="Baixa" value="Baixa" />
                </Picker>



                <Text style={styles.linha} />
                <Text style={styles.label}>Tipo do Relato:</Text>
                <Text style={styles.aviso}>* Clique em selecione.</Text>
                <Picker
                    style={styles.select}
                    selectedTipo={selectedTipo}
                    onValueChange={(itemValue, itemIndex) => setTipoValue(itemValue)}
                >
                    <Picker.Item label="Selecione" value="nd" />
                    <Picker.Item label="Ilumina????o" value="Iluminacao" />
                    <Picker.Item label="Curtos" value="Curtos" />
                    <Picker.Item label="Barulhos no Poste" value="Ruidos" />
                    <Picker.Item label="Vandalismo" value="Vandalismo" />
                </Picker>

                <Text style={styles.linha} />
                <Loading visible={visible} />


                {description === "" || description === null || selectedValue === null || selectedTipo === null
                    ?
                    <TouchableOpacity
                        disabled={true}
                        style={styles.buttonNewTask2}
                    >
                        <Text style={styles.iconButton2}>Aten????o! Preencha todos os campos</Text>
                    </TouchableOpacity>

                    //ok
                    :
                    <TouchableOpacity
                        style={styles.buttonNewTask}
                        onPress={uploadImage}
                        onPressIn={() => setVisible(true)}
                    >
                        <Text style={styles.iconButton}>Salvar</Text>
                    </TouchableOpacity>

                }
            </View>
        </ScrollView>
    )
}

