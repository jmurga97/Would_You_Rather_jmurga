import React, { Component } from 'react'
import Question from './Question'
import M from 'materialize-css'
import { connect } from 'react-redux'

class Home extends Component {

    componentDidMount(){
        M.AutoInit()
    }

    render() {
        const {unansweredQuestions,answeredQuestions} = this.props

        return (
            <div className="row question-container">
                <div className="col s12 card-panel question-tabs">
                    <ul className="tabs">
                        <li className="tab col s6"><a className="active" href="#test1">Unanswered Questions</a></li>
                        <li className="tab col s6"><a className="active" href="#test2">Answered Questions</a></li>
                    </ul>
                </div>
                <div id="test1" className="col s12 card-panel questions">
                    {
                        unansweredQuestions.map(questionId => (
                            <Question key={questionId} questionId={questionId} answered={false}/>
                        ))
                    }
                </div>
                <div id="test2" className="col s12 card-panel questions">
                    {
                        answeredQuestions.map(questionId => (
                            <Question key={questionId} questionId={questionId} answered={true}/>
                        ))
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps({questions,users,authedUser}) {
    const questionsId = Object.keys(questions)
    const userAnswers = Object.keys(users[authedUser].answers)
    const unansweredQuestions = questionsId.filter(id=> !userAnswers.includes(id))
    const answeredQuestions = questionsId.filter(id=> userAnswers.includes(id))

    function sortQuestions(a,b){
        return questions[b].timestamp - questions[a].timestamp
    }

    return {
        unansweredQuestions: unansweredQuestions.sort(sortQuestions),
        answeredQuestions: answeredQuestions.sort(sortQuestions)
    }
}

export default connect(mapStateToProps)(Home)