import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        alignSelf: "center",
        alignItems: 'center',
        backgroundColor: '#d4f4fa',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#bfeff8',
        width: '96%', 
        height: '12%',
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 3
    },
    bar: {
        width: '3%',
        height: '100%',
        backgroundColor: '#bfeff8'
    },
    info: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '97%',
        padding: 20
    },
    pat_name: {
        fontSize: 18
    }
})

export default styles