import { StyleSheet } from "react-native";

export const iConSizeHeader = {
    size: 24,
    colorIcon: "#686A69",
    themeColor: "#17EA80"
};
export const themeColor = {
    mainThemeColor: "#FFFFFF",
    secondThemeColor: "#95ceba",
    thirdThemeColor: "#806144",
    fourThemeColor: "",
    grayColor: "#686A69",
    grayLightColor: "#D7D7D7",
    creamLightColor: "#e5e4af",
    orangeLightColor: "#f7a039",
    grayLightBackgroundColor: 'rgba(215, 215, 215, 0.5)',


};
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    questionContainer: {
        marginBottom: 15,
    },
    questionText: {
        marginBottom: 10,
        fontSize: 16,
        fontWeight: "bold",
        fontFamily: "Kanit-Regular"
    },
    answerText: {
        margin: 5,
        fontSize: 16,
        marginLeft: 15,
    },
    positionAnswer: {
        alignItems: "flex-start",
        flexDirection: "row",
    },

    fixToText: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    buttonStyle: {
        backgroundColor: "red",
    },
});

export const stylesColor = StyleSheet.create({
    themeGreen: {
        color: "#17EA80",
    },
    themeGray: {
        color: "#686A69",
    },
});

export const stylesHeaderPosition = StyleSheet.create({
    headerTheme: {
        paddingVertical: 50,
        backgroundColor: themeColor.mainThemeColor,
        paddingBottom: 10,
        flexDirection: "row",
    },
    headerPositionBack: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-start",
        paddingTop: 20,
        paddingLeft: 15,
    },
    headerPositionWord: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingTop: 20,

    },
    sizeLogoHeader: { width: "70%", height: 30 },
    positionIconHeader: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        paddingTop: 15,
        paddingRight: 15,
        flexDirection: "row",
    },
});

export const styleHomePage = StyleSheet.create({
    groupMenuTitleText: {
        fontSize: 16,
        fontFamily: "Kanit-Regular"

    },
    groupMenuTitle2Text: {
        fontSize: 16,
        fontWeight: "bold",


    },
    positionGroupMenu: { marginVertical: 5, },
    positionMenuItem: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        padding: 10,

    },
    item: {
        width: '45%',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1.5%',
        padding: 10,
        backgroundColor: '#f0f0f0',
        marginTop: 10,
        // borderRadius :
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: "35%"

    },

    positionNotification: {
        // marginHorizontal: 10,
        backgroundColor: themeColor.mainThemeColor

    },
    positionIconHome: {
        flex: 1, paddingVertical: 10, justifyContent: "center", alignItems: "center", marginHorizontal: 5

    },
    positionTextIcon: {
        fontSize: 12, fontWeight: "bold", textAlign: "center", marginTop: 5, color: "#e5e4af",

    }

});

