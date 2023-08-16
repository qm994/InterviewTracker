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
    NavigationProp,
    ParamListBase,
} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import LoginScreen from './pages/AuthScreen/LoginScreen';

const Stack = createStackNavigator();

const RegisterScreen = () => {
    return (
        <SafeAreaView>
            <Text variant="titleLarge">RegisterScreen</Text>
        </SafeAreaView>
    );
};

const Auth = () => {
    // Stack Navigator for Login and Sign up Screen
    return (
        <Stack.Navigator initialRouteName="LoginScreen">
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="RegisterScreen"
                component={RegisterScreen}
                options={{
                    title: 'Register', //Set Header Title
                    headerStyle: {
                        backgroundColor: '#307ecc', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            />
        </Stack.Navigator>
    );
};

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
                        <Stack.Screen name="Auth" component={Auth} options={{headerShown: false}} />
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
