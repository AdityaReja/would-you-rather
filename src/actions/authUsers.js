export const AUTH_USER = 'AUTH_USER'

export default function setAuthUser(authUsers) {
    return {
        type: AUTH_USER,
        authUsers
    }
}