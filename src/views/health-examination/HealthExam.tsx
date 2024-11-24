import React, { useState } from 'react';
import { View, Text, ScrollView, RefreshControl } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTLHStore } from '../../view-models/useTLHStore';
import HeaderApp from '../../components/HeaderApp';
import MedicationCard from '../../components/MedicationCard';
import { styles } from './HealthStyle';
import FooterHome from '../../components/FooterHome';
import { imageInApp } from '../../../assets/constants/imageList';
interface Props {
    navigation: any
}

const HealthExamScreen: React.FC<Props> = ({ navigation }) => {
    const [refreshing, setRefreshing] = useState(false);
    const { t } = useTranslation();

    const { medications, setSelectedMedication } = useTLHStore();

    const handlePress = (medication: any) => {
        setSelectedMedication(medication);
        navigation.navigate("HealthDetail");
    };

    const onRefresh = async () => {
        setRefreshing(true);


        setTimeout(() => {
            setRefreshing(false);
        }, 1500);
    };

    return (
        <View style={styles.container}>
            <HeaderApp navigation={navigation} screenName='10 มกราคม 2567' />
            <View style={styles.positionTextRightTop}>
                <Text style={styles.textRightTop}>{t("dischargeSummary")}</Text>
            </View>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        colors={['#007bff']}
                        tintColor="#007bff"
                        progressBackgroundColor="#ffffff"
                    />
                }
            >
                <View style={{ padding: 10, }}>
                    {medications && medications.map((item: any, index: any) => (
                        <MedicationCard
                            key={index}
                            data={item}
                            onPress={() => { handlePress(item) }}
                        />
                    ))}
                </View>
            </ScrollView>
            <FooterHome imageSource={imageInApp.imageFooter} />
        </View>
    );
};



export default HealthExamScreen;
