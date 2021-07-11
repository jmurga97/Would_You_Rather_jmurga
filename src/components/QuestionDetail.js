import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router'
import QuestionPoll from './QuestionPoll'
import QuestionResults from './QuestionResults'


class QuestionDetail extends Component {
    render() {
        //If my authedUser already answered the question, show the results. If not, show the poll
        if(!this.props.isQuestion){
            return <Redirect to={'/404'}/>
        }
        return (
            <div>
                {this.props.isAnswered
                    ? <QuestionResults qid={this.props.match.params.id}/>
                    : <QuestionPoll qid={this.props.match.params.id}/>
                }
            </div>
        )
    }
}

function mapStateToProps({authedUser,users,questions},props) {
    const {id} = props.match.params
    const isAnswered = Object.keys(users[authedUser].answers).includes(id)
    const isQuestion = Object.keys(questions).includes(id)

    return{
        isAnswered,
        isQuestion
    }
}

export default withRouter( connect(mapStateToProps)(QuestionDetail) )