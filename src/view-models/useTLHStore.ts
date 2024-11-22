import { create } from 'zustand';

interface Medication {
    id: string;
    name: string;
    date: string;
    status: 'ปกติ' | 'ผิดปกติ';
}

interface TLHState {
    medications: Medication[];
    selectedMedication: Medication | null;
    setMedications: (medications: Medication[]) => void;
    setSelectedMedication: (medication: Medication) => void;
}

export const useTLHStore = create<TLHState>((set) => ({
    medications: [
        { id: '1', name: 'Allopurinol', date: '10/01/2566', status: 'ปกติ' },
        { id: '2', name: 'Carbamazepine', date: '10/01/2566', status: 'ปกติ' },
        { id: '3', name: 'Abacavir', date: '10/01/2566', status: 'ผิดปกติ' },
        { id: '4', name: 'Clopidogrel', date: '10/01/2566', status: 'ปกติ' },
        { id: '5', name: 'Warfarin', date: '10/01/2566', status: 'ผิดปกติ' },
    ],
    selectedMedication: null,
    setMedications: (medications) => set({ medications }),
    setSelectedMedication: (medication) => set({ selectedMedication: medication }),
}));
