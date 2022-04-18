import { View, Text, Pressable, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { Nav } from '../../Types'
import IconBack from 'react-native-vector-icons/AntDesign'
import TaskEditHeader from '../../components/TaskEditHeader'
import TaskEdits from '../../components/TaskEdits'
import SwitchCart from '../../components/SwitchCart'
import TaskProperties from '../../components/TaskProperties'
import MyDatePicker from '../../components/MyDatePicker'

const TaskEditScreen = ({ navigation, route }: Nav) => {
    const { task } = route.params

    const handleDelete = () => {}    

    return (
        <View style={styles.root}>
            {/* Header */}
            <TaskEditHeader stage={task.stage} navigation={navigation} />

            <ScrollView style={styles.body}>
                {/* Label & Redirects */}
                <TaskEdits navigation={navigation} task={task}/>
                
                {/* Label & Switches */}
                <TaskProperties/>
                
            </ScrollView>

        </View>
    )
}

export default TaskEditScreen