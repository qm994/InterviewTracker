/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import {StyleSheet, ScrollView, View, SafeAreaView, Alert} from 'react-native';

import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {Text, Button, TextInput} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';

/*
TODO:
1. Add alert for missing email or password
2. handle success login move to home screen or error login show error message
3. Register should move to register screen
*/
const LoginScreen = ({navigation}: {navigation: NavigationProp<ParamListBase>}) => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [hidePassword, setHidePassword] = useState(true);

    const handleSubmitPress = () => {
        if (!userEmail) {
            return;
        }
        if (!userPassword) {
            return;
        }
        auth()
            .signInWithEmailAndPassword(userEmail, userPassword)
            .then(user => {
                console.log('log in user is: \n', {user});
                // If server response message same as Data Matched
                //if (user) navigation.replace('HomeScreen');
            })
            .catch(error => {
                console.log('login error is: \n', error);
            });
    };

    return (
        <SafeAreaView style={styles.mainBody}>
            <ScrollView
                //https://medium.com/react-native-training/todays-react-native-tip-keyboard-issues-in-scrollview-8cfbeb92995b
                // fix button need double click issue which caused by the tab keyboard
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={styles.mainBodyContent}>
                <Text
                    variant="headlineMedium"
                    style={{
                        textAlign: 'center',
                    }}>
                    Log in
                </Text>
                <View style={{width: '95%', alignSelf: 'center'}}>
                    <TextInput
                        value={userEmail}
                        onChangeText={text => setUserEmail(text)}
                        // these props used to disable the auto first letter capitalization
                        textContentType="emailAddress"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        //
                        mode="outlined"
                        label="Email"
                        placeholder="Email..."
                        right={<TextInput.Affix text="/100" />}
                        // onSubmitEditing={() => {
                        //     console.log('onSubmitEditing called');
                        // }}
                    />
                    <TextInput
                        value={userPassword}
                        onChangeText={text => setUserPassword(text)}
                        autoCapitalize="none"
                        mode="outlined"
                        label="Password"
                        secureTextEntry={hidePassword}
                        right={
                            <TextInput.Icon
                                icon={props => (
                                    <Ionicons
                                        name={hidePassword ? 'eye' : 'eye-off'}
                                        size={props.size}
                                        color={props.color}
                                    />
                                )}
                                onPress={() => setHidePassword(!hidePassword)}
                            />
                        }
                    />
                    <Button
                        onPressIn={() => console.log('lol')}
                        mode="contained"
                        style={styles.buttonStyle}
                        onPress={() => handleSubmitPress()}>
                        Login
                    </Button>

                    <Button
                        onPressIn={() => navigation.navigate('RegisterScreen')}
                        mode="contained"
                        style={styles.buttonStyle}
                        //onPress={() => navigation.navigate('HomeScreen')}
                    >
                        Register
                    </Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    mainBodyContent: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
    },
    sectionStyle: {
        flexDirection: 'row',
        height: 40,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
    },
    buttonStyle: {marginTop: 20, width: '50%', alignSelf: 'center'},
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
    },
    inputStyle: {
        flex: 1,
        color: 'white',
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#dadae8',
    },
    registerTextStyle: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        alignSelf: 'center',
        padding: 10,
    },
    errorTextStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
    },
});

export default LoginScreen;
