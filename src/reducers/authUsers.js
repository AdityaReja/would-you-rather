import {AUTH_USER} from '../actions/authUsers'

export default function authUsers(state= null, action) {
    switch (action.type) {
        case AUTH_USER: 
            return action.authUsers
        default :
            return state
    }
}