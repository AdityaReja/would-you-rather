import { recieveUsers } from './users';
import {getInitialData} from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { receievQuestion } from './question';


export function handleInitialData() {
	return (dispatch) => {
		dispatch(showLoading())
		return getInitialData().then(({ users, questions }) => {
			dispatch(recieveUsers(users));
			dispatch(receievQuestion(questions))
			dispatch(hideLoading())
		});
	};
}