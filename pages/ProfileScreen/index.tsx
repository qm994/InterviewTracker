import * as React from 'react';
import {View, TouchableHighlight} from 'react-native';
import {Text, Button} from 'react-native-paper';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

import auth from '@react-native-firebase/auth';

export default function ProfileScreen({navigation}: {navigation: NavigationProp<ParamListBase>}) {
    const onPressSignOut = () => {
        auth()
            .signOut()
            .then(() => {
                navigation.navigate('AuthScreen');
            })
            .catch(error => {
                console.log('Error signing out:', error);
            });
    };
    return (
        <TouchableHighlight style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Button mode="contained" onPress={onPressSignOut}>
                Sign out
            </Button>
        </TouchableHighlight>
    );
}
