import React, { useRef, useState } from 'react'
import { View, Text, Keyboard, ScrollView } from 'react-native'
import { SearchBar } from 'react-native-elements'
import styles from './styles'
import SegmentControl from '../../components/SegmentControl'
import HRCard from '../../components/HRCard'
import { Nav } from '../../Types'

const HRScreen = ({ navigation, route }: Nav) => {
    const [text, setText] = useState('')
    const mySearchBar = useRef()

    const focus = () => {
        mySearchBar?.current.blur()
    }

    const segments = [{
        title: 'ALL',
        view: ()=>(<ScrollView>{[1,1,1,1,1,1,1,1,1,1].map(()=><HRCard navigation={navigation} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmNdSL0wetARyMZVIRgtl2yPZyzXSJQx4EzA&usqp=CAU" name="Madilyn Manson" status="HR Manager"/>)}</ScrollView>)
    }, {
        title: 'EMPLOYEE',
        view: ()=>(<Text>EMPLOYEES PEOPLE</Text>)
    }, {
        title: 'DOCTOR',
        view: ()=>(<Text>DOCTORS PEOPLE</Text>)
    }, {
        title: 'STUDENT',
        view: ()=>(<Text>STUDENTS PEOPLE</Text>)
    }]

    return (
        <View style={styles.root}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Human Resources</Text>
                <SearchBar
                ref={mySearchBar}
                lightTheme
                round={true}
                containerStyle= {{ backgroundColor: 'transparent', borderTopWidth: 0, borderBottomWidth: 0 }}
                inputContainerStyle= {{ backgroundColor: 'white', height: 39 }}
                inputStyle= {{ color: 'black' }}
                placeholder="Service..."
                showCancel
                onChangeText={(txt)=>setText(txt)}
                value={text}
                onPressIn={focus}
                onClear={() => Keyboard.dismiss()}
                />
            </View>

            <SegmentControl
            style={styles.segments}
            segments={segments}
            />

        </View>
    )
}

export default HRScreen
