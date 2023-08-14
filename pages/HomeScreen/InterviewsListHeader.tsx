import React, {useState} from 'react';
import {View, ScrollView, StyleSheet, useColorScheme} from 'react-native';
import {Divider, Text, Button, Menu} from 'react-native-paper';

export default function InterviewsListHeader() {
    const isDarkMode = useColorScheme() === 'dark';

    const [visible, setVisible] = useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);

    /**
     *
     * TODO: finish logic all buttons
     */
    return (
        <View style={styles.sectionTitle}>
            <View>
                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={
                        <Button icon="arrow-down" onPress={openMenu} dark={isDarkMode}>
                            Most recent
                        </Button>
                    }>
                    <Menu.Item onPress={() => {}} title="Item 1" />
                    <Menu.Item onPress={() => {}} title="Item 2" />
                    <Divider />
                    <Menu.Item onPress={() => {}} title="Item 3" />
                </Menu>
            </View>
            <View style={styles.buttonGroups}>
                <Button icon="content-save-edit" onPress={() => {}} dark={isDarkMode}>
                    Manage
                </Button>
                <Button icon="filter" onPress={() => {}} dark={isDarkMode}>
                    Filter
                </Button>
            </View>
            <Divider horizontalInset={true} bold={true} />
        </View>
    );
}

const styles = StyleSheet.create({
    sectionTitle: {
        paddingTop: 16,
        paddingLeft: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'nowrap',
    },
    buttonGroups: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
});
