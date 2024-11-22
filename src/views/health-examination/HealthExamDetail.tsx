import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useTLHStore } from '../../view-models/useTLHStore';
import HeaderApp from '../../components/HeaderApp';


interface Props {
    navigation: any
}

const HealthExamDetailsScreen: React.FC<Props> = ({ navigation }) => {
    const { selectedMedication } = useTLHStore();

    if (!selectedMedication) return null;

    return (
        <View style={styles.container}>
            <HeaderApp navigation={navigation} screenName='เภสัชพันธุศาสตร์' />
            <View style={{ padding: 16, }}>
                <Text style={styles.title}>{selectedMedication.name}</Text>
                <Text style={styles.date}>ตรวจวันที่ : {selectedMedication.date}</Text>
                <Text style={[styles.status, selectedMedication.status === 'ปกติ' ? styles.normal : styles.abnormal]}>
                    {selectedMedication.status === 'ปกติ' ? 'ผลตรวจปกติ' : 'ผลตรวจผิดปกติ'}
                </Text>

                <View style={styles.consultButtonContainer}>

                    <Button title="ปรึกษาด่วน" color="#1a73e8" onPress={() => {/* Handle consultation action */ }} />
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: { backgroundColor: '#f0f0f0' },
    title: { fontSize: 20, fontWeight: 'bold', color: '#1a73e8', marginBottom: 8 },
    date: { fontSize: 16, color: '#666', marginBottom: 16 },
    status: { fontSize: 16, fontWeight: 'bold', marginBottom: 16 },
    normal: { color: '#4CAF50' },
    abnormal: { color: '#F44336' },
    consultButtonContainer: { marginTop: 20 },
});

export default HealthExamDetailsScreen;
