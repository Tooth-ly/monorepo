import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './styles'

interface TaskInfoProps {
  label: string,
  info: string
}

const TaskInfo = ({label, info}: TaskInfoProps) => {
  return (
    <View style={styles.root}>
      {/* Label */}
      <Text style={styles.label_text}>{label?.toUpperCase()}</Text>

      {/* Space */}
      <View style={styles.text_container}>
          <Text style={styles.text}>{info ? info : '-- --'}</Text>
      </View>

    </View>
  )
}

export default TaskInfo