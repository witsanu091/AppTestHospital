import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window")

export const getFullScreen = {
    width, height
}

export const LANGUAGES = [
    { code: 'en', label: 'English' },
    { code: 'th', label: 'ภาษาไทย' },
];
