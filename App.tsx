import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {StyleSheet, useColorScheme} from 'react-native';
import {SafeAreaProvider, useSafeAreaInsets} from 'react-native-safe-area-context';
import BottomTabs from './components/BottomTabs';
import {PaperProvider, MD3DarkTheme, MD3LightTheme, adaptNavigationTheme} from 'react-native-paper';
import {
    NavigationContainer,
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';

import HomeScreen from './pages/HomeScreen';
import ProfileScreen from './pages/ProfileScreen';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    );
}

function App(): JSX.Element {
    const colorScheme = useColorScheme();
    const paperTheme = colorScheme === 'dark' ? MD3DarkTheme : MD3LightTheme;
    //adapting React Navigation theme colors, to use the ones from React Native Paper,
    //https://callstack.github.io/react-native-paper/docs/guides/theming-with-react-navigation/
    const {LightTheme, DarkTheme} = adaptNavigationTheme({
        reactNavigationLight: NavigationDefaultTheme,
        reactNavigationDark: NavigationDarkTheme,
    });

    return (
        // SafeAreaView will hide bottom navigation bar
        // https://reactnavigation.org/docs/handling-safe-area/
        <PaperProvider theme={paperTheme}>
            <SafeAreaProvider>
                <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : LightTheme}>
                    {/* <MyStack /> */}
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
