import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        display: 'flex',
        flexDirection: 'column',
        marginVertical: 10,
        backgroundColor: 'transparent',
        width: '100%'
    },
    label_text: {
        marginLeft: 20,
        marginBottom: 8
    },
    text_container: {
        display: 'flex',
        borderWidth: 1,
        padding: 8,
        backgroundColor: 'white',
        borderColor: 'white',
        borderRadius: 25,
    },
    text: {
        paddingHorizontal: 2,
        alignSelf: 'center',
        fontSize: 20
    }
})

export default styles