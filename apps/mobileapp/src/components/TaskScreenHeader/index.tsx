import { View, Text, TouchableHighlight, Image, InteractionManager, Keyboard, Pressable } from 'react-native'
import styles from './styles'
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { Input, SearchBar } from 'react-native-elements'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import IconBack from 'react-native-vector-icons/AntDesign'
import { Nav, Stage } from '../../Types'

interface TaskScreenHeaderProps {
    gotoEdit: () => void,
    name: string,
    stage: Stage,
}

const TaskScreenHeader = ({ navigation, gotoEdit, name, stage }: TaskScreenHeaderProps) => {
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

    const handleEdits = () => {
        gotoEdit()
    }

    return (
        <View style={[styles.root, { backgroundColor: color() }]}>
            {/* Top */}
            <View style={styles.top}>
                <Pressable onPress={() => navigation.goBack()} style={styles.back}><IconBack name="left" size={25} /><Text style={{ fontSize: 18 }}>Back</Text></Pressable>
                <Pressable onPress={() => handleEdits()}><Text style={{ fontSize: 18 }}>Edit</Text></Pressable>
            </View>
            
            {/* Task Stage & Service Name */}
            <View style={styles.profile}>
                <Text>{stage}</Text>
                <Text style={styles.service_name}>{name}</Text>
            </View>

        </View>
    )
}

export default TaskScreenHeader