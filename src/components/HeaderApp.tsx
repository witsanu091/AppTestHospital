import * as React from 'react'
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";



import { iConSizeHeader, stylesHeaderPosition } from "../styles/global";


interface Props {
    navigation: any
    screenName: string | ""
}

const HeaderApp: React.FC<Props> = ({ navigation, screenName }) => {
    const AlertLogout = () => {
        Alert.alert("ออกจากระบบ", "ยืนยันการออกจากระบบ", [
            {
                text: "ยกเลิก",
                onPress: () => {
                    return null;
                },
            },
            {
                text: "ตกลง",
                onPress: async () => {

                },
            },
        ],
            { cancelable: false })
    }
    return (
        <View style={stylesHeaderPosition.headerTheme}>
            <TouchableOpacity style={stylesHeaderPosition.headerPositionBack} onPress={() => { navigation.goBack(null) }}>
                <FontAwesome name="chevron-left" size={iConSizeHeader.size} color={iConSizeHeader.colorIcon} />
            </TouchableOpacity>
            <View style={stylesHeaderPosition.headerPositionWord}>
                <Text style={{ fontSize: 18, fontFamily: 'Kanit-Regular' }}>{screenName}</Text>
            </View>
            <View
                style={stylesHeaderPosition.positionIconHeader}
            >

                <TouchableOpacity onPress={() => { AlertLogout() }}>
                    <View style={{ marginRight: 5 }}>
                        <FontAwesome name="language" size={iConSizeHeader.size} color={iConSizeHeader.colorIcon} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>

    );
};

export default HeaderApp;
