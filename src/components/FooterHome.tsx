import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { getFullScreen } from '../../assets/constants/global';

interface FooterProps {
    imageSource: any;
}

const Footer: React.FC<FooterProps> = ({ imageSource }) => {
    return (
        <View style={styles.footerContainer}>
            <Image source={imageSource} style={styles.footerImage} resizeMode="contain" />
        </View>
    );
};

const styles = StyleSheet.create({
    footerContainer: {
        marginTop: 15,
        width: getFullScreen.width,
        height: getFullScreen.height * 0.16,
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#DDD',
    },
    footerImage: {
        width: '110%',
        height: '110%',
    },
});

export default Footer;
