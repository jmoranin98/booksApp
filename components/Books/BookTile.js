import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../globalValues';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default BookTile = ({book, onPress}) => {
    const {
        tile,
        imageContainer,
        infoContainer,
        actionsContainer,
        image,
        text,
        text1,
        text2,
        text3,
    } = styles;

    return (
        <View style={tile}>
            <View style={imageContainer}>
                <Image
                source={{ uri: book.image }}
                style={image}
                />
            </View>
            <View style={infoContainer}>
                <Text numberOfLines={1} style={[text, text1]}>{book.score}</Text>
                <Text numberOfLines={1} style={[text, text2]}>{book.title}</Text>
                <Text numberOfLines={1} style={[text, text3]}>{book.autor}</Text>
            </View>
            <View style={actionsContainer}>
                <TouchableOpacity onPress={() => onPress()}>
                    <Icon name='ios-eye' size={25} color={colors.secondary}/>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    tile: {
        height: 100,
        marginVertical: 10,
        marginHorizontal: 16,
        flexDirection: 'row',
    },
    imageContainer: {
        flex: 3,
    },
    infoContainer: {
        flex: 6,
        justifyContent: 'space-evenly',
        paddingHorizontal: 15,
    },
    actionsContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'stretch',
        borderRadius: 3,
    },
    text: {
        fontSize: 15,
    },
    text1: {
        color: colors.primary,
        fontWeight: '700',
    },
    text2: {
        fontWeight: 'bold',
    },
    text3: {
        color: '#BDBDBD',
        fontWeight: '200',
    },
});