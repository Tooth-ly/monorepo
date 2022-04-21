import { View, Text } from 'react-native'
import React from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import PFilesScreen from '../screens/PFilesScreen'
import PServicesScreen from '../screens/PServicesScreen'

const Stack = createStackNavigator()

const PFileStackNav = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      gestureEnabled: true,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
    >
        {/* PFiles */}
        <Stack.Screen name="PFilesScreen" component={PFilesScreen}
        options={{
            title: 'Patient Files',
            headerStyle: { backgroundColor: '#d4f4fa' },
        }}
        />

        {/* Patient File */}
        <Stack.Screen name="PServicesScreen" component={PServicesScreen}
        options={{
            headerShown: false
        }}
        />
    </Stack.Navigator>
  )
}

export default PFileStackNav