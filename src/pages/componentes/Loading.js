import React from "react";
import { View, Modal, Text, ActivityIndicator, Image } from 'react-native';
import logo from './../../../assets/SIP.gif';

export default function Loading({ visible }) {
    return (
        <Modal visible={visible}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f4f4f4', }}>


                <Image source={logo}
                    style={{
                        width: "80%",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: "-35%",
                    }}
                />

                <ActivityIndicator
                    size="large"
                    color={'blue'}
                    animating={true}
                />
                <Text style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 15,
                    color: "#2506DE",
                }}>Protocolando seu Relato</Text>
            </View>
        </Modal>
    )
}

