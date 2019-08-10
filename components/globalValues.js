import {
    StyleSheet,    
} from 'react-native';

const globalStyles = StyleSheet.create({
    titleText: {
        fontSize: 26,
        lineHeight: 31,
        fontWeight: "bold",
        marginVertical: 5,
        paddingLeft: 16,
    },
    subtitleText: {
        fontSize: 20,
        lineHeight: 24,
        fontWeight: "400",
        marginVertical: 3,
        paddingLeft: 16,
    },
    normalText: {
        fontSize: 16,
        lineHeight: 18,
    },
    page: {
        flex: 1,
        paddingVertical: 22,
    },
    section: {
        paddingHorizontal: 16,
    },
    bookImage: {
        height: 300,
        width: 180,
    }
});

const colors = {
    primary: '#ffb617',
    secondary: '#03a5fc',
};

export { colors, globalStyles };
export default globalStyles;
