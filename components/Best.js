import React from 'react';
import {ImageBackground, Text, StyleSheet} from 'react-native';

import {theme} from '../constants';

const Best = ({src, title, option}) => {
    return (
        <ImageBackground
            source={src}
            style={styles.imageBG}
        >
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.optionsTitle}>
                {option}
            </Text>
        </ImageBackground>
    );
};

export default Best;

const styles = StyleSheet.create({
    imageBG: {
        height: 130,
        width: 230,
        marginRight: 20,
        borderRadius: 10,
        marginBottom: 40,
        opacity: 0.7,
        backgroundColor: theme.colors.white,
        marginLeft: 3,
        padding: 12,
        marginTop: 20
    },
    title: {
        fontWeight: '600',
        color: theme.colors.black,
        fontSize: 15
    },
    optionsTitle: {
        fontWeight: '600',
        color: theme.colors.black,
        fontSize: 12
    }
})
