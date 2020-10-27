import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {MaterialCommunityIcons, Ionicons} from '@expo/vector-icons';
import {ScrollView, TextInput} from 'react-native-gesture-handler';

import {Block} from '../components';
import {theme} from '../constants';
import Couches from "../components/Couches";

const HomeScreen = ({navigation}) => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scroll}
        >
            <Block center row style={styles.container}>
                <View style={styles.half}>
                    <Text style={{fontWeight: '800', fontSize: 22}}>
                        Furniture
                    </Text>
                </View>
                <Block end style={styles.half}>
                    <Image
                        source={require('../assets/images/bag-2.png')}
                        style={{width: 16, height: 20}}
                    />
                </Block>
            </Block>
            <Block row center style={styles.container2}>
                <Block row center style={styles.textInput}>
                    <Ionicons
                        name='ios-search'
                        size={22}
                        color="#4f4a4a"
                    />
                    <TextInput
                        placeholder="Search unique furniture..."
                        style={styles.textInput2}
                    />
                </Block>
                <Image
                    source={require('../assets/images/sort.png')}
                    style={ {width: 18, height: 25, marginLeft: 6}}
                />
            </Block>

            <Block row center style={{width: '100%'}}>
                <Text style={styles.title2}>
                    Modern
                </Text>
                <View style={styles.dot}/>
                <Text style={styles.subtitle2}>
                    Good Quality items
                </Text>
            </Block>
            <ScrollView
                style={{marginTop: -20}}
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                <Couches
                    src={require('../assets/images/1.png')}
                    name="Beautiful Couches"
                    price="324.69"
                    desc="Full sleeves short dress with three attractive colors and"
                    onPress={() => navigation.navigate('DetailScreen')}
                />
                <Couches
                    src={require('../assets/images/2.png')}
                    name="Beautiful Couches"
                    price="212.32"
                    desc="Full sleeves short dress with three attractive colors and"
                    onPress={() => navigation.navigate('DetailScreen')}
                />
                <Couches
                    src={require('../assets/images/1.png')}
                    name="Beautiful Couches"
                    price="88.43"
                    desc="Full sleeves short dress with three attractive colors and"
                    onPress={() => navigation.navigate('DetailScreen')}
                />
            </ScrollView>

            
        </ScrollView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: '#fff',
        paddingHorizontal: 20
    },
    container: {
        width: '100%',
        marginTop: 60
    },
    half: {
        width: '50%'
    },
    container2: {
        width: '100%',
        marginVertical: 30,
        marginTop: 20
    },
    textInput: {
        elevation: 2,
        width: '85%',
        backgroundColor: '#cdcdcd',
        paddingHorizontal: 20,
        height: 35,
        borderRadius: 10,
        marginLeft: 1
    },
    textInput2: {
        fontWeight: '500',
        paddingHorizontal: 10,
        fontSize: 12
    },
    filter: {
        elevation: 2,
        width: '15%',
        backgroundColor: '#fff',
        marginLeft: 1,
        height: 35,
        borderRadius: 18
    },
    title2: {
        fontWeight: '800',
        fontSize: 18,
        color: theme.colors.gray
    },
    dot: {
        width: 5,
        height: 5,
        borderRadius: 5,
        marginHorizontal: 5,
        backgroundColor: theme.colors.gray,
    },
    subtitle2: {
        fontWeight: '600',
        fontSize: 11,
        color: theme.colors.gray
    }

})
