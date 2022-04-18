import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles'
import Redirect from '../Redirect'
import { Nav } from '../../Types'
import SwitchCart from '../SwitchCart'

const TaskProperties = () => {
  return (
    <View style={styles.root}>
        {/* Label Text */}
        <Text style={styles.label_text}>PROPERTIES</Text>

        {/* Switches */}
        <View style={styles.press_container}>
            <SwitchCart
            text="Urgent"
            text_style={{ color: 'black' }}
            container_style={{ borderTopWidth: 0 }}
            />
            <SwitchCart
            text="Assignee Notes"
            text_style={{ color: 'black' }}
            />
            <SwitchCart
            text="Toothly Recommends"
            text_style={{ color: 'black' }}
            container_style={{ borderBottomWidth: 0 }}
            />
        </View>

    </View>
  )
}

export default TaskProperties