import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';
import {MaterialCommunityIcons, Ionicons} from '@expo/vector-icons';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import Stars from 'react-native-stars';

import SwiperComponent from "../components/SwiperComponent";
import {theme} from '../constants';
import {Block} from '../components';

const DetailScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Block flex={false} row marginTop={50} style={{width: '100%'}}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{width: '50%'}}
                >
                    <Image
                        source={require('../assets/images/back.png')}
                        style={{width:15, height: 15}}
                    />
                </TouchableOpacity>
                <Block end style={{width: '50%'}}>
                    <Image
                        source={require('../assets/images/bag-2.png')}
                        style={{width: 16, height: 20}}
                    />
                </Block>
            </Block>

            <Block flex={false} row style={{height: 340, width: '100%'}}>
                <View style={{marginTop: 150}}>
                    <View style={styles.dot}/>
                    <View style={styles.dot2}/>
                    <View style={styles.dot3}/>
                </View>

                <SwiperComponent />
            </Block>

            <Block flex={false} end style={{width: '100%'}}>
                <Image
                    source={require('../assets/images/save.png')}
                    style={styles.saveImage}
                />
            </Block>

            <View style={styles.detailContainer}>
                <View style={{width: '65%'}}>
                    <Text style={styles.miniTitle}>
                        Autobe Best Chair
                    </Text>
                </View>
                <View style={{width: '35%'}}>
                    <Text style={styles.rating}>
                        Customers Rating
                    </Text>
                    <Block flex={false} center row>
                        <Stars
                            default={4}
                            count={5}
                            half={true}
                            starSize={20}
                            fullStar={<MaterialCommunityIcons name='star'/>}
                            emptyStar={<MaterialCommunityIcons name='star-outline'/>}
                            halfStar={<MaterialCommunityIcons name='star-half'/>}
                        />
                    </Block>
                </View>
            </View>
        </View>
    );
};

export default DetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white,
        paddingHorizontal: 20
    },
    dot: {
        backgroundColor: '#3d3a42',
        height: 25,
        width: 25,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: theme.colors.white,
        elevation: 5
    },
    dot2: {
        backgroundColor: '#707070',
        height: 25,
        width: 25,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: theme.colors.white,
        elevation: 5,
        marginVertical: 10
    },
    dot3: {
        backgroundColor: '#b3b4b9',
        height: 25,
        width: 25,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: theme.colors.white,
        elevation: 5,
    },
    saveImage: {
        marginTop: -45,
        width: 15,
        height: 20
    },
    detailContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        width: '100%'
    },
    miniTitle: {
        fontWeight: '800',
        fontSize: 18,
        color: theme.colors.black
    },
    rating: {
        fontWeight: '700',
        fontSize: 10,
        color: theme.colors.black
    }
})