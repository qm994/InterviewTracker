import React, {useState} from 'react';
import {useColorScheme, StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';

export default function HomeAppHeader({
    toggleHeaderSearchBar,
}: {
    toggleHeaderSearchBar: () => void;
}) {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <Appbar.Header dark={isDarkMode}>
            <Appbar.Content title="10 interviews on track" mode="small" />
            <Appbar.Action icon="magnify" onPress={toggleHeaderSearchBar} />
            <Appbar.Action
                icon={'dots-vertical'}
                onPress={() => {
                    console.log('lol');
                }}
            />
        </Appbar.Header>
    );
}
