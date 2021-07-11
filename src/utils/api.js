import {
    _getQuestions,
    _getUsers,
    _saveQuestion,
    _saveQuestionAnswer
} from './_DATA.js'

export function getInitialData(){
    return Promise.all([
        _getQuestions(),
        _getUsers()
    ]).then( ([questions,users]) => ({
        questions,
        users
    }))
}

export function saveQuestion(q){
    return _saveQuestion(q)
}

export function saveQuestionAnswer(answer){
    return _saveQuestionAnswer(answer)
}