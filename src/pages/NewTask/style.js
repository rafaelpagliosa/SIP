import { StyleSheet } from 'react-native'
import { borderColor, color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: "10%"
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
        marginRight: "auto"
    },
    select: {
        width: "90%",
        marginLeft: "5%",
        color: "#50555C",
    },
    buttonNewTask: {
        width: "90%",
        height: 60,
        bottom: "-8%",
        marginLeft: "5%",
        backgroundColor: "#2506DE",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    iconButton: {
        color: "#FFD700",
        fontSize: 16,
        fontWeight: "bold",
    },
    maps: {
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",

        height: "25%",
        borderTopWidth: 1,
    },
    buttonCam:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212',
        margin: 20,
        borderRadius: 10,
        height: 50,
    }
});

export default styles