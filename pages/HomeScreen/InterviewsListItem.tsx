import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ItemData} from './InterviewsList';
import {useNavigation, NavigationProp, ParamListBase} from '@react-navigation/native';

const InterviewsListItem = ({item}: {item: ItemData}) => {
    const navigation = useNavigation<NavigationProp<ParamListBase>>();

    const {title, company, status, startDate, endDate, image} = item;
    const onTab = () => {
        navigation.navigate('Detail');
    };
    return (
        <TouchableOpacity style={styles.item} onPress={onTab} activeOpacity={0.8}>
            <Text style={styles.title}>{title}</Text>
            <Text>{company}</Text>
            <Text>{status}</Text>
            <Text>{startDate}</Text>
            <Text>{endDate}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        height: 100,
        marginVertical: 0.5,
        marginHorizontal: 16,
        padding: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 32,
    },
});

export default InterviewsListItem;
