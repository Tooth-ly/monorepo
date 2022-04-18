import { View, Text } from 'react-native'
import React from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import PFilesScreen from '../screens/PFilesScreen'
import PServicesScreen from '../screens/PServicesScreen'
import TaskScreen from '../screens/TaskScreen'
import TaskEditScreen from '../screens/TaskEditScreen'
import TaskListScreen from '../screens/TaskListScreen'

const Stack = createStackNavigator()

const PFileStackNav = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      gestureEnabled: false,
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

        {/* Task Screen */}
        <Stack.Screen name="TaskScreen" component={TaskScreen}
        options={{
            headerShown: false
        }}
        />

        {/* Task Edit Screen */}
        <Stack.Screen name="TaskEditScreen" component={TaskEditScreen}
        options={{
            headerShown: false
        }}
        />

        {/* Task List Screen */}
        <Stack.Screen name="TaskListScreen" component={TaskListScreen}
        options={{
            headerShown: false
        }}
        />

    </Stack.Navigator>
  )
}

export default PFileStackNav