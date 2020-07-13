import { RECIEVE_USER } from '../actions/users';
import { ADD_QUESTION, ADD_ANSWER } from '../actions/question';

export default function users(state = {}, action) {
	switch (action.type) {
		case RECIEVE_USER:
			return {
				...state,
				...action.users
			};

		case ADD_QUESTION:
			return {
				...state,
				[action.question.author]: {
					...state[action.question.author],
					questions: state[action.question.author].questions.concat([
						action.question.id
					])
				}
			};

		case ADD_ANSWER:
			const { qid, answer, authUsers } = action.answer;

			return {
				...state,
				[authUsers]: {
					...state[authUsers],
					answers: {
						...state[authUsers].answers,
						[qid]: answer
					}
				}
			};

		default:
			return state;
	}
}
