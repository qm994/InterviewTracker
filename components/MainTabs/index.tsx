import * as React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {HomeScreenStack} from '../../pages/HomeScreen';
import ProfileScreen from '../../pages/ProfileScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AddItemModal from './AddItemModal';
import {SignedInScreensTab} from '../../pages/screens';

import AddScreenStack from '../../pages/AddScreen';

const Tab = createBottomTabNavigator();

//TODO: Create a huge add button in the middle of the bottom tab bar used to add item
export default function MainTabs() {
    return (
        <Tab.Navigator initialRouteName={SignedInScreensTab.HomeScreen}>
            <Tab.Screen
                name={SignedInScreensTab.HomeScreen}
                component={HomeScreenStack}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
                }}
            />
            <Tab.Screen
                name={SignedInScreensTab.AddScreen}
                options={{
                    tabBarLabel: '',
                    tabBarButton: props => <AddItemModal {...props} />,
                }}
                component={AddScreenStack}
            />

            <Tab.Screen
                name={SignedInScreensTab.ProfileScreen}
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({color}) => <Icon name="profile" color={color} size={26} />,
                }}
            />
        </Tab.Navigator>
    );
}
