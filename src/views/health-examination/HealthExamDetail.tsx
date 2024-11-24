import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { useTLHStore } from '../../view-models/useTLHStore';
import HeaderApp from '../../components/HeaderApp';
import MedicationCardDetail from '../../components/MedicationCardDetail';
import { imageInApp } from '../../../assets/constants/imageList';
import { styles } from './Style';
import { useTranslation } from 'react-i18next';

interface Props {
    navigation: any;
}

const HealthExamDetailsScreen: React.FC<Props> = ({ navigation }) => {
    const { t } = useTranslation();
    const { selectedMedication } = useTLHStore();

    if (!selectedMedication) return null;

    return (
        <View style={styles.container}>
            <HeaderApp navigation={navigation} screenName="เภสัชพันธุศาสตร์" />
            <ScrollView>

                <View style={{ padding: 10 }}>
                    <MedicationCardDetail data={selectedMedication} />

                    <TouchableOpacity style={styles.emergencyButton}>
                        <Text style={styles.emergencyButtonText}>{t("consultation")}</Text>
                        <Text style={styles.emergencySubtitle}>
                            {t("consultDirectly")}
                        </Text>
                    </TouchableOpacity>

                    <View style={styles.infoContainer}>
                        <Image source={imageInApp.imageDetail} style={styles.infoImage} />
                    </View>

                    <View style={{ margin: 10 }}>
                        <Text style={styles.infoText}>
                            {
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                            }
                        </Text>
                    </View>
                </View>
            </ScrollView>

        </View>
    );
};


export default HealthExamDetailsScreen;
