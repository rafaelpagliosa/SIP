import React from "react";
import { View, Modal, Text, Image, ActivityIndicator } from 'react-native';

import logo from './../../../assets/SIP.gif';

export default function Sip({ visible }) {
    return (
        <Modal visible={visible}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',  backgroundColor: '#f4f4f4', }}>


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
            </View>
        </Modal>
    )
}

