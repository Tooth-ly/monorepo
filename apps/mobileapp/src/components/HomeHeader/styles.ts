import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        width: '100%',
        backgroundColor: '#d4f4fa',
        height: 55,
        borderWidth: 3,
        borderColor: '#bfeff8',
        paddingHorizontal: 25,
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row'
    },
    title: {
        flex: 3,
        marginTop: 'auto',
        marginBottom: 'auto',
        fontSize: 20,
    },
    credContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        marginTop: 'auto',
        marginBottom: 'auto',
        justifyContent: 'space-between'
    }
})

export default styles