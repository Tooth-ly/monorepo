import { View, Text, TouchableHighlight, Image, InteractionManager, Keyboard, Pressable } from 'react-native'
import styles from './styles'
import React, { useEffect, useRef, useState } from 'react'
import { Input, SearchBar } from 'react-native-elements'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import IconBack from 'react-native-vector-icons/AntDesign'
import { Nav } from '../../Types'

interface PServicesHeaderProps {
    navigation: Nav,
    name: string,
    profile_pic: string
}

const PServicesHeader = ({ navigation, name, profile_pic }: PServicesHeaderProps) => {
    const [text, setText] = useState('')
    
    const mySearchBar = useRef()

    const handleChange = (txt: string) => {
        setText(txt)
    }
    const focus = () => {
        mySearchBar?.current.blur()
    }
    const handleDetails = () => {}

    return (
        <View style={styles.root}>
            {/* Top */}
            <View style={styles.top}>
                <Pressable onPress={() => navigation.goBack()} style={styles.back}><IconBack name="left" size={25} /><Text style={{ fontSize: 18 }}>PFiles</Text></Pressable>
                <Pressable onPress={() => handleDetails}><Text style={{ fontSize: 18 }}>Details</Text></Pressable>
            </View>
            
            {/* profile pic,  Name, & search */}
            <View style={styles.profile}>
                <View style={[styles.profileImgContainer, { borderColor: 'green', borderWidth:1 }]}>
                    <Image
                    source={{
                        uri: `data:image/png;base64,${profile_pic}`
                    }}
                    style={styles.profileImg}
                    />
                </View>
                <Text style={styles.profile_name}>{name}</Text>

                <SearchBar
                ref={mySearchBar}
                lightTheme
                round={true}
                containerStyle= {{ backgroundColor: 'transparent', borderTopWidth: 0, borderBottomWidth: 0 }}
                inputContainerStyle= {{ backgroundColor: 'white', height: 39 }}
                inputStyle= {{ color: 'black' }}
                placeholder="Service..."
                showCancel
                onChangeText={handleChange}
                value={text}
                onPressIn={focus}
                onClear={() => Keyboard.dismiss()}
                />

            </View>

        </View>
    )
}

export default PServicesHeader