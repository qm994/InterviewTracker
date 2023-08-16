import React, {useState, useCallback} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    TextInput,
} from 'react-native';
import HomeAppHeader from '../../components/HomeAppHeader';
import {SearchBar} from '../../components/SearchBar';
import InterviewsListHeader from './InterviewsListHeader';
import {useTheme} from 'react-native-paper';
import InterviewsList from './InterviewsList';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export function HomeScreenStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    // Once login, remove back button to auth screen
                    headerLeft: () => null,
                }}
            />
            <Stack.Screen name="Detail" component={InterviewDetailsScreen} />
        </Stack.Navigator>
    );
}

const InterviewDetailsScreen = () => {
    return (
        <View>
            <Text style={{fontSize: 32}}>Interview Detail screen</Text>
        </View>
    );
};

//TODO: Add redux to dispatch the navigation to each item

const HomeScreen = ({navigation}: {navigation: any}) => {
    const theme = useTheme();
    const [isSearchBarEnabled, setIsSearchBarEnabled] = useState<boolean>(false);

    const toggleHeaderSearchBar = useCallback(() => {
        setIsSearchBarEnabled(!isSearchBarEnabled);
    }, [isSearchBarEnabled]);

    // todo: build the list of interviews
    return (
        <SafeAreaView style={{backgroundColor: theme.colors.background, flex: 1}}>
            <HomeAppHeader toggleHeaderSearchBar={toggleHeaderSearchBar} />
            {isSearchBarEnabled ? <SearchBar /> : null}
            <InterviewsListHeader />
            <InterviewsList />
        </SafeAreaView>
    );
};
