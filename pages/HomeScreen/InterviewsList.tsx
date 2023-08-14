import React from 'react';
import {SafeAreaView, View, VirtualizedList, StyleSheet, Text, StatusBar} from 'react-native';
import {useTheme, Avatar} from 'react-native-paper';

const data = Array.from(Array(4).keys()).map(index => ({
    id: index,
    title: `Item ${index + 1}`,
    company: 'Google',
    status: 'In Progress',
    startDate: '2021-01-01',
    endDate: '2022-01-01',
    image: 'https://picsum.photos/700',
}));

type ItemProps = {
    title: string;
    company: string;
    status: string;
    startDate: string;
    endDate: string;
    image: string;
};

type ItemData = {
    id: string;
    title: string;
    company: string;
    status: string;
    startDate: string;
    endDate: string;
    image: string;
};

const getItem = (_data: ItemProps, index: number): ItemData => ({
    id: Math.random().toString(12).substring(0),
    title: `Item ${index + 1}`,
    company: 'Google',
    status: 'In Progress',
    startDate: `2021-01-${index + 1}`,
    endDate: '2022-01-01',
    image: 'https://picsum.photos/700',
});

const getItemCount = (_data: ItemProps[]) => _data.length;

const renderItem = ({item}: {item: ItemData}) => {
    return <Item item={item} />;
};

const InterviewsList = () => {
    const theme = useTheme();
    return (
        <View style={styles.container}>
            <VirtualizedList
                data={data}
                initialNumToRender={4}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                getItemCount={getItemCount}
                getItem={getItem}
            />
        </View>
    );
};

const Item = ({item}: {item: ItemData}) => {
    const {title, company, status, startDate, endDate, image} = item;
    return (
        <View style={styles.item}>
            {/* <Avatar.Image size={24} source={image as any} /> */}
            <Text style={styles.title}>{title}</Text>
            <Text>{company}</Text>
            <Text>{status}</Text>
            <Text>{startDate}</Text>
            <Text>{endDate}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //marginTop: StatusBar.currentHeight,
    },
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

export default InterviewsList;
