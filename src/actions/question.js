import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { saveQuestions, saveQuestionAnswer } from '../utils/api';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTION';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_ANSWER = 'ADD_ANSWER';

export function receievQuestion(questions) {
    return {
        type : RECEIVE_QUESTIONS,
        questions
    }
}

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

function addAnswer ({authUsers,answer,qid}) {
    return {
        type : ADD_ANSWER,
        answer : {
            qid,
			answer,
			authUsers
        }
    }
}

export function handleAddQuestion(one, two) {
	return (dispatch, getState) => {
		const { authUsers } = getState();

		dispatch(showLoading());

		return saveQuestions({
			optionOneText: one,
			optionTwoText: two,
			author: authUsers
		})
			.then((question) => dispatch(addQuestion(question)))
			.then(() => dispatch(hideLoading()));
	};
}

export function handleAddAnswer(qid, answer) {
	return (dispatch, getState) => {
		const { authUsers } = getState();

		dispatch(showLoading());

		return saveQuestionAnswer({
			qid,
			answer,
			authedUser : authUsers
		})
			.then(() =>
				dispatch(
					addAnswer({
						qid,
						answer,
						authUsers
					})
				)
			)
			.then(() => dispatch(hideLoading()));
	};
}


