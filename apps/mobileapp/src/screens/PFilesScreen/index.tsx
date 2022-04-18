import React from 'react'
import { View, Text, FlatList, ScrollView } from 'react-native'
import FileCart from '../../components/FileCart'
import styles from './styles'
import PFiles from '../../data/PFiles'
import { StackScreenProps } from '@react-navigation/stack'
import { Patient, Nav, PFile } from '../Types'

const PFilesScreen = ({navigation, route}: Nav) => {
    return (
        <View style={styles.root}>
            <ScrollView
            style={styles.file_carts}
            showsVerticalScrollIndicator={false}
            >
            {
                PFiles.map((PFile: PFile) => (
                    <FileCart key={PFile.id} cred={PFile.patient} services={PFile.services} navigation={navigation}/>
                ))
            }
            </ScrollView>
        </View>
    )
}

export default PFilesScreen
