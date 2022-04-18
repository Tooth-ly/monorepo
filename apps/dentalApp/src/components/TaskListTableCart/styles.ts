import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    tree: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderTopWidth: 0.2,
        borderBottomWidth: 0.2,
        paddingVertical: 12,
    },
    tree_title_container: {
        width: '28%',
        alignSelf: 'center'
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        color: 'black'
    }
})

export default styles