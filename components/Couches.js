import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {theme} from '../constants';
import {Block} from '../components';

const Couches = ({onPress, src, name, desc, price}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.container}
        >
            <Image
                source={src}
                style={{width: 170, height: 110, borderRadius: 10}}
            />
            <Block row center style={{marginVertical: 10}}>
                <Text style={styles.title}>
                    {name}
                </Text>
                <View style={styles.dot}/>
                <Text style={styles.new}>
                    New
                </Text>
            </Block>
            <Text style={styles.descTitle}>
                {desc}
            </Text>

            <Block row center style={styles.priceBox}>
                <View styles={{fontSize: 15, fontWeight: '600'}}>
                    <Text>${price}</Text>
                </View>
                <View style={{width: '20%'}}>
                    <Image
                        source={require('../assets/images/add.png')}
                        style={styles.addImage}
                    />
                </View>
            </Block>
        </TouchableOpacity>
    );
};

export default Couches;

const styles = StyleSheet.create({

    container: {
        marginTop: 30,
        backgroundColor: theme.colors.white,
        height: 250,
        width: 200,
        elevation: 2,
        borderRadius: 18,
        padding: 15,
        marginRight: 30,
        marginLeft: 2,
        marginBottom: 5
    },
    title: {
        fontWeight: '600',
        color: theme.colors.gray,
        fontSize: 12
    },
    dot: {
        height: 4,
        width: 4,
        borderRadius: 4,
        backgroundColor: theme.colors.accent,
        marginHorizontal: 4
    },
    new: {
        color: theme.colors.accent,
        fontSize: 10,
        fontWeight: '600'
    },
    descTitle: {
        fontSize: 10,
        color: theme.colors.gray,
        fontWeight: '600'
    },
    priceBox: {
        marginTop: 5,
        width: '100%'
    },
    addImage: {
        alignSelf: 'flex-end',
        width: 25,
        height: 25
    }
})
