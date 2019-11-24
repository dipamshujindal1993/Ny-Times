/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import store from './src/store';
import {colors} from './src/utils/colors';
import AppNavigation from './src/navigation/AppNavigator';

const App: () => React$Node = () => {
    return (
        <>
            <StatusBar backgroundColor={colors.primary} barStyle='light-content'/>
            <SafeAreaView style={{backgroundColor: colors.primary}}/>

            <Provider store={store()}>
                <AppNavigation/>
            </Provider>
        </>
    );
};


export default App;
