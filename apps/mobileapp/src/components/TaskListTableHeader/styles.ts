import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        width: '100%',
        backgroundColor: '#51CE72',
        paddingVertical: 15,
        display: 'flex',
    },
    stage_names_container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderWidth: 0
    },
    stage_container: {
        borderBottomWidth: 3,
        borderColor: 'grey',
        width: '28%',
        alignItems: 'center',
        paddingVertical: 10
    },
    selected_stage_container: {
        borderBottomWidth: 0,
        width: '28%',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 35,
        backgroundColor: 'white'
    },
    stage_name: {
        color: 'black',
        fontSize: 20
    },
    tree_header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 5
    },
    tree_title_container: {
        width: '28%',
        alignSelf: 'center'
    },
    tree_title_text: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    }
})

export default styles