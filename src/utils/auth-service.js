export const isBrowser = typeof window !== "undefined";

export const defaultUser = {
    username: null,
    email: null,
    name: 'Visitor',
    surname: null,
    token:  null,
    role:  "visitor",
    isAuth: false,
    password:  null,
}