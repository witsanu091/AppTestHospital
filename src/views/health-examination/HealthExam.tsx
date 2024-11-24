import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useTLHStore } from '../../view-models/useTLHStore';
import HeaderApp from '../../components/HeaderApp';
import { useTranslation } from 'react-i18next';
import MedicationCard from '../../components/MedicationCard';
import { styles } from './Style';
import FooterHome from '../../components/FooterHome';
import { imageInApp } from '../../../assets/constants/imageList';
interface Props {
    navigation: any
}

const HealthExamScreen: React.FC<Props> = ({ navigation }) => {
    const { t } = useTranslation();

    const { medications, setSelectedMedication } = useTLHStore();

    const handlePress = (medication: any) => {
        setSelectedMedication(medication);
        navigation.navigate("HealthDetail");
    };

    return (
        <View style={styles.container}>
            <HeaderApp navigation={navigation} screenName='10 มกราคม 2567' />
            <View style={styles.positionTextRightTop}>
                <Text style={{ color: "blue", marginTop: 10, marginRight: 10 }}>{t("dischargeSummary")}</Text>
            </View>
            <ScrollView >
                <View style={{ padding: 16, }}>
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
