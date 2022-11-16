import { StyleSheet } from "react-native";
import { Platform } from "react-native-web";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === "ios" ? 0 : 50,
    },
    title: {
        fontSize: 48,
        color: "#2506DE",
        marginBottom: 10,
        fontWeight: "bold",
    },
    input: {
        width: 300,
        marginTop: 10,
        padding: 10,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "#2506DE",
        marginLeft: "auto",
        marginRight: "auto",
        color: "#4d5156",
    },
    buttonRegister: {
        width: 200,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2506DE",
        borderRadius: 50,
        marginTop: 30,
    },
    textButtonRegister: {
        color: '#ffffff',
    },
    contentAlert: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    warningAlert: {
        paddingLeft: 10,
        color: "#bdbdbd",
        fontSize: 16,
    },
    login: {
        marginTop: 20,
        color: "#4d5156",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    linkLogin: {
        color: "#1877f2",
        fontSize: 16,
    }
});

export default styles 