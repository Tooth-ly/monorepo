import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#e9f9fc',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        marginTop: '5%'
    },
    apps: {
        width: '100%',
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'auto',
    },
    appcart: {
        width: '30%',
        height: '20%',
        backgroundColor: 'transparent'
    }
})

export default styles