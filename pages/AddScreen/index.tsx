import * as React from 'react';
import {AddScreensStack} from '../../pages/screens';
import {createStackNavigator} from '@react-navigation/stack';
import CompanySearchWithFlatList from './CompanySearchWithFlatList';
import AddInterview from './AddInterview';

const AddItemStack = createStackNavigator();

const AddScreenStack = () => {
    return (
        <AddItemStack.Navigator>
            <AddItemStack.Screen
                name={AddScreensStack.AddSubInterviewScreen}
                component={AddInterview}
                options={{
                    headerShown: false,
                    presentation: 'modal',
                }}
            />
            <AddItemStack.Screen
                name={AddScreensStack.AddSubCompanyScreen}
                component={CompanySearchWithFlatList}
                options={{
                    headerShown: false,
                }}
            />
        </AddItemStack.Navigator>
    );
};
export default AddScreenStack;
