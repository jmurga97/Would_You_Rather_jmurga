import { showLoading, hideLoading } from "react-redux-loading"
import { saveQuestionAnswer, saveQuestion } from "../utils/api"
import { saveUserAnswer, saveUserQuestion } from "./users"


export const ADD_QUESTION = 'ADD_QUESTION'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_ANSWER = 'SAVE_ANSWER'


export function receiveQuestions(questions){
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

function saveAnswer(authedUser,answer,qid){
    return {
        type: SAVE_ANSWER,
        authedUser,
        answer,
        qid
    }
}

function addQuestion(question){
    return{
        type: ADD_QUESTION,
        question
    }
}

export function handleSaveAnswer(answer,qid) {
    return (dispatch,getState) => {
        const {authedUser} = getState()

        dispatch(showLoading())
        return saveQuestionAnswer({
            authedUser,
            qid,
            answer
        })
            .then(() => {
                dispatch(saveAnswer(authedUser,answer,qid))
                dispatch(saveUserAnswer(authedUser,answer,qid))
                dispatch(hideLoading())
            })
            .catch(e => console.error(e))
    }
}

export function handleAddQuestion(optionOneText,optionTwoText){
    return(dispatch,getState) => {
        const {authedUser} = getState()
        const author = authedUser
        dispatch(showLoading())
        return saveQuestion({
            optionOneText,
            optionTwoText,
            author
        })
            .then((formattedQuestion) => {
                dispatch(addQuestion(formattedQuestion))
                dispatch(saveUserQuestion(authedUser, formattedQuestion.id))
                dispatch(hideLoading())
            })
    }
}