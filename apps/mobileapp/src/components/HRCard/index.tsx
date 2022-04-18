import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'
import { Nav } from '../../Types'

interface HRCardProps {
    navigation: Nav['navigation'],
    image: String,
    name: String,
    status: String
}

const HRCard = ({ navigation, image, name, status }: HRCardProps) => {
    return (
        <Pressable
        style={styles.root}
        onPress={()=>navigation.navigate('HREmployeeScreen')}
        >
            <View style={styles.left}>
                <Image
                style={styles.image}
                source={{ uri: image }}
                />
            </View>
            <View style={styles.right}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.status}>{status}</Text>
            </View>
        </Pressable>
    )
}

export default HRCard