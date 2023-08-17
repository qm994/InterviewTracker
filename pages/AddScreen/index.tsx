import * as React from 'react';
import {Text} from 'react-native-paper';
import {AddScreensStack} from '../../pages/screens';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import AddCompany from './AddCompany';

const AddItemStack = createStackNavigator();

const AddInterview = () => {
    return (
        <SafeAreaView>
            <Text variant="headlineLarge">Add Interview Screen</Text>
        </SafeAreaView>
    );
};

const AddScreenStack = () => {
    return (
        <AddItemStack.Navigator>
            <AddItemStack.Screen
                name={AddScreensStack.AddSubInterviewScreen}
                component={AddInterview}
                options={{
                    headerShown: false,
                }}
            />
            <AddItemStack.Screen
                name={AddScreensStack.AddSubCompanyScreen}
                component={AddCompany}
                options={{
                    headerShown: false,
                }}
            />
        </AddItemStack.Navigator>
    );
};
export default AddScreenStack;
