import * as React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {
    Text,
    Button,
    useTheme,
    Card,
    Avatar,
    IconButton,
    Divider,
    TextInput,
} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import CompanySearchWithFlatList from './CompanySearchWithFlatList';
//import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const ReusableSection = ({title, CustomComponent}) => {
    return (
        <View style={styles.sectionStyle}>
            <Text variant="titleMedium" style={{width: '20%', marginLeft: 3}}>
                {title}
            </Text>
            <View style={{width: '80%', alignContent: 'flex-end'}}>
                <CustomComponent />
            </View>
        </View>
    );
};

// todo: finish rest of interview metadata control

const AddInterview = () => {
    const theme = useTheme();
    return (
        <SafeAreaView
            style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start', gap: 10}}>
            <Card style={styles.cardContainerStyle} mode="elevated">
                <ReusableSection title={'Company'} CustomComponent={CompanySearchWithFlatList} />
                <Divider bold={true} horizontalInset={true} />
                <ReusableSection title={'Job title'} CustomComponent={JobTitleTextInput} />
                <Divider bold={true} />
                <ReusableSection title={'Level'} CustomComponent={JobTitleTextInput} />
            </Card>
            <Card mode="elevated" style={styles.cardContainerStyle}>
                <SummaryTextInput />
            </Card>
        </SafeAreaView>
    );
};

const JobTitleTextInput = () => {
    return (
        <TextInput
            value={''}
            //onChangeText={}
            placeholder="ex: Software Engieer"
            mode="flat"
            dense={true}
            style={{width: '95%'}}
        />
    );
};
// todo: finish the onChangeText
const SummaryTextInput = () => {
    return (
        <View>
            <Text variant="titleMedium" style={{width: '20%', marginLeft: 3}}>
                Detail
            </Text>
            <TextInput
                value={''}
                //onChangeText={}
                placeholder="ex: Software Engineer"
                mode="outlined"
                multiline={true}
                numberOfLines={10}
                editable
                textAlignVertical="top"
                style={{width: '100%', height: 200}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainerStyle: {
        width: '95%',
        //marginBottom: 100,
        backgroundColor: 'rgb(240, 240, 240)', // This is an example matte background color
    },
    sectionStyle: {
        //flexWrap: 'nowrap',
        flexDirection: 'row',
        alignItems: 'center',
        height: 100,
    },
});
export default AddInterview;
