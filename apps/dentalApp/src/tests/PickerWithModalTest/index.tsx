import {
    View,
    Text, 
    StyleSheet,
    Modal,
    TouchableOpacity,
    SafeAreaView
} from 'react-native'
import React, { useState } from 'react'
import ModalPicker from './ModalPicker'
import IconFor from 'react-native-vector-icons/AntDesign'


const PickerWithModalTest = () => {
    const [chooseData, setChooseData] = useState('Select Item...')
    const [isModalVisible, setIsModalVisible] = useState(false)

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
            onPress={() => setIsModalVisible(true)}
            style={styles.touchableOpacity}
            >
                <View style={styles.text_container}>
                        <Text numberOfLines={1} style={styles.text}>{chooseData}</Text>
                        <View style={styles.icon_container}>
                        <IconFor name="right" size={25}/>
                        </View>
                </View>
            </TouchableOpacity>
            <Modal
            transparent={true}
            animationType='fade'
            visible={isModalVisible}
            onRequestClose={() => setIsModalVisible(false)}
            >
                <ModalPicker
                setIsModalVisible={setIsModalVisible}
                setChooseData={setChooseData}
                />
            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    touchableOpacity: {
        alignSelf: 'stretch',
        paddingHorizontal: 20
    },
    text_container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 0.25,
        borderBottomWidth: 0.25,
        padding: 8,
        backgroundColor: 'white',
        borderColor: 'grey',
    },
    text: {
        paddingHorizontal: 2,
        fontSize: 18,
        color: 'lightblue'
    },
    icon_container: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        width: '50%',
        justifyContent: 'flex-end'
    },
})

export default PickerWithModalTest