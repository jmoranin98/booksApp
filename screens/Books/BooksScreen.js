import React, { Component } from 'react';
import {
    SafeAreaView,
    View,
    Text,
} from 'react-native';
import axios from 'axios';

import globalStyles from '../../components/globalValues';
import BookCategoryTile from '../../components/Books/BookCategoryTile';
import { ScrollView } from 'react-native-gesture-handler';
import BookTile from '../../components/Books/BookTile';

export default class BooksScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                'scifi', 'horror', 'kids',
            ],
            books: [],
        };
    }

    async componentDidMount() {
        try {
            const { data } = await axios.get('http://localhost:3000/books', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            });
            if (data.books) this.setState({ books: data.books });
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        const { 
            page,
            titleText,
            subtitleText,
        } = globalStyles;
        const { navigation } = this.props;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={page}>
                    <Text style={titleText}>Books</Text>
                    <View>
                        <Text style={subtitleText}>
                            Categories
                        </Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {this.state.categories.map((category, index) => 
                            <BookCategoryTile key={index} category={category}/>)
                        }
                        </ScrollView>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={subtitleText}>
                            Popular books
                        </Text>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {this.state.books.map((book, index) => (
                                <BookTile 
                                book={book} 
                                onPress={() => navigation.navigate('Detail', { book })} 
                                key={index}/>
                            ))}
                        </ScrollView>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}