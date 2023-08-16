import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {StyleSheet, useColorScheme, View} from 'react-native';
import {SafeAreaProvider, useSafeAreaInsets} from 'react-native-safe-area-context';
import BottomTabs from './components/BottomTabs';
import {
    PaperProvider,
    MD3DarkTheme,
    MD3LightTheme,
    adaptNavigationTheme,
    Text,
    Button,
} from 'react-native-paper';
import {
    NavigationContainer,
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthScreen from './pages/AuthScreen';

const Stack = createStackNavigator();

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
                    <Stack.Navigator>
                        <Stack.Screen
                            name="AuthScreen"
                            component={AuthScreen}
                            options={{headerShown: false}}
                        />
                        <Stack.Screen
                            name="HomeScreen"
                            component={BottomTabs}
                            options={{
                                headerShown: false,
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        </PaperProvider>
    );
}

export default App;
