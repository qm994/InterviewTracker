import * as React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import {HomeScreenStack} from '../../pages/HomeScreen';
import ProfileScreen from '../../pages/ProfileScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity, View, useColorScheme} from 'react-native';
import {
    useTheme,
    BottomNavigation,
    MD2DarkTheme,
    MD2LightTheme,
    Text,
    MD3DarkTheme,
    MD3LightTheme,
} from 'react-native-paper';
import AddItemModal from './AddItemModal';
import {SignedInScreensTab} from '../../pages/screens';

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
                    //tabBarIcon: AddItemIcon,
                    tabBarButton: props => <AddItemModal {...props} />,
                }}
                component={AddItemMenu}
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

const AddItemMenu = () => {
    return (
        <View>
            <Text>Add a new interview</Text>
        </View>
    );
};
