import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
    },
    label: {
        width: "90%",
        marginTop: 20,
        fontSize: 16,
        marginLeft: 20,
        color: "#2506DE"
    },
    input: {
        width: "90%",
        marginTop: 10,
        padding: 10,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "#2506DE",
        marginLeft: "auto",
        marginRight: "auto",
        color: "#50555C",
    },


    buttonNewTask: {
        width: 60,
        height: 60,
        position: "absolute",
        bottom: 30,
        left: 20,
        backgroundColor: "#2506DE",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    iconButton: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold",
    },
    id: {
        color: "#2506DE",
        fontSize: 25,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "15%",
        marginTop: "5%",
        marginBottom: "5%",
    }

});

export default styles