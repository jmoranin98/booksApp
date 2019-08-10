import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default ArrowBack = ({onPress}) => {
    const { container } = styles;
    return (
        <View style={container}>
            <TouchableOpacity onPress={() => onPress()}>
                <Icon name='ios-arrow-back' size={30}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 30,
        width: 20,
        left: 16,
        marginBottom: 5,
    }
});