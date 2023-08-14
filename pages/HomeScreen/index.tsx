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

export default function HomeScreen() {
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
}
