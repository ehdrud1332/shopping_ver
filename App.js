import React, {useState} from 'react';
import {Image} from 'react-native';
import * as Font from 'expo-font';
import {Asset} from 'expo-asset';
import {AppLoading} from 'expo';
import {Ionicons} from '@expo/vector-icons';

import Navigator from "./navigation/Navigator";

const cacheImages = images =>
    images.map(image => {
        if(typeof image === 'string') {
            return Image.prefetch(image);
        } else {
            return Asset.fromModule(image).downloadAsync();
        }
    });

const cacheFonts = fonts =>
    fonts.map(font => Font.loadAsync(font))

const App = () => {

    const [isReady, setIsReady] = useState(false);

    const loadAssets = async() => {
        const images = cacheImages([
            "https://images.unsplash.com/photo-1571847140471-1d7766e825ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=673&q=80",
            require("./assets/splash.png")
        ]);
        const fontsAssets = cacheFonts([Ionicons.font])
        await Promise.all([...images, ...fontsAssets])
    };

    const onFinish = () => setIsReady(true)

    return isReady ? (
        <Navigator />
    ) : (
        <AppLoading
            startAsync={loadAssets}
            onFinish={onFinish}
            onError={console.log}
        />
    )
};

export default App;
