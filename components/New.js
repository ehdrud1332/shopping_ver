import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

import Block from './Block';
import {theme} from '../constants';

const New = ({src, desc, price}) => {
    return (
        <Block row style={styles.container}>
            <View>
                <Image
                    source={src}
                    style={{height: 60, width: 60, borderRadius: 10}}
                />
            </View>

            <Block left style={styles.descTitle}>
                <Text style={{
                    fontSize: 9, fontWeight: '600'
                }}>
                    {desc}
                </Text>
                <Text style={{fontSize: 10, fontWeight: '600'}}>
                    ${price}
                </Text>
            </Block>

            <Block left style={{width: '5%', height: '100%'}}>
                <Image
                    source={require('../assets/images/add.png')}
                    style={{height: 17, width: 17}}
                />
            </Block>
        </Block>
    );
};

export default New;

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: 240,
        backgroundColor: theme.colors.white,
        elevation: 2,
        padding: 6,
        marginVertical: 5,
        marginRight: -10,
        marginLeft: 2,
        borderRadius: 10
    },
    descTitle: {
        width: '65%',
        paddingHorizontal: 10,
        height: '100%'
    }
})
