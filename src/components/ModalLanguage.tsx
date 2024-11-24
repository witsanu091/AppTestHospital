import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Button, ScrollView, View, TouchableOpacity } from 'react-native';
import { fontFamily, themeColor } from '../styles/global';
import Modal from 'react-native-modal';
import { MMKV } from 'react-native-mmkv';
import i18n from '../stores/i18n';
import { LANGUAGES } from '../../assets/constants/global';
import { useTranslation } from 'react-i18next';

const storage = new MMKV();

const ModalLanguage = ({ visible, onClose }: any) => {
    const { t } = useTranslation();
    const [modalVisible, setModalVisible] = useState(visible);
    const [currentLanguage, setCurrentLanguage] = useState(storage.getString('language') || 'en');

    const changeLanguage = (languageCode: string) => {
        storage.set('language', languageCode); // Save to MMKV
        i18n.changeLanguage(languageCode); // Update i18n language
        setCurrentLanguage(languageCode); // Update local state
        setModalVisible(false); // Close the modal
    };

    useEffect(() => {
        setModalVisible(visible);
    }, [visible]);

    const handleOutsideClick = () => {
        if (modalVisible) {
            onClose();
        }
    };


    return (
        <TouchableOpacity >
            <Modal
                isVisible={modalVisible}
                onBackdropPress={handleOutsideClick}
                onBackButtonPress={handleOutsideClick}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>

                        {LANGUAGES.map((language) => (
                            <TouchableOpacity
                                key={language.code}
                                style={styles.languageOption}
                                onPress={() => changeLanguage(language.code)}
                            >
                                <Text style={styles.languageText}>{language.label}</Text>
                            </TouchableOpacity>
                        ))}
                        <Button title={t('cancel')} onPress={() => setModalVisible(false)} />
                    </View>
                </View>
            </Modal>

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({


    text: {
        fontSize: 18,
        marginBottom: 20,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
    },
    modalContent: {
        width: 200,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        marginTop: 50,
        marginRight: 10,
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowOffset: { width: 2, height: 2 },
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    languageOption: {
        padding: 10,
        width: '100%',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    languageText: {
        fontSize: 16,
        fontFamily: fontFamily.regular
    },
});

export default ModalLanguage;
