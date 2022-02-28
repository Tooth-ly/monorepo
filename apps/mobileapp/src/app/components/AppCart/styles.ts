import { StyleSheet } from "react-native"; 

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        margin: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'transparent'
    },
    logo: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        flex: 1,
        backgroundColor: 'transparent'
    },
    title: {
        fontSize: 20,
        width: '100%',
        backgroundColor: 'transparent',
        textAlign: 'center',
        color: '#0063a6'
    }
})

export default styles