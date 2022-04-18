import { View, Text, TouchableHighlight, Image, InteractionManager, Keyboard, Pressable } from 'react-native'
import styles from './styles'
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { Input, SearchBar } from 'react-native-elements'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import IconBack from 'react-native-vector-icons/AntDesign'
import { Nav } from '../../Types'

interface HREmployeeHeaderProps {
    navigation: Nav,
    name: string,
    profile_pic: string,
    text: string,
    setText: Dispatch<SetStateAction<string>>
}

const HREmployeeHeader = ({ navigation, name, profile_pic, text, setText }: HREmployeeHeaderProps) => {
    return (
        <View style={styles.root}>
            {/* Top */}
            <View style={styles.top}>
                <Pressable onPress={() => navigation.goBack()} style={styles.back}><IconBack name="left" size={25} /><Text style={{ fontSize: 18 }}>BACK</Text></Pressable>
                <Pressable onPress={() => {}}><Text style={{ fontSize: 18 }}>Details</Text></Pressable>
            </View>
            
            {/* profile pic & Name */}
            <View style={styles.profile}>
                <View style={[styles.profileImgContainer, { borderColor: 'green', borderWidth:1 }]}>
                    <Image
                    source={{ uri: profile_pic }}
                    style={styles.profileImg}
                    />
                </View>
                <Text style={styles.profile_name}>{name}</Text>
            </View>

            {/* Info */}
            <View style={styles.infoContainer}>
                <View style={styles.left}>
                    <Text>Position</Text>
                    <Text>Manager</Text>
                </View>
                <View style={styles.right}>
                    <Text>Phone</Text>
                    <Text>Email</Text>
                </View>
            </View>

        </View>
    )
}

export default HREmployeeHeader