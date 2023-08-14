import {StyleSheet, View, Text} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';
import {Button} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

function AddItemModal(props: BottomTabBarButtonProps) {
    console.log({props});
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <Button
                onPress={() => {
                    setModalVisible(true);
                }}
                style={styles.buttonStyle}
                icon={props => <Ionicons name="add-circle" color={props.color} size={80} />}>
                {''}
            </Button>
            <SafeAreaView>
                <Modal
                    animationIn="slideInUp"
                    backdropOpacity={0.3}
                    isVisible={modalVisible}
                    onBackdropPress={() => setModalVisible(false)}
                    style={styles.contentView}>
                    <View style={styles.content}>
                        <Text style={styles.contentTitle}>Add interview</Text>

                        <Text style={styles.contentTitle}>Add company</Text>

                        <Text style={styles.contentTitle}>Add post</Text>
                    </View>
                </Modal>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 17,
        borderTopLeftRadius: 17,
    },
    contentTitle: {
        fontSize: 20,
        marginBottom: 12,
    },
    contentView: {
        justifyContent: 'flex-end',
        margin: 0,
        //height: 500,
    },
    buttonStyle: {
        height: 90,
        width: 90,

        borderRadius: 100,
        //position: 'absolute',
        bottom: 30, // space from bottombar
        //borderRadius: 68,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default AddItemModal;
