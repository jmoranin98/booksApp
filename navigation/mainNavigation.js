import {
    createStackNavigator,
} from 'react-navigation';
import Onboarding from '../screens/Onboarding';
import BooksScreen from '../screens/Books/BooksScreen';

const mainNavigation = createStackNavigator({
    Home: {
        screen: BooksScreen,
        navigationOptions: {
            header: null,
        },
    },
    Onboarding: {
        screen: Onboarding,
        navigationOptions: {
            header: null,
        },
    },
});

export default mainNavigation;