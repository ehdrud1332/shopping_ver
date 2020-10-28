import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {Block} from '../components';

const SmallPoster = ({src}) => {
    return (
        <Block center middle style={styles.smallImage}>
            <Image
                source={src}
                style={{height: 80, width: 80}}
            />
        </Block>
    );
};

export default SmallPoster;

const styles = StyleSheet.create({
    smallImage: {
        backgroundColor: '$f5d6db',
        height: 80,
        width: 80,
        borderRadius: 25,
        marginRight: 20
    }
})