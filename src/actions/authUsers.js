export const AUTH_USER = 'AUTH_USER'
export const RESET_AUTH_USER = 'RESET_AUTH_USER';


export default function setAuthUser(authUsers) {
    return {
        type: AUTH_USER,
        authUsers
    }
}

export function reSetAuthUser() {
	return {
		type: RESET_AUTH_USER
	};
}