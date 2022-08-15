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


export default function Account({ navigation, route }) {

    var usuario = route.params.idUser;
    var email = route.params.emailUser;

    const [task, setTask] = useState([]);
    const database = firebase.firestore();

    useEffect(() => {
        database.collection("Users").where("email", "==", email).onSnapshot((query) => {
            const list = [];
            query.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id });
            });
            setTask(list);
        });
    }, []);


    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={task}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.table}>

                            <MaterialCommunityIcons
                                name="account"
                                size={30}
                                color="#f2ae1b"
                            />
                            <Text style={styles.linha}>
                                {item.nome}
                            </Text>


                            <MaterialCommunityIcons
                                name="card-account-details-outline"
                                size={30}
                                color="#f2ae1b"
                            />
                            <Text style={styles.linha}>
                                {item.cpf}
                            </Text>


                            <MaterialCommunityIcons
                                name="email"
                                size={30}
                                color="#f2ae1b"
                            />


                            <Text style={styles.linha}>
                                {item.email}
                            </Text>



                            <MaterialCommunityIcons
                                name="cellphone"
                                size={30}
                                color="#f2ae1b"
                            />
                            <Text style={styles.linha}>
                                {item.contato}
                            </Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}
