import { scholarships } from '../utils/scholarships-databse';

const initialState = [...scholarships];

const ADD_SCHOLARSHIP = 'ADD_SCHOLARSHIP';
const GET_SCHOLARSHIPS = 'GET_SCHOLARSHIPS';
const APPLY_TO_SCHOLARSHIP = 'APPLY_TO_SCHOLARSHIP';
const FIND_APPLIED = 'FIND_APPLIED';
const FIND_FAVOURITE = 'FIND_FAVOURITE';

export const addScholarship = scholarship => ({
  type: ADD_SCHOLARSHIP, scholarship
})

export const getScholarships = () => ({
    type: GET_SCHOLARSHIPS
})


const user = {
  name:"mario"
}

export const applyToScholarship = (scholarship, student) => ({type: APPLY_TO_SCHOLARSHIP, scholarship })

export default (state = initialState, action) => {
    switch (action.type) {
      case ADD_SCHOLARSHIP:
        return [...state, action.scholarship];
       case GET_SCHOLARSHIPS:
       return state;
       case FIND_APPLIED:
         const applied = state.filter( scholarship => {
           scholarship.applicants.includes(user.name)
         })
       return applied;
       case FIND_FAVOURITE:
          const favourite = state.filter( scholarship => {
            scholarship.favored.includes(user.name)
          })
        return favourite;
      default:
        return state;
    }
  };