/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    TextInput,
} from 'react-native';
import {SafeAreaProvider, useSafeAreaInsets} from 'react-native-safe-area-context';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import BottomTabs from './pages/BottomTabs';
import {NavigationContainer} from '@react-navigation/native';
import {PaperProvider} from 'react-native-paper';

function App(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    const [textInput, setTextInput] = useState<string>('');

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        // SafeAreaView will hide bottom navigation bar
        // https://reactnavigation.org/docs/handling-safe-area/
        <PaperProvider>
            <SafeAreaProvider>
                <NavigationContainer>
                    <BottomTabs />
                </NavigationContainer>
            </SafeAreaProvider>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default App;
