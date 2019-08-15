import { scholarships } from '../utils/scholarships-databse';

const initialState = [...scholarships];

const ADD_SCHOLARSHIP = 'ADD_SCHOLARSHIP';
const GET_SCHOLARSHIPS = 'GET_SCHOLARSHIPS';

export const addScholarship = scholarship => ({
  type: ADD_SCHOLARSHIP, scholarship
})

export const getScholarships = () => ({
    type: GET_SCHOLARSHIPS
})

export default (state = initialState, action) => {
    switch (action.type) {
      case ADD_SCHOLARSHIP:
        return [...state, action.scholarship];
       case GET_SCHOLARSHIPS:
       return state ;
      default:
        return state;
    }
  };