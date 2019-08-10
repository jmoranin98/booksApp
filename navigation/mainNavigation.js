import {
    createSwitchNavigator,
} from 'react-navigation';

import Onboarding from '../screens/Onboarding';
import BookNavigation from './bookNavigation';

const mainNavigation = createSwitchNavigator(
    {
        Onboarding: Onboarding,
        Books: BookNavigation,
    }, {
        initialRouteName: 'Onboarding',
    },
);

export default mainNavigation;