import HealthCallApi from '../service/api-service/callApiHealth';

import { useHealthStore } from '../stores/healthStorage';
import { Medication } from '../models/medicateModels';

export const useHeathViewModel = () => {
    const { medications, setMedications, selectedMedication, setSelectedMedication } = useHealthStore();

    const loadHealth = async () => {
        try {
            const secretKey = process.env.KEY_ENCRYPT || '';
            const response = await HealthCallApi.getHealth(secretKey);
            if (response) {
                setMedications(response.response_data);
            }
        } catch (error) {
            console.error('Failed to load Health profile:', error);
        }
    };

    const saveHealthProfile = async (
        id: number,
        updatedData: Partial<Medication>,
    ) => {
        try {
            const secretKey = process.env.KEY_ENCRYPT || '';
            let response = await HealthCallApi.updateHealth(
                id,
                updatedData,
                secretKey,
            );
            if (response) setMedications(response.response_data);
        } catch (error) {
            console.error('Failed to save Health profile:', error);
        }
    };

    return {
        setMedications,
        medications,
        selectedMedication,
        setSelectedMedication,
        loadHealth,
        saveHealthProfile,
    };
};
