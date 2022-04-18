/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import changeNavigationBarColor, {
  hideNavigationBar,
  showNavigationBar,
} from 'react-native-navigation-bar-color';
import FileCart from './src/components/FileCart';
import ServiceCart from './src/components/ServiceCart';
import Router from './src/router';

import HomeScreen from './src/screens/HomeScreen';
import PServicesHeader from './src/components/PServicesHeader';
import Services from './src/data/Services'
import TaskScreenHeader from './src/components/TaskScreenHeader';
import TaskInfo from './src/components/TaskInfo';
import TaskScreen from './src/screens/TaskScreen';
import Redirect from './src/components/Redirect';
import TaskEditScreen from './src/screens/TaskEditScreen';
import TaskListScreen from './src/screens/TaskListScreen';
import TaskListHeader from './src/components/TakListHeader';
import TaskListTableHeader from './src/components/TaskListTableHeader';
import TaskListCart from './src/components/TaskListTableCart';
import MyDatePicker from './src/components/MyDatePicker';
import TestPicker from './src/tests/TestPicker';
import PickerWithModalTest from './src/tests/PickerWithModalTest';
import SegmentedControlTest from './src/tests/SegmentControlTest';

const Section: React.FC<{
  title: string;
}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const changeNavBarColor =async () => {
    try {
      const response = await changeNavigationBarColor('#e9f9fc');
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    changeNavBarColor()
  }, []);


  return (
    <Router />
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
