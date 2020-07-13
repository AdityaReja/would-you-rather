import { combineReducers } from 'redux';

import authUsers from './authUsers';
import users from './users';

export default combineReducers({
	authUsers,
	users
});
