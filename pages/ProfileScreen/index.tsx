import * as React from 'react';
import {View} from 'react-native';
import {Text, Button} from 'react-native-paper';

export default function ProfileScreen({navigation}: {navigation: any}) {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Settings!</Text>
            <Button onPress={() => navigation.navigate('Auth')}>Sign out</Button>
        </View>
    );
}
