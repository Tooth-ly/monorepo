import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import PFilesScreen from '../screens/PFilesScreen'
import HRScreen from '../screens/HRScreen'

const Stack = createStackNavigator()

const HRStackNav = () => {
  return (
    <Stack.Navigator>
        {/* HR */}
        <Stack.Screen name="HRScreen" component={HRScreen}
        options={{
            title: 'Human Resources',
            headerStyle: { backgroundColor: '#d4f4fa' }
        }}
        />
    </Stack.Navigator>
  )
}

export default HRStackNav