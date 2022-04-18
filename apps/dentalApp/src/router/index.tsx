import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNav from './BottomTabNav';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PFileStackNav from './PFileStackNav';
import HRStackNav from './HRStackNav';
import KBStackNav from './KBStackNav';

import IconPF from 'react-native-vector-icons/Ionicons'
import IconHR from 'react-native-vector-icons/Feather'
import IconKB from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator()

const Router = () => {
    return (
        <NavigationContainer>

            <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: {fontSize: 18},
                tabBarActiveTintColor: 'cyan',
                tabBarStyle: { backgroundColor: '#e9f9fc' }
            }}
            >
                <Tab.Screen
                name="PFiles"
                component={PFileStackNav}
                options={{
                    headerShown: false,
                    tabBarIcon: (({color}) => <IconPF name="file-tray-full-outline" color={color} size={25} />)
                }}
                />
                <Tab.Screen
                name="HR"
                component={HRStackNav}
                options={{
                    headerShown: false,
                    tabBarIcon: (({color}) => <IconHR name="users" color={color} size={25} />)
                }}
                />
                <Tab.Screen
                name="Knowledge"
                component={KBStackNav}
                options={{
                    headerShown: false,
                    tabBarIcon: (({color}) => <IconKB name="brain" color={color} size={25} />)
                }}
                />
            </Tab.Navigator>

        </NavigationContainer>
    )
}

export default Router
