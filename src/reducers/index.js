import { combineReducers } from 'redux';

import cart from './cart';
import app from './app';

export default combineReducers({
    cart,
    app
});
