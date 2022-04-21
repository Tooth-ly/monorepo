import React from 'react'
import { View, Text, FlatList, ScrollView } from 'react-native'
import FileCart from '../../components/FileCart'
import styles from './styles'
import Patients from '../../data/Patients'
import { StackScreenProps } from '@react-navigation/stack'
import { Patient, Nav } from '../Types'

const PFilesScreen = ({navigation, route}: Nav) => {
    return (
        <View style={styles.root}>
            <ScrollView
            style={styles.file_carts}
            showsVerticalScrollIndicator={false}
            >
            {
                Patients.map((patient: Patient) => (
                    <FileCart key={patient.id} cred={patient} navigation={navigation}/>
                ))
            }
            </ScrollView>
        </View>
    )
}

export default PFilesScreen
