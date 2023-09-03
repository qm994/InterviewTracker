import React, {useState, useRef, useEffect} from 'react';
import {Text, TextInput, Avatar, Divider, useTheme} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList, View, TouchableHighlight, StyleSheet, Dimensions} from 'react-native';
import axios from 'axios';
import {debounce} from 'lodash';

const companySuggestBaseUrl = 'https://autocomplete.clearbit.com/v1/companies/suggest';

type CompanyDataType = {
    domain: string;
    logo: string;
    name: string;
    id?: number;
};

const CompanySearchWithFlatList = () => {
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState<CompanyDataType[] | []>([]);

    useEffect(() => {
        if (inputValue === '') {
            setSuggestions([]);
        }
    }, [inputValue]);

    const fetchData = (query: string) => {
        axios
            .get(companySuggestBaseUrl, {
                params: {
                    query: query,
                },
                auth: {
                    username: 'sk_15064f80877e12777f814e58d3200a67',
                },
            })
            .then(response => {
                // Handle the response data

                const data = response.data.map((data: CompanyDataType, index: number) => ({
                    ...data,
                    id: index,
                }));
                console.log({data});
                setSuggestions(data);
            })
            .catch(error => {
                // Handle errors
                console.error('An error occurred:', error);
            });
    };

    const debouncedFetch = useRef(debounce(fetchData, 1000, {leading: true}));

    const handleInputChange = async (text: string) => {
        setInputValue(text);
        if (text.length) debouncedFetch.current(text);
        else setSuggestions([]);
    };

    const handleSuggestionPress = selectedCompany => {
        setInputValue(selectedCompany);
        setSuggestions([]);
    };

    return (
        <SafeAreaView style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={{width: '95%', alignSelf: 'center'}}>
                <TextInput
                    value={inputValue}
                    onChangeText={handleInputChange}
                    placeholder="Search the company name..."
                    mode="outlined"
                />
            </View>

            <FlatList
                style={styles.flatContainerStyle}
                contentContainerStyle={{justifyContent: 'flex-start'}}
                data={suggestions}
                renderItem={({item, separators}) => (
                    <Item item={item} separators={separators} itemOnPress={handleSuggestionPress} />
                )}
                keyExtractor={item => String(item.id)}
                ItemSeparatorComponent={() => <Divider bold={true} />}
            />
        </SafeAreaView>
    );
};

type ItemProps = {
    item: CompanyDataType;
    separators: any;
    itemOnPress: (value: string) => void;
};

const Item = ({item, separators, itemOnPress}: ItemProps) => {
    const screenWidth = Dimensions.get('window').width;
    const theme = useTheme();
    return (
        <TouchableHighlight
            // 120 is flatItemStyle width and 25 is avatar size
            hitSlop={{left: 15, right: screenWidth - 120 - 25}}
            key={item.id}
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}
            onPress={() => itemOnPress(item.name)}
            underlayColor={theme.colors.primary}>
            <View style={styles.flatItemStyle}>
                <Avatar.Image size={25} source={{uri: item.logo}} />
                <Text style={{marginLeft: 10, width: '100%'}}>{item.name}</Text>
            </View>
        </TouchableHighlight>
    );
};
const styles = StyleSheet.create({
    flatContainerStyle: {width: '90%', marginTop: 10},
    flatItemStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexWrap: 'nowrap',
        height: 30,
        width: '100%',
    },
});

export default CompanySearchWithFlatList;
