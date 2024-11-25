import { Medication } from "../../src/models/medicateModels";
import { imageInApp } from "../constants/imageList";


export const medicationData: Medication[] = [
    { id: '1', name: 'Allopurinol', date: '10/01/2566', status: 'ปกติ', image: imageInApp.imageIcon1 },
    { id: '2', name: 'Carbamazepine', date: '10/01/2566', status: 'ปกติ', image: imageInApp.imageIcon2 },
    { id: '3', name: 'Abacavir', date: '10/01/2566', status: 'ผิดปกติ', image: imageInApp.imageIcon3 },
    { id: '4', name: 'Clopidogrel', date: '10/01/2566', status: 'ปกติ', image: imageInApp.imageIcon4 },
    { id: '5', name: 'Warfarin', date: '10/01/2566', status: 'ผิดปกติ', image: imageInApp.imageIcon5 },
]

export const responseData = {
    user_message: "success",
    developer_message: "success",
    response_date_time: "2024-11-10",
    response_code: "S0001",
    response_data: medicationData
}
