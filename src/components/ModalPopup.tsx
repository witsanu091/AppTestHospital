import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Button, ScrollView, View } from 'react-native';
import { styleHomePage, themeColor } from '../styles/global';
import Modal from 'react-native-modal';

const ModalPopup = ({ visible, data, onClose }: any) => {
    const [modalVisible, setModalVisible] = useState(visible);

    useEffect(() => {
        setModalVisible(visible);
    }, [visible]);

    const handleOutsideClick = () => {
        if (modalVisible) {
            onClose();
        }
    };

    return (
        <View style={styles.centeredView}>
            <Modal
                isVisible={modalVisible}
                onBackdropPress={handleOutsideClick}
                onBackButtonPress={handleOutsideClick}
                style={styles.modal}
            >
                <View style={styles.modalView}>
                    <Text style={styleHomePage.groupMenuTitle2Text}>{data && data.title}</Text>
                    <View style={{ position: "absolute", top: 10, right: 20 }}>
                        <Button title="ปิด" onPress={handleOutsideClick} />
                    </View>
                    <ScrollView>
                        <View style={{ marginTop: 10 }}>
                            {data && data.detail.map((value: any, index: any) => (
                                <View>

                                </View>
                            ))}

                        </View>
                    </ScrollView>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: themeColor.grayLightBackgroundColor,
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'flex-start',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: "80%",
        height: "50%"
    },
    modal: {
        margin: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default ModalPopup;
