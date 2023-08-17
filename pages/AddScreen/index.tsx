import * as React from 'react';
import {Text} from 'react-native-paper';
import {AddScreensStack} from '../../pages/screens';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native-safe-area-context';

const AddItemStack = createStackNavigator();

const AddInterview = () => {
    return (
        <SafeAreaView>
            <Text variant="headlineLarge">Add Interview Screen</Text>
        </SafeAreaView>
    );
};

const AddCompany = () => {
    return (
        <SafeAreaView>
            <Text variant="headlineLarge">Add Company Screen</Text>
        </SafeAreaView>
    );
};

const AddScreenStack = () => {
    return (
        <AddItemStack.Navigator>
            <AddItemStack.Screen
                name={AddScreensStack.AddSubInterviewScreen}
                component={AddInterview}
            />
            <AddItemStack.Screen
                name={AddScreensStack.AddSubCompanyScreen}
                component={AddCompany}
            />
        </AddItemStack.Navigator>
    );
};
export default AddScreenStack;
