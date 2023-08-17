import React, {useState, useEffect} from 'react';
import {SafeAreaView, ActivityIndicator, Text, View, StyleSheet, Image} from 'react-native';
import {StackActions, NavigationProp, ParamListBase} from '@react-navigation/native';
import {MainScreens} from '../screens';
import auth from '@react-native-firebase/auth';

const SplashScreen = ({navigation}: {navigation: NavigationProp<ParamListBase>}) => {
    //State for ActivityIndicator animation
    const [animating, setAnimating] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setAnimating(false);
            // Check if currentUser is set or not
            // If not then send for Sign in screen
            // else send to Home Screen
            const currentUser = auth().currentUser;
            const replacedScreen = currentUser
                ? MainScreens.SignedInScreen
                : MainScreens.AuthScreen;

            navigation.dispatch(
                StackActions.replace(replacedScreen, {
                    currentUser: currentUser,
                }),
            );
        }, 3000);
    }, [navigation]);

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#307ecc'}}>
            <View style={styles.container}>
                <ActivityIndicator
                    animating={animating}
                    color="#FFFFFF"
                    size="large"
                    style={styles.activityIndicator}
                />
            </View>
            <Text
                style={{
                    fontSize: 18,
                    textAlign: 'center',
                    color: 'white',
                }}>
                Built for the people of the world
            </Text>
        </SafeAreaView>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    activityIndicator: {
        alignItems: 'center',
        height: 80,
    },
});
