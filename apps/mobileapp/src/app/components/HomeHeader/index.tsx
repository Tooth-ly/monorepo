import React from 'react'
import { View, Text } from 'react-native'
import IconU from 'react-native-vector-icons/SimpleLineIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles'

const HomeHeader = () => {
    return (
        <View style={styles.root}>
            {/* title */}
            <Text style={styles.title}>Home</Text>

            {/* credendials */}
            <View style={styles.credContainer}>
                {/* notifications */}
                <Icon name='ios-chatbox-ellipses-outline' size={25} />

                {/* logout */}
                <IconU name='user' size={25} />
            </View>
        </View>
    )
}

export default HomeHeader
