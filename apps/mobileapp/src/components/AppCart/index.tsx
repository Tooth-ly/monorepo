import React from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import styles from './styles'
import { StackScreenProps } from '@react-navigation/stack';
import { Nav } from '../../Types'

interface AppCartProps {
    cred: {
        id: number,
        image: String,
        title: String,
        screen: String
    },
    navigation: Nav['navigation']
}

const AppCart= ({ cred, navigation }: AppCartProps) => {

    const handlePress = () => {
        navigation.navigate(cred.screen)
    }

    return (
        <Pressable style={styles.root} onPress={() => handlePress()}>
            {/* image */}
            <Image style={styles.logo} source={{uri: cred.image}}></Image>

            {/* title */}
            <Text style={styles.title}>{cred.title}</Text>

        </Pressable>
    )
}

export default AppCart
