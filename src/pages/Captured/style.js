import { StyleSheet } from 'react-native'
import { YellowBox } from 'react-native-web';
import { borderColor, color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
    },
    container2: {
        backgroundColor: '#2506DE',
        marginTop: "4%",
        marginLeft: "4%",
        marginRight: "4%",
        height: "80%",
    },
    maps: {
        width: "96%",
        marginLeft: "2%",
        marginTop: "2%",
        height: "96%",
    },
    id: {
        color: "#2506DE",
        fontSize: 25,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "15%",
        marginTop: "5%",
        marginBottom: "5%",
    },
    img: {
        width: "96%",
        height: "96%",
        marginLeft: '2%',
        marginTop: '2%',

    },
});

export default styles