import { StyleSheet } from "react-native"

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
    press_container: {
        display: 'flex',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 15,
        padding: 8,
        backgroundColor: 'white',
    }
})

export default styles