import { StyleSheet } from 'react-native';

import { fontFamily } from '../../styles/global';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f0f0',
        flex: 1,
    },
    positionTextRightTop: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginRight: 16,
        marginTop: 10,
    },
    textRightTop: {
        color: 'blue',
        marginTop: 10,
        marginRight: 10,
        fontFamily: fontFamily.regular,
    },
    emergencyButton: {
        margin: 10,
        padding: 16,
        borderRadius: 8,
        backgroundColor: '#1976D2',
        alignItems: 'center',
    },
    emergencyButtonText: {
        fontSize: 18,
        color: '#FFF',
        fontFamily: fontFamily.bold,
    },
    emergencySubtitle: {
        fontSize: 14,
        color: '#FFF',
        marginTop: 4,
        fontFamily: fontFamily.regular,
    },
    infoContainer: {
        margin: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '95%',
        height: '30%',
    },
    infoImage: {
        width: '100%',
        height: '100%',
    },
    infoText: {
        fontSize: 14,
        color: '#333',
        fontFamily: fontFamily.regular
    },
});
