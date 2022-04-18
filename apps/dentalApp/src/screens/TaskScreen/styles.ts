import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        zIndex: 1
    },
    scroll_view: {
        flexGrow: 1,
        width: '90%',
        alignSelf: 'center'
    },
    tr_text: {
        alignSelf: 'center',
        fontSize: 18,
        paddingTop: 15,
        color: '#007AFF'
    },
    toothly_recommends: {
        width: '96%',
        alignSelf: 'center',
        paddingVertical: 0,
        borderWidth: 1,
        borderColor: '#F2F1F6',
        borderRadius: 25
    }
})

export default styles