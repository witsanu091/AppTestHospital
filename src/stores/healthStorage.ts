import { create } from 'zustand';
import { medicationData } from '../../assets/data/medicateData';
import { Medication } from '../models/medicateModels';

interface HealthState {
    medications: Medication[];
    selectedMedication: Medication | null;
    setMedications: (medications: Medication[]) => void;
    setSelectedMedication: (medication: Medication) => void;
}

export const useHealthStore = create<HealthState>((set) => ({
    medications: medicationData,
    selectedMedication: null,
    setMedications: (medications) => set({ medications }),
    setSelectedMedication: (medication) => set({ selectedMedication: medication }),
}));
