import {StyleSheet, View, useColorScheme, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';
import {Button} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from 'react-native-paper';

function AddItemModal(props: BottomTabBarButtonProps) {
    const theme = useTheme();
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
                    backdropOpacity={0.6}
                    isVisible={modalVisible}
                    onBackdropPress={() => setModalVisible(false)}
                    style={styles.contentView}>
                    {/* Makes model content use the system theme */}
                    <View style={[styles.content, {backgroundColor: theme.colors.background}]}>
                        <TouchableOpacity
                            style={styles.contentTitle}
                            hitSlop={{left: 100, right: 100}}>
                            <Button style={styles.contentTitle} onPress={() => {}}>
                                Add interview
                            </Button>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.contentTitle}
                            hitSlop={{left: 100, right: 100}}>
                            <Button style={styles.contentTitle} onPress={() => {}}>
                                Add Company
                            </Button>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.contentTitle}
                            hitSlop={{left: 100, right: 100}}>
                            <Button style={styles.contentTitle} onPress={() => {}}>
                                Add Post
                            </Button>
                        </TouchableOpacity>
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
