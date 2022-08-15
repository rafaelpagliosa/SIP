import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        zIndex: 3, // works on ios
        elevation: 3, // works on android
        backgroundColor: '#f4f4f4',
    }
});

export default styles