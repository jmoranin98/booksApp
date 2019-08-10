import {
    createStackNavigator,
} from 'react-navigation';
import BooksScreen from '../screens/Books/BooksScreen';
import BookDetailScreen from '../screens/Books/BookDetailScreen';

const bookNavigation = createStackNavigator({
    Home: {
        screen: BooksScreen,
        navigationOptions: {
            header: null,
        },
    },
    Detail: {
        screen: BookDetailScreen,
        navigationOptions: {
            header: null,
        },
    },
});

export default bookNavigation;