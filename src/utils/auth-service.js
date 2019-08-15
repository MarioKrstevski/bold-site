import {useContext} from 'react';
import AuthContext from '../context/AuthContext';
import { users } from './user-database';
import { navigate } from 'gatsby';

const isBrowser = typeof window !== "undefined";

const defaultUser = {
    username: null,
    email: null,
    name: 'Visitor',
    surname: null,
    token:  null,
    role:  "visitor",
    isAuth: false,
    password:  null,
}

const getUser = () => {
    const { user } = useContext(AuthContext);
    return user;
}

const setUser = user => {
    const { setUser } = useContext(AuthContext);
    setUser(user);
}

export const handleLogin = ({username, password}) => {
    if(!isBrowser) return false;

    const found =  users.find(user => user.email === username && user.password === password);

    if (found){
        return setUser(found);
    } 

      return false
}

export const isLoggedIn = () => {
    if (!isBrowser) return false

    const user = getUser();

    return !!user.email;
}

export const getCurrentUser = () => isBrowser && getUser()

export const logout = callback => {
    if (!isBrowser) return
  
    console.log(`Ensuring the \`gatsbyUser\` property exists.`)
    setUser(defaultUser);
    // callback is going to be the navigate away 
    // we can type navigate("/")

    callback();
  }