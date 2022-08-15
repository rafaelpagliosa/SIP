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
    logo: {
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "-35%",
    },
    title: {
        fontSize: 65,
        color: "#2506DE",
        marginBottom: 10,
        fontWeight: "bold",
    },
    subTitle: {
        fontSize: 15,
        color: "#2506DE",
        marginTop: "-35%",
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
    buttonLogin: {
        width: 200,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2506DE",
        borderRadius: 50,
        marginTop: 30,
    },
    textButtonLogin: {
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
    registration: {
        width: 200,
        marginTop: 20,
        color: "#4d5156",
    },
    linkSubscribe: {
        marginLeft: "1%",
        color: "#1877f2",
        fontSize: 16,
    }
});

export default styles 