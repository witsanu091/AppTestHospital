import * as React from 'react'
import { Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { iConSizeHeader, stylesHeaderPosition } from "../styles/global";
import ModalLanguage from './ModalLanguage';

interface Props {
    navigation: any
    screenName: string | ""
}

const HeaderApp: React.FC<Props> = ({ navigation, screenName }) => {
    const [openModal, setOpenModal] = React.useState(false)

    const onClose = () => {
        setOpenModal(!openModal)
    }
    return (
        <View style={stylesHeaderPosition.headerTheme}>
            <TouchableOpacity style={stylesHeaderPosition.headerPositionBack} onPress={() => { navigation.goBack(null) }}>
                <FontAwesome name="chevron-left" size={iConSizeHeader.size} color={iConSizeHeader.colorIcon} />
            </TouchableOpacity>
            <View style={stylesHeaderPosition.headerPositionWord}>
                <Text style={stylesHeaderPosition.textHeaderCenter}>{screenName}</Text>
            </View>
            <View
                style={stylesHeaderPosition.positionIconHeader}
            >
                <ModalLanguage visible={openModal} onClose={onClose} />

                <TouchableOpacity onPress={() => { setOpenModal(!openModal) }}>
                    <View style={{ marginRight: 5 }}>
                        <FontAwesome name="language" size={iConSizeHeader.size} color={iConSizeHeader.colorIcon} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>

    );
};

export default HeaderApp;
