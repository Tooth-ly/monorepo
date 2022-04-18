import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    root: {
        display: 'flex',
        width: '100%'
    },
    text_container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 0.25,
        borderBottomWidth: 0.25,
        padding: 8,
        backgroundColor: 'white',
        borderColor: 'grey',
    },
    text: {
        paddingHorizontal: 2,
        fontSize: 18,
        color: 'lightblue'
    },
    icon_container: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        width: '50%',
        justifyContent: 'flex-end'
    },
    about_text: {
        // textAlign: 'right'
    }
})

export default styles