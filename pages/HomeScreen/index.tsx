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

export default function HomeScreen() {
    const [isSearchBarEnabled, setIsSearchBarEnabled] = useState<boolean>(false);

    const toggleHeaderSearchBar = useCallback(() => {
        setIsSearchBarEnabled(!isSearchBarEnabled);
    }, [isSearchBarEnabled]);

    return (
        <View>
            <HomeAppHeader toggleHeaderSearchBar={toggleHeaderSearchBar} />
            {isSearchBarEnabled ? <SearchBar /> : null}
            <Text>Home!</Text>
        </View>
    );
}
