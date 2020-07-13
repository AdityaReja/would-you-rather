import { AUTH_USER ,RESET_AUTH_USER} from '../actions/authUsers'

export default function authUsers(state = null, action) {
    switch (action.type) {
        case AUTH_USER:
            return action.authUsers
        case RESET_AUTH_USER:
            return null;
        default:
            return state;
    }
}