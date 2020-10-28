import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Swiper from 'react-native-swiper';

const SwiperComponent = () => {
    return (
        <Swiper
            dotStyle={{
                backgroundColor: '#000',
                borderColor: '#000',
                borderWidth: 1,
                width: 6,
                height: 6,
                borderRadius: 6
            }}
            activeDotColor="#fff"
            activeDotStyle={{
                borderColor: '#000',
                borderWidth: 1,
                width: 6,
                height: 6,
                borderRadius: 6
            }}
        >
            <View style={styles.slide}>
                <Image
                    source={require('../assets/images/unnamed.png')}
                    style={{height: 300, width: 300}}
                />
            </View>
            <View style={styles.slide}>
                <Image
                    source={require('../assets/images/unnamed.png')}
                    style={{height: 300, width: 300}}
                />
            </View>
            <View style={styles.slide}>
                <Image
                    source={require('../assets/images/unnamed.png')}
                    style={{height: 300, width: 300}}
                />
            </View>
        </Swiper>
    );
};

export default SwiperComponent;

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
})
