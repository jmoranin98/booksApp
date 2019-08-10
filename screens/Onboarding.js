import React, { Component } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';
import globalStyles from '../components/globalValues';

export default class Onboarding extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { image, button, buttonText } = styles;
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={{flex: 1, alignItems: 'center'}}>
                        <Text style={globalStyles.titleText}>Browse books easily</Text>
                        <Image
                        source={require('../images/reading.png')}
                        style={image}
                        />
                        <View>
                            <TouchableOpacity 
                            onPress={() => this.props.navigation.navigate('Books')}
                            style={button}>
                                <Text style={buttonText}>Comenzar</Text>
                            </TouchableOpacity>
                        </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    },
    image: {
        marginVertical: 30,
        height: 300,
        width: 280,
        resizeMode: 'stretch'
    },
    button: {
        backgroundColor: '#fff',
        paddingHorizontal: 80,
        paddingVertical: 20,
        borderRadius: 60,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '500',
    }
});