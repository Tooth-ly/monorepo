import React, { useEffect, useRef, useState } from 'react'
import { View, Text, ScrollView, FlatList, Animated, Dimensions, Pressable } from 'react-native'
import styles from './styles'
import { Nav, Task } from '../../Types'
import { SafeAreaView } from 'react-native-safe-area-context'
import TaskScreenHeader from '../../components/TaskScreenHeader'
import TaskInfo from '../../components/TaskInfo'
import Redirect from '../../components/Redirect'

const padTo2Digits = (num: number) => {
    return num.toString().padStart(2, '0');
}
export const formatDate = (date: Date) => {
    return [
        padTo2Digits(date.getDate()),
        padTo2Digits(date.getMonth() + 1),
        date.getFullYear(),
    ].join('/');
}
export const formatAMPM = (date: Date) => {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var minutesS = ''
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    var minutesS = minutes < 10 ? '0'+minutes : ''+minutes;
    var strTime = hours + ':' + minutesS + '' + ampm + '  ' + formatDate(date);
    return strTime;
}

const HEADER_HEIGHT = 50

const TaskScreen = ({ navigation, route }: Nav) => {
    const task = route.params.task

    const [scrollAnim] = useState(new Animated.Value(0));
    const [offsetAnim] = useState(new Animated.Value(0));
    const [clampedScroll, setClampedScroll] = useState(Animated.diffClamp(
        Animated.add(
            scrollAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
                extrapolateLeft: 'clamp'
            }), offsetAnim
        ), 0, 1
    ));

    const navbarTranslate = clampedScroll.interpolate({
        inputRange: [0, HEADER_HEIGHT],
        outputRange: [0, -HEADER_HEIGHT],
        extrapolate: 'clamp'
    })

    const gotoEdit = () => {
        navigation.navigate('TaskEditScreen', { task })
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#F2F1F6' }}>
            {/* header */}
            <Animated.View style={[styles.header, {
                transform: [{translateY: navbarTranslate}]
            }]}
            onLayout={(event) => {
                let {height} = event.nativeEvent.layout;
                setClampedScroll(Animated.diffClamp(
                    Animated.add(
                        scrollAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 1],
                            extrapolateLeft: 'clamp'
                        }),
                        offsetAnim
                    ), 0, height)
                );
            }}
            >
                <TaskScreenHeader navigation={navigation} gotoEdit={gotoEdit} name={task.name} stage={task.stage}/>
            </Animated.View>

            {/* body */}
            <Animated.ScrollView
            bounces={false}
            onScroll={Animated.event(
                [ { nativeEvent: { contentOffset: { y: offsetAnim } } } ],
                { useNativeDriver: true }
            )}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            style={styles.scroll_view}
            contentContainerStyle={{ alignContent: 'center' }}
            >
                {/* Task Credentials */}
                <View style={{ height: HEADER_HEIGHT+60 }} ></View>
                <TaskInfo label='Objective' info={task.description}/>
                <TaskInfo label='status' info={task.stage.toString()}/>
                <TaskInfo label="deadline at" info={formatAMPM(task.date)}/>
                <TaskInfo label="Assignee Notes" info={task.assignee_notes}/>

                {/* Toothly Recommends */}
                <Text style={styles.tr_text}>Toothly Recommends</Text>
                <View style={styles.toothly_recommends}>
                    <Redirect text="Don't kill the patient. that will stop him from paying us visits. visits=money"/>
                    <Redirect text="Don't kill the patient. that will stop him from paying us visits. visits=money"/>
                    <Redirect text="Don't kill the patient. that will stop him from paying us visits. visits=money"/>
                </View>

            </Animated.ScrollView>

        </View>
    )
}

export default TaskScreen
