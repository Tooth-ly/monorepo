import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 2,

        shadowColor: '#470000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.2,
        elevation: 1
    },
    top: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingTop: 8,
    },
    back: {
        display: 'flex',
        flexDirection: 'row'
    },
    profile: {
        width: '100%',
        marginTop: -15,
        alignItems: 'center',

    },
      service_name: {
          width: '100%',
          textAlign: 'center',
          fontSize: 30,
          fontWeight: 'bold',
          color: 'black',
          marginBottom: 8,
          paddingTop: 15,
      }
})

export default styles