import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { Patient, Nav } from '../../Types';
import styles from './styles'

interface FileCartProps {
    cred: Patient,
    navigation: Nav['navigation']
}

const FileCart = ({ cred, navigation }: FileCartProps) => {

    const handlePress = (navigation: Nav['navigation']) => {
        navigation.navigate("PServicesScreen", { cred })
    }

    return (
        <Pressable style={styles.root} onPress={() => handlePress(navigation)}>
            {/* Mark Bar */}
            <View style={styles.bar}></View>

            {/* info */}
            <View style={styles.info}>
                {/* Patient Name */}
                <View>
                    <Text numberOfLines={1} style={styles.pat_name}>{cred.name}</Text>
                </View>

                {/* Patient Status */}
                <Text numberOfLines={1}>Alive</Text>
            </View>

        </Pressable>
    )
}

export default FileCart
