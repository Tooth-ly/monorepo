import { View, Text, Pressable, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles'
import { Nav, Stage } from '../../Types'
import IconBack from 'react-native-vector-icons/AntDesign'

interface TaskEditHeaderProps {
    navigation: Nav,
    stage: Stage
}

const TaskEditHeader = ({ navigation, stage }: TaskEditHeaderProps) => {
    const handleDelete = () => {}

    const color = () => {
        switch (stage) {
            case Stage.New:
                return '#FF574A'
            case Stage.Pending:
                return '#F9C985'
            default:
                return '#51CE72'
        }
    }

    return (
        <View style={[styles.header, { backgroundColor: color() }]}>
            <Pressable onPress={() => navigation.goBack()} style={styles.back}><IconBack name="left" size={25} color="blue"/><Text style={{ fontSize: 18, color: 'blue' }}>Back</Text></Pressable>
            <Text style={styles.header_title_text}>Edit Task</Text>
            <Pressable onPress={() => handleDelete}><Text style={{ fontSize: 18, color: 'blue' }}>Delete</Text></Pressable>
        </View>
    )
}

export default TaskEditHeader