import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 8
    },
    back: {
        display: 'flex',
        flexDirection: 'row'
    },
    header_title_text: {
        fontSize: 20,
        fontWeight: 'bold'
    },
})

export default styles