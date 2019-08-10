import React, { Component } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    ScrollView,
    Image,
    StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ArrowBack from '../../components/common/ArrowBack';
import globalStyles, { colors } from '../../components/globalValues';

export default class BookDetailScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { navigation } = this.props;
        const book = navigation.getParam('book');
        const { header, info, infoText, scoreText } = styles;
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={globalStyles.page}>
                    <ArrowBack onPress={() => navigation.goBack()}/>
                    <ScrollView>
                        <View style={header}>
                            <Image style={globalStyles.bookImage} source={{ uri: book.image }} />
                            <View style={info}>
                                <View style={{ flexDirection: 'row', marginBottom: 4, }}>
                                    <Icon name='ios-star' color={colors.primary} size={20} />
                                    <Text style={[infoText, scoreText]}>{book.score}</Text>
                                </View>
                                <Text style={[infoText]}>{book.autor}</Text>
                            </View>
                        </View>
                        <Text style={globalStyles.titleText}>{book.title}</Text>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        paddingVertical: 15,
        paddingHorizontal: 16,
        flexDirection: 'row',
    },
    info: {
        paddingLeft: 10,
    },
    infoText: {
        fontSize: 17,
    },
    scoreText: {
        color: colors.primary,
    }
});