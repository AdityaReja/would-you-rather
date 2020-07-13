import { combineReducers } from 'redux';

import authUsers from './authUsers';
import users from './users';
import questions from './question';

export default combineReducers({
	authUsers,
	users,
	questions
});
