import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#dffaff',
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
        paddingTop: 8
    },
    back: {
        display: 'flex',
        flexDirection: 'row'
    },
    profile: {
        width: '100%',
        marginTop: -8
    },
    profileImgContainer: {
        alignSelf: 'center',
        height: 80,
        width: 80,
        borderRadius: 40,
        marginTop: 0.5,
      },
      profileImg: {
        height: 80,
        width: 80,
        borderRadius: 40,
      },
      profile_name: {
          width: '100%',
          textAlign: 'center',
          fontSize: 20,
          fontWeight: 'bold',
          color: 'black',
          marginBottom: 2
      }
})

export default styles