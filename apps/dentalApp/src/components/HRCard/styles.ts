import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    root: {
        borderWidth: 0.25,
        borderRadius: 15,
        height: 90,
        // width: '90%',
        width: '90%',
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        marginBottom: 10
    },
    left: {
        height: '100%',
        width: '30%',
        flexDirection: 'row',
    },
    image: {
        width: '100%',
        borderRadius: 15
    },
    right: {
        marginLeft: 10,
        paddingVertical: 8
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16
    },
    status: {}
})

export default styles