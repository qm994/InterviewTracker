import React, {useState, useRef} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    KeyboardAvoidingView,
    Keyboard,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

import auth from '@react-native-firebase/auth';

/*
TODO:
1. Add validation for email and password
2. show error message if email or password is not valid
3. once succeed register, navigate to login screen
4. add loading indicator while registering
5. if rejister failed, show error message
*/

const RegisterScreen = ({navigation}: {navigation: NavigationProp<ParamListBase>}) => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [errortext, setErrortext] = useState('');

    const emailInputRef = useRef<null | HTMLElement>();
    const passwordInputRef = useRef<null>();
    const handleSubmitButton = () => {
        //setErrortext('');
        if (!userName) return;
        if (!userEmail) return;
        if (!userPassword) return;

        auth()
            .createUserWithEmailAndPassword(userEmail, userPassword)
            .then(user => {
                console.log('Registration Successful. Please Login to proceed');
                console.log({user});
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <SafeAreaView
            style={{
                flex: 1,
            }}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={styles.mainBodyContent}>
                {/* keyboardVerticalOffset will lift the view up by 80 when keyboard shows */}
                <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={80}>
                    <View style={styles.sectionStyle}>
                        <TextInput
                            mode="outlined"
                            onChangeText={UserName => setUserName(UserName)}
                            //underlineColorAndroid="#f000"
                            placeholder="Enter Name"
                            //placeholderTextColor="#8b9cb5"
                            autoCapitalize="words"
                            returnKeyType="next"
                            onSubmitEditing={() =>
                                emailInputRef.current && emailInputRef.current.focus()
                            }
                        />
                    </View>
                    <View style={styles.sectionStyle}>
                        <TextInput
                            mode="outlined"
                            onChangeText={UserEmail => setUserEmail(UserEmail)}
                            placeholder="Enter Email"
                            textContentType="emailAddress"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            ref={emailInputRef}
                            returnKeyType="next"
                            onSubmitEditing={() =>
                                passwordInputRef.current && passwordInputRef.current.focus()
                            }
                        />
                    </View>
                    <View style={styles.sectionStyle}>
                        <TextInput
                            mode="outlined"
                            onChangeText={UserPassword => setUserPassword(UserPassword)}
                            placeholder="Enter Password"
                            ref={passwordInputRef}
                            returnKeyType="next"
                            secureTextEntry={true}
                            onSubmitEditing={Keyboard.dismiss}
                            blurOnSubmit={false}
                        />
                    </View>
                    {errortext != '' ? (
                        <Text style={styles.errorTextStyle}> {errortext} </Text>
                    ) : null}
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        activeOpacity={0.5}
                        onPress={handleSubmitButton}>
                        <Text style={styles.buttonTextStyle}>REGISTER</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainBodyContent: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flex: 1,
    },
    sectionStyle: {
        width: '95%',
        alignSelf: 'center',
    },
    buttonStyle: {
        backgroundColor: '#7DE24E',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#7DE24E',
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 20,
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
    },
    errorTextStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
    },
});

export default RegisterScreen;
