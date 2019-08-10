import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default class Onboarding extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title } = styles;
        return (
            <View>
                <Text style={title}>Browse books easily</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: "bold",
    }
});