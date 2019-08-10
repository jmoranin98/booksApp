import {
    createAppContainer,
} from 'react-navigation';

import MainNavigation from './mainNavigation';
import bookNavigation from './bookNavigation';

export default createAppContainer(bookNavigation);