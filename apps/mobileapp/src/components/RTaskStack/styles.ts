import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    new_root: {
        width: 100,
        backgroundColor: '#FF574A',
        marginBottom: 10,
        borderWidth: 0,
        alignSelf: 'center',
        borderRadius: 8,
        paddingHorizontal: 7,
        paddingVertical: 5
    },
    pending_root: {
        width: 100,
        backgroundColor: '#FDA424',
        marginBottom: 10,
        borderWidth: 0,
        alignSelf: 'center',
        borderRadius: 8,
        paddingHorizontal: 7,
        paddingVertical: 5
    },
    done_root: {
        width: 100,
        backgroundColor: '#51CE72',
        marginBottom: 10,
        borderWidth: 0,
        alignSelf: 'center',
        borderRadius: 8,
        paddingHorizontal: 7,
        paddingVertical: 5
    },
    stage_container: {
        borderWidth: 0,
        height: 25,
        backgroundColor: '#e9f9fc',
        alignItems: 'center',
        borderRadius: 8,
        justifyContent: 'center'
    },
    tasks: {
        marginTop: 5,
        paddingVertical: 5
    },
    task: {
        borderWidth: 0,
        height: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 8,
        justifyContent: 'center'
    }
})

export default styles