import {RECEIVE_USERS,SAVE_USER_ANSWER,SAVE_USER_QUESTION} from '../actions/users'

export default function questions(state={},action){
    switch(action.type){
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case SAVE_USER_ANSWER:
            return{
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers:{
                        ...state[action.authedUser].answers,
                        [action.qid]: action.answer
                    }
                }
            }
        case SAVE_USER_QUESTION:
            return{
                ...state,
                [action.authedUser]:{
                    ...state[action.authedUser],
                    questions: [...state[action.authedUser].questions, action.qid]
                }
            }
        default:
            return state
    }
}