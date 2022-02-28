import React, { useEffect, useRef, useState } from 'react'
import { View, Text, ScrollView, FlatList, Animated, Dimensions } from 'react-native'
import ServiceCart from '../../components/ServiceCart'
import styles from './styles'
import Services from '../../data/Services'
import { Nav } from '../../Types'
import PServicesHeader from '../../components/PServicesHeader'
import { SafeAreaView } from 'react-native-safe-area-context'

const HEADER_HEIGHT = 107

const PServicesScreen = ({navigation, route}: Nav) => {
    const cred = route.params.cred

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

    return (
        <SafeAreaView style={{ flex: 1 }}>
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
                <PServicesHeader navigation={navigation} name={cred.name} profile_pic={cred.profile_pic}/>
            </Animated.View>

            {/* list of services */}
            <Animated.ScrollView
            // contentInset={{ top: HEADER_HEIGHT }}
            // contentOffset={{ x: 0, y: -HEADER_HEIGHT }}
            bounces={false}
            onScroll={Animated.event(
                [ { nativeEvent: { contentOffset: { y: offsetAnim } } } ],
                { useNativeDriver: true }
            )}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            style={styles.scroll_view}
            >
                <View style={{ height: HEADER_HEIGHT+81 }} ></View>
                {
                    Services.map( service => (
                        <ServiceCart key={service.id} service={service} />
                    ))
                }
            </Animated.ScrollView>

        </SafeAreaView>
    )
}

export default PServicesScreen
