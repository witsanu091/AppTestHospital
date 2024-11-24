// import React from 'react';
// import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { useTLHStore } from '../../view-models/useTLHStore';

// const HomeScreen = () => {
//     const { medications, setSelectedMedication } = useTLHStore();
//     const navigation = useNavigation();

//     const handlePress = (medication: any) => {
//         setSelectedMedication(medication);
//         // navigation.navigate('Details');
//     };

//     const renderItem = ({ item }: any) => (
//         <TouchableOpacity onPress={() => handlePress(item)} style={styles.itemContainer}>
//             <View style={[styles.statusIndicator, item.status === 'ปกติ' ? styles.normal : styles.abnormal]} />
//             <View style={styles.textContainer}>
//                 <Text style={styles.medicationName}>{item.name}</Text>
//                 <Text style={styles.dateText}>ตรวจวันที่ : {item.date}</Text>
//             </View>
//             <Text style={[styles.statusText, item.status === 'ปกติ' ? styles.statusNormal : styles.statusAbnormal]}>
//                 {item.status === 'ปกติ' ? 'ผลตรวจปกติ' : 'ผลตรวจผิดปกติ'}
//             </Text>
//         </TouchableOpacity>
//     );

//     return (
//         <View style={styles.container}>
//             <FlatList data={medications} renderItem={renderItem} keyExtractor={(item) => item.id} />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: { flex: 1, padding: 16, backgroundColor: '#f0f0f0' },
//     itemContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 16, padding: 16, backgroundColor: '#fff', borderRadius: 8 },
//     textContainer: { flex: 1 },
//     medicationName: { fontSize: 16, fontWeight: 'bold', color: '#1a73e8' },
//     dateText: { fontSize: 14, color: '#666' },
//     statusText: { fontSize: 14, fontWeight: 'bold' },
//     statusNormal: { color: '#4CAF50' },
//     statusAbnormal: { color: '#F44336' },
//     statusIndicator: { width: 10, height: 10, borderRadius: 5, marginRight: 8 },
//     normal: { backgroundColor: '#4CAF50' },
//     abnormal: { backgroundColor: '#F44336' },
// });

// export default HomeScreen;
import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();

import React from 'react';
import { View, Text, Button } from 'react-native';
import { useTranslation } from 'react-i18next';
// import { storage } from './storage';
import i18n from '../../stores/i18n';

const HomeScreen = () => {
    const { t } = useTranslation();

    const changeLanguage = (lng: string) => {
        storage.set('language', lng);
        // Dynamically change the app's language
        i18n.changeLanguage(lng);
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, marginBottom: 20 }}>{t('welcome')}</Text>
            <Text style={{ fontSize: 20, marginBottom: 20 }}>{t('title')}</Text>

            <Button title={t('Eng')} onPress={() => changeLanguage('en')} />
            <Button title="ไทย" onPress={() => changeLanguage('th')} />


        </View>
    );
};

export default HomeScreen;
