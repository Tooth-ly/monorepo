import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'
import { Stage, Task } from '../../Types'
import IconPlus from 'react-native-vector-icons/FontAwesome5'

interface RTaskStackProp {
    stage: Stage
}

const RTaskStack = ({ stage }: RTaskStackProp) => {
    const chooseColor = () => {
        switch (stage) {
            case Stage.New:
                return styles.new_root
            case Stage.Pending:
                return styles.pending_root
            default:
                return styles.done_root
        }
    }

    return (
        <View style={chooseColor()}>
            {/* Stage Name */}
            <View style={styles.stage_container}><Text style={{ color: 'black' }}>{stage}</Text></View>

            {/* Plus & RTasks */}
            <View style={styles.tasks}>
                <Pressable style={styles.task}><IconPlus name="plus" size={30} /></Pressable>
            </View>

        </View>
    )
}

export default RTaskStack
