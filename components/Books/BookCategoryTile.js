import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
} from 'react-native';

export default BookCategoryTile = ({category}) => {
    const {
        tile,
        text
    } = styles;
    return (
        <TouchableOpacity style={tile}>
            <Text style={text}>{category}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    tile: {
        height: 150,
        width: 250,
        backgroundColor: '#fff',
        marginHorizontal: 16,
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 5,
    },
    text: {
        textAlign: 'center',
        fontSize: 35,
        fontWeight: "bold",
    }
});