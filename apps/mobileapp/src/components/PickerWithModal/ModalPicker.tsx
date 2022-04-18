import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ScrollView
} from 'react-native'
import React, { Dispatch, SetStateAction } from 'react'
import { Stage, Task } from '../../Types';
import TaskScreenHeader from '../TaskScreenHeader';

const OPTIONS = [Stage.New, Stage.Pending, Stage.Done];

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

interface ModalPickerProps {
    setIsModalVisible: Dispatch<SetStateAction<boolean>>,
    setChooseData: Dispatch<SetStateAction<Stage>>,
    task: Task
}

const ModalPicker = ({ setIsModalVisible, setChooseData, task }: ModalPickerProps) => {
    const onPressItem = (option: Stage) => {
        setIsModalVisible(false)
        setChooseData(option)
        task.stage = option
    }

    const option = OPTIONS.map((item, index) => {
        return (
            <TouchableOpacity
            style={styles.option}
            key={index}
            onPress={() => onPressItem(item)}
            >
                <Text style={styles.text}>{item}</Text>
            </TouchableOpacity>
        )
    })

    return (
        <TouchableOpacity
        onPress={() => setIsModalVisible(false)}
        style={styles.container}
        >
            <View style={[styles.modal, {width: WIDTH - 20, height: HEIGHT/3}]}>
                <ScrollView>
                    {option}
                </ScrollView>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flax: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modal: {
        backgroundColor: 'white',
        borderRadius: 10,
    },
    option: {
        alignItems: 'flex-start'
    },
    text: {
        margin: 20,
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default ModalPicker