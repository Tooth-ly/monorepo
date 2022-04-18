import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'
import { Nav, Task } from '../../Types'
import { formatDate } from '../../screens/TaskScreen'

interface TaskListTableCartProps {
    navigation: Nav,
    task: Task
}

const TaskListTableCart = ({ navigation, task }: TaskListTableCartProps) => {
    const handlePress = () => {
        navigation.navigate('TaskScreen', { task })
    }

  return (
    <Pressable style={styles.tree} onPress={() => handlePress()}>
        <View style={styles.tree_title_container}>
            <Text numberOfLines={1} style={styles.text}>{task.name}</Text>
        </View>

        <View style={styles.tree_title_container}>
            <Text numberOfLines={1} style={styles.text}>Y</Text>
        </View>

        <View style={styles.tree_title_container}>
            <Text numberOfLines={1} style={styles.text}>{formatDate(task.date)}</Text>
        </View>
    </Pressable>
  )
}

export default TaskListTableCart