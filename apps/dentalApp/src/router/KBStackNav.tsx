import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import PFilesScreen from '../screens/PFilesScreen'
import KnowledgeScreen from '../screens/KnowledgeScreen'

const Stack = createStackNavigator()

const KBStackNav = () => {
  return (
    <Stack.Navigator>
        {/* Knowledge */}
        <Stack.Screen name="KnowledgeScreen" component={KnowledgeScreen}
        options={{
            title: 'Knowledge Base',
            headerStyle: { backgroundColor: '#d4f4fa' }
        }}
        />
    </Stack.Navigator>
  )
}

export default KBStackNav