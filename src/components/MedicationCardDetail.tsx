import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

interface MedicationCardDetailProps {
    data: any;
}

const MedicationCardDetail: React.FC<MedicationCardDetailProps> = ({ data }) => {
    const { t } = useTranslation();
    const statusStyles =
        data.status === 'ปกติ' ? styles.statusNormal : styles.statusAbnormal;
    return (
        <View style={styles.card}>
            <View
                style={[
                    styles.cardLeftBar,
                    data.status === 'ปกติ'
                        ? { backgroundColor: '#17B26A' }
                        : { backgroundColor: '#F04438' },
                ]}
            />
            <View style={styles.cardContent}>
                <Image
                    source={data.image}
                    style={styles.image}
                />
                <View style={styles.detailsContainer}>
                    <Text style={styles.title}>{data.name}</Text>
                    <Text style={styles.date}>{t('diagnoseDate')} : {data.date}</Text>
                    <View style={[styles.statusButton, statusStyles]}>
                        <Text style={[styles.statusText, data.status === 'ปกติ' ? styles.statusNormal : styles.statusAbnormal]}>
                            {data.status === 'ปกติ' ? `${t('normalResult')}` : `${t('abnormalResult')}`}
                        </Text>
                    </View>
                </View>
                <View style={{ flex: 0.2, alignItems: "flex-end" }}>
                    <TouchableOpacity>
                        <Image
                            source={data.image}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.cardDetails}>
                <View style={styles.detailMedicateRow}>
                    <Text style={styles.detailText}>{data.name}{"\n"}(HLA-B*58:01)</Text>
                </View>
                <View style={styles.detailTextRow}>
                    <Text style={styles.detailText}>000.00 {t("unit")}</Text>
                </View>
                <View style={styles.detailTextRowStatus}>
                    <Text style={[styles.detailText, data.status === 'ปกติ'
                        ? { color: '#75E0A7', fontWeight: 'bold' }
                        : { color: '#FDA29B', fontWeight: 'bold' },]}>
                        {data.status === 'ปกติ' ? `${t('normal')}` : `${t('abnormal')}`}
                    </Text>
                </View>
            </View>
            <View style={[styles.cardDetails, { paddingBottom: 15, }]}>
                <View style={{ justifyContent: "flex-end", alignItems: "flex-end", flex: 2 }}>
                    <Text style={styles.detailText}>{t("normalValue")}</Text>
                </View>
                <View style={{ justifyContent: "flex-end", alignItems: "flex-end", flex: 1 }}>
                    <Text style={styles.detailText}>0 - 000</Text>
                </View>
                <View style={{ justifyContent: "flex-end", alignItems: "center", flex: 1 }}>
                    <Text style={styles.detailText}>{t("unit")}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        margin: 10,
        borderRadius: 8,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        paddingTop: 10,
    },
    cardLeftBar: {
        width: '100%',
        height: '8%',
        position: 'absolute',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        flex: 1
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 16,
    },
    detailsContainer: {
        flex: 1,
        alignItems: "flex-start"

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
        backgroundColor: '#4CAF50',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        alignItems: "center"
    },
    statusButtonText: {
        color: '#FFF',
        fontSize: 12,
    },
    icon: {
        width: 30,
        height: 30,
    },
    cardDetails: {
        paddingHorizontal: 16,
        flexDirection: "row",
    },
    detailMedicateRow: {
        justifyContent: "center",
        alignItems: "flex-start",
        flex: 2
    },
    detailTextRow: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    detailTextRowStatus: {
        justifyContent: "flex-end",
        alignItems: "center",
        flex: 1
    },
    detailText: {
        fontSize: 14,
        color: '#555',
        flex: 1
    },
    statusNormal: {
        backgroundColor: '#17B26A',
        color: '#FFF',
        borderRadius: 30,
        textAlign: 'center',

    },
    statusAbnormal: {
        backgroundColor: '#F04438',
        color: '#FFF',
        borderRadius: 30,
        textAlign: 'center',
    },
    statusText: {
        fontSize: 12,
        color: '#FFF',

    },
});

export default MedicationCardDetail;
