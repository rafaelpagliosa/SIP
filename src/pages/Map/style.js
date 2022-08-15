import { StyleSheet } from 'react-native'
import { borderColor, color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
    },
    maps: {
        width: "90%",
        marginLeft: "5%",
        marginTop: "5%",
        height: "80%",
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