import * as React from 'react';
import {TouchableHighlight} from 'react-native';
import {Button} from 'react-native-paper';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {MainScreens} from '../../pages/screens';
import auth from '@react-native-firebase/auth';

export default function ProfileScreen({navigation}: {navigation: NavigationProp<ParamListBase>}) {
    const onPressSignOut = () => {
        navigation.navigate(MainScreens.AuthScreen);
        // auth()
        //     .signOut()
        //     .then(() => {
        //         navigation.navigate(MainScreens.AuthScreen);
        //     })
        //     .catch(error => {
        //         console.log('Error signing out:', error);
        //     });
    };
    return (
        <TouchableHighlight style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Button mode="contained" onPress={onPressSignOut}>
                Sign out
            </Button>
        </TouchableHighlight>
    );
}
