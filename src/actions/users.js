export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER'
export const SAVE_USER_QUESTION = 'SAVE_USER_QUESTION'

export function receiveUsers (users){
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function saveUserAnswer(authedUser,answer,qid){
    return{
        type: SAVE_USER_ANSWER,
        authedUser,
        answer,
        qid
    }
}

export function saveUserQuestion(authedUser,qid){
    return{
        type: SAVE_USER_QUESTION,
        authedUser,
        qid
    }
}