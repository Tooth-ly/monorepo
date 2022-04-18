import React, { useEffect, useRef, useState } from 'react'
import { View, Text, ScrollView, FlatList, Animated, Dimensions, Pressable } from 'react-native'
import ServiceCart from '../../components/ServiceCart'
import styles from './styles'
import { Nav, Service, Static_Service } from '../../Types'
import PServicesHeader from '../../components/PServicesHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import IconBack from 'react-native-vector-icons/AntDesign'

const HEADER_HEIGHT = 135

const PServicesScreen = ({navigation, route}: Nav) => {
    const cred = route.params.cred
    const Services = route.params.services

    const [text, setText] = useState('')
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


    const renderList = ({item}) => {
        return (
            <ServiceCart navigation={navigation} service={item} />
        )
    }

    return (
        <View style={{ flex: 1 }}>
            {/* header */}
            <Animated.View
            style={[styles.header, {
                transform: [{ translateY: navbarTranslate }]
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
                <PServicesHeader text={text} setText={setText} navigation={navigation} name={cred.name} profile_pic={cred.profile_pic}/>
            </Animated.View>

            {/* list of services */}
            <Animated.ScrollView
            bounces={false}
            scrollEventThrottle={16}
            onScroll={Animated.event(
            [
                {
                nativeEvent: {
                    contentOffset: { y: scrollAnim }
                }
                }
            ],
            { useNativeDriver: true }
            )}
            style={styles.scroll_view}
            showsVerticalScrollIndicator={false}
            >
                <View style={{ height: 200 }}></View>
                {
                    Services.map((service, index) => (
                        service.service.name.toLowerCase().includes(text.toLowerCase()) &&
                        <View style={{}}><ServiceCart navigation={navigation} key={index} service={service} /></View>
                    ))
                }
            </Animated.ScrollView>
            {/* <Animated.FlatList 
                contentInset={{ top: HEADER_HEIGHT }}
                contentOffset={{ x: 0, y: -HEADER_HEIGHT }}
                bounces={false}
                scrollEventThrottle={16}
                style={{ flexGrow: 1, width: '100%' }}
                data={Services}
                renderItem={renderList}
                onScroll={Animated.event(
                [
                    {
                    nativeEvent: {
                        contentOffset: { y: scrollAnim }
                    }
                    }
                ],
                { useNativeDriver: true }
                )}
            /> */}

        </View>
    )
}

export default PServicesScreen
