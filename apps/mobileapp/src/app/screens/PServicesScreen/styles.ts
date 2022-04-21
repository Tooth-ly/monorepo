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
        // paddingTop: 190,
        flexGrow: 1,
        width: '100%',
    }
})

export default styles