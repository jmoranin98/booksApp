import React, { Component } from 'react';
import {
    SafeAreaView,
    View,
    Text,
} from 'react-native';

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
            books: [
                {
                    score: 3.7,
                    title: 'Book 1',
                    autor: 'Amanda Row',
                    image: 'https://images.pexels.com/photos/1317943/pexels-photo-1317943.jpeg?cs=srgb&dl=adventure-cliff-daylight-1317943.jpg&fm=jpg',
                },
                {
                    score: 2.5,
                    title: 'Book 2',
                    autor: 'Peter Strange',
                    image: 'https://images.pexels.com/photos/2397652/pexels-photo-2397652.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                },
                {
                    score: 4.0,
                    title: 'Book 3',
                    autor: 'Willard Holm',
                    image: 'https://images.pexels.com/photos/2098403/pexels-photo-2098403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                },
                {
                    score: 4.3,
                    title: 'Book 4',
                    autor: 'Edward Stuart',
                    image: 'https://images.pexels.com/photos/1441932/pexels-photo-1441932.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                },
            ],
        };
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