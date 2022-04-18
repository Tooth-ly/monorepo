import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    root: {
        display: 'flex',
        // height: 200,
        width: '100%',
        backgroundColor: 'transparent',
        marginVertical: 0,
        paddingHorizontal: 10,
        height: 200
    },
    body: {
        display: 'flex',
        width: '100%',
        borderWidth: 1,
        borderColor: '#bfeff8',
        backgroundColor: 'white',
        alignSelf: 'center',
        marginHorizontal: 0,
        borderRadius: 3,
        padding: 2
    },
    profileImgContainer: {
        alignSelf: 'center',
        height: 40,
        width: 40,
        borderRadius: 20,
        marginTop: 0.5,
    },
    profileImg: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },
    ppNedit: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 5,
        marginBottom: 0
    },
    edit: {
        display: 'flex',
        flexDirection: 'row',
        // borderWidth: 0.5,
        backgroundColor: '#d4f4fa',
        borderRadius: 20,
        alignItems: 'center',
        padding: 5
    },
    stages: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 8,
        marginTop: 0,
    }
})

export default styles