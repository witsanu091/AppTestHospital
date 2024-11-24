import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";

interface MedicationCardProps {
    data: any;
    onPress: () => void;
}

const MedicationCard: React.FC<MedicationCardProps> = ({
    data,
    onPress,
}) => {
    const { t } = useTranslation();
    const statusStyles = data.status === 'ปกติ' ? styles.statusNormal : styles.statusAbnormal;

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View
                style={[
                    styles.cardLeftBar,
                    data.status === 'ปกติ'
                        ? { backgroundColor: '#75E0A7' }
                        : { backgroundColor: '#FDA29B' },
                ]}
            />
            <View style={styles.content}>
                <View style={styles.imageContainer}>
                    <Image
                        source={data.image}
                        style={styles.image}
                    />
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.title}>{data.name}</Text>
                    <Text style={styles.date}>{t('diagnoseDate')} : {data.date}</Text>
                    <View style={[styles.statusButton, statusStyles]}>
                        <Text style={[styles.statusText, data.status === 'ปกติ' ? styles.statusNormal : styles.statusAbnormal]}>
                            {data.status === 'ปกติ' ? `${t('normalResult')}` : `${t('abnormalResult')}`}
                        </Text>
                    </View>
                </View>
                <FontAwesome name="chevron-right" size={18} color={"#686A69"} />
            </View>
        </TouchableOpacity>
    );
};




const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
        borderRadius: 10,
        margin: 5,
        padding: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 3,
    },
    cardLeftBar: {
        width: 10,
        height: '160%',
        backgroundColor: '#4CAF50',
        position: 'absolute',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        marginLeft: 10
    },
    imageContainer: {
        marginRight: 20,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    detailsContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0044CC',
        fontFamily: "Kanit-Regular"
    },
    date: {
        fontSize: 12,
        color: '#555',
        marginVertical: 5,
    },
    statusButton: {
        alignSelf: 'flex-start',
        borderRadius: 15,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    statusNormal: { backgroundColor: '#17B26A', color: "#FFF", borderRadius: 30, textAlign: "center" },
    statusAbnormal: { backgroundColor: '#F04438', color: "#FFF", borderRadius: 30, textAlign: "center" },
    statusText: {
        fontSize: 12,
        color: '#FFF',
    },

});

export default MedicationCard;
