import React, { useState, useEffect } from 'react';
import {
    SafeareaView,
    View,
    Text,
    TouchableOpacity,
    FlatList
} from "react-native";

import firebase from '../../config/firebaseconfig';
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import styles from './style';

import Carregando from '../componentes/Carregando';


export default function MyChamados({ navigation, route }) {

    var usuario = route.params.idUser;
    var i;

    const [task, setTask] = useState([]);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [chamados, setChamados] = useState(0);

    const [visible, setVisible] = useState(true);
    const database = firebase.firestore();


    useEffect(() => {
        database.collection("Tasks").where("user", "==", usuario).onSnapshot((query) => {
            const list = [];
            query.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id });
            });
            setTask(list);
            setChamados(list.length);
        });
        setInterval(() => {
            setVisible(false);
        }, 3000);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.chamados}> Chamados Realizados: {chamados}</Text>
            <Carregando visible={visible} />

            <FlatList
                showsVerticalScrollIndicator={false}
                data={task}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.Tasks}>
                            <TouchableOpacity
                                style={styles.map}
                                onPress={() =>
                                    navigation.navigate("Details", {
                                        id: item.id,
                                        description: item.description,
                                        idUser: user.uid,
                                    })
                                }>

                                <FontAwesome
                                    style={styles.editeTask}
                                    name="map"
                                    size={35}
                                    color="#2506DE"
                                    onPress={() =>
                                        navigation.navigate("Mapa", {
                                            id: item.id,
                                            local: item.local,
                                            latitude: latitude,
                                            longitude: longitude,
                                        })
                                    }
                                >
                                </FontAwesome>
                                <FontAwesome
                                    name="image"
                                    size={35}
                                    color="#2506DE"
                                    onPress={() =>
                                        navigation.navigate("Imagem", {
                                            id: item.id,
                                            local: item.local,
                                            latitude: latitude,
                                            longitude: longitude,
                                        })
                                    }
                                >
                                </FontAwesome>
                            </TouchableOpacity>

                            <Text
                                style={styles.DescriptionTask}
                                onPress={() =>
                                    navigation.navigate("Visualizar", {
                                        id: item.id,
                                        description: item.description,
                                        tipo: item.tipo,
                                        status: item.status,
                                        urgencia: item.urgencia,
                                        idUser: route.params.idUser,
                                    })
                                }
                            >
                                <View style={styles.Table}>
                                    <Text style={styles.linha}><Text style={styles.linhaTitulo}>Protocolo:</Text> {item.id}</Text>
                                    <Text style={styles.linha}><Text style={styles.linhaTitulo}>Status:</Text>  {item.status}</Text>
                                    <Text style={styles.linha}><Text style={styles.linhaTitulo}>Solicitação:</Text>  {item.data}</Text>
                                </View>

                            </Text>
                        </View>
                    )
                }}
            />

        </View>
    )
}
