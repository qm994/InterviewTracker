/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
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
import BottomTabs from './components/BottomTabs';

import {
    PaperProvider,
    MD3DarkTheme,
    MD3LightTheme,
    MD2DarkTheme,
    MD2LightTheme,
} from 'react-native-paper';

function App(): JSX.Element {
    const colorScheme = useColorScheme();

    const paperTheme = colorScheme === 'dark' ? MD3DarkTheme : MD3LightTheme;

    const [textInput, setTextInput] = useState<string>('');

    return (
        // SafeAreaView will hide bottom navigation bar
        // https://reactnavigation.org/docs/handling-safe-area/
        <PaperProvider theme={paperTheme}>
            <SafeAreaProvider>
                <BottomTabs />
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
