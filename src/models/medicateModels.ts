export interface Medication {
    id: string;
    name: string;
    date: string;
    status: 'ปกติ' | 'ผิดปกติ';
    image: string
}
