import { StyleSheet } from 'react-native'
import { backgroundColor, borderColor, color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: "0%",
    },
    label: {
        width: "90%",
        fontSize: 20,
        marginLeft: 20,
        color: "#2506DE",
        marginTop: "5%",
    },
    input: {
        width: "90%",
        marginTop: 10,
        padding: 10,
        height: 100,
        borderTopWidth: 1,
        borderTopColor: "#2506DE",
        borderBottomWidth: 1,
        borderBottomColor: "#2506DE",
        borderLeftWidth: 1,
        borderLeftColor: "#2506DE",
        borderRightWidth: 1,
        borderRightColor: "#2506DE",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: 'white',
    },
    select: {
        width: "90%",
        marginLeft: "5%",
        color: "#50555C",
        backgroundColor: 'white',
    },
    buttonNewTask: {
        width: "90%",
        height: 60,
        bottom: "-1%",
        marginLeft: "5%",
        backgroundColor: "#2506DE",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    iconError: {
        fontSize: 16,
        fontWeight: "bold",
        marginRight: "50%",
        alignItems: 'center',
        width: "100%",
    },
    iconOk: {
        fontSize: 16,
        fontWeight: "bold",
        marginRight: "50%",
        alignItems: 'center',
        width: "100%",
    },
    iconButton: {
        color: "#FFD700",
        fontSize: 16,
        fontWeight: "bold",
    },
    iconAjuste: {

        marginTop: "5%",
        marginBottom: "5%",
        marginLeft: "25%",
        marginRight: "25%",
        width: "50%",


    },
    maps: {
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        height: "25%",
        borderTopWidth: 1,
    },
    capture: {
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "red",
        height: "25%",
        borderTopWidth: 1,
    },
    viewButtonViraCam: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
    },
    buttonViraCam: {
        position: 'absolute',
        bottom: 0,
        left: 20,
    },
    buttonCam: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2506DE',
        marginLeft: "40%",
        marginRight: "40%",
        marginBottom: "2%",
        borderRadius: 10,
        height: 50,
    },
    linha: {
        borderColor: "#2506DE",
        borderStyle: "solid",
        borderBottomWidth: 5,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        width: "90%",
        marginLeft: "5%"
    },
    linha2: {
        borderColor:"#FFD700",
        borderStyle: "solid",
        borderBottomWidth: 5,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        width: "90%",
    },
    aviso: {
        width: "90%",
        fontSize: 12,
        marginLeft: 20,
        color: "#20201E",
    },
    title: {
        fontSize: 65,
        color: "#2506DE",
        marginBottom: "-4%",
        fontWeight: "bold",
        marginLeft: "auto",
        marginRight: "auto",

    },
    subTitle: {
        fontSize: 15,
        color: "#2506DE",
        marginBottom: 5,
        marginLeft: "auto",
        marginRight: "auto",
    },
    selectButton:{
        borderRadius: 5,
        width: "90%",
        marginLeft: "5%",
        height: 50,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    uploadButton:{
        borderRadius: 5,
        width: 150,
        height: 50,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    imageContainer:{
        marginBottom: 5,
        alignItems: 'center',
    }


    
});

export default styles