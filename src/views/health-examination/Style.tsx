import { StyleSheet } from 'react-native';

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
    emergencyButton: {
        margin: 10,
        padding: 16,
        borderRadius: 8,
        backgroundColor: '#1976D2',
        alignItems: 'center',
    },
    emergencyButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
        fontFamily: 'Kanit-Regular',
    },
    emergencySubtitle: {
        fontSize: 14,
        color: '#FFF',
        marginTop: 4,
        fontFamily: 'Kanit-Regular',
    },
    infoContainer: {
        margin: 10,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "green",
        width: '95%',
        height: '34.5%',
    },
    infoImage: {
        width: '100%',
        height: '100%',
    },
    infoText: {
        fontSize: 14,
        color: '#333',
    },
});
