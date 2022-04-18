import { View, Text } from 'react-native'
import React from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import PFilesScreen from '../screens/PFilesScreen'
import HRScreen from '../screens/HRScreen'
import HREmployeeScreen from '../screens/HREmployeeScreen'

const Stack = createStackNavigator()

const HRStackNav = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      gestureEnabled: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
    >
        {/* HR */}
        <Stack.Screen name="HRScreen" component={HRScreen}
        options={{
            headerShown: false
        }}
        />

        {/* Employee Screen */}
        <Stack.Screen name="HREmployeeScreen" component={HREmployeeScreen}
        options={{
            headerShown: false
        }}
        />

    </Stack.Navigator>
  )
}

export default HRStackNav