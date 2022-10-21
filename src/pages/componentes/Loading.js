import React from "react";
import { View, Modal, Text, ActivityIndicator } from 'react-native';


export default function Loading({ visible }) {
    return (
        <Modal visible={visible}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>


                <Text style={{
                    fontSize: 65,
                    color: "#2506DE",
                    marginBottom: "-4%",
                    fontWeight: "bold",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "5%",
                }}>S.I.P</Text>
                <Text style={{
                    fontSize: 15,
                    color: "#2506DE",
                    marginBottom: 300,
                    marginLeft: "auto",
                    marginRight: "auto",
                }}>Solução em iluminação Publica</Text>

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

