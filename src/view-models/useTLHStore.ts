import { create } from 'zustand';
import { medicationData } from '../../assets/data/medicateData';
import { Medication } from '../models/medicateModels';

interface TLHState {
    medications: Medication[];
    selectedMedication: Medication | null;
    setMedications: (medications: Medication[]) => void;
    setSelectedMedication: (medication: Medication) => void;
}

export const useTLHStore = create<TLHState>((set) => ({
    medications: medicationData,
    selectedMedication: null,
    setMedications: (medications) => set({ medications }),
    setSelectedMedication: (medication) => set({ selectedMedication: medication }),
}));
