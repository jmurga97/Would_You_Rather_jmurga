import React, { Component } from 'react'
import { FcOk } from "react-icons/fc";
import {connect} from 'react-redux'

class QuestionResults extends Component {
    render() {
        const {authorName, author, avatar, optionOne,optionTwo,
            registeredUsers, optionOneVotes, optionTwoVotes, authedUserAnswer, optionOnePercentage, optionTwoPercentage} = this.props
        console.log(this.props)
        return (
            <div className="row question-poll-container">
            <div className="col s12 question-poll-child">
            <div className="card question-poll-card">
                <div className="card-content white-text">
                <span className="card-title">Asked by {authorName}</span>
                <div className='centrar'>
                    <div className='question-avatar'>
                        <img className='circle z-depth-3 responsive-img' alt={author} src={avatar}/>
                    </div>
                    <div className='question-text centrar question-form'>
                        <h3>Results: </h3>
                        <div className='question-results-container'>
                            <div className='card-panel'
                                style={{background: authedUserAnswer === 'optionOne' ? '#00695c' : '#eeeeee',
                                    position:'relative' }}>
                                {authedUserAnswer === 'optionOne' && (
                                    <FcOk className='question-result-icon'/>
                                )}

                                <h5 className="black-text">
                                    {optionOne.charAt(0).toUpperCase() + optionOne.slice(1)} ?
                                </h5>
                                <div>
                                    <progress max='100' value={optionOnePercentage}>{optionOnePercentage}</progress>
                                </div>
                                <p className='black-text'>{`${optionOneVotes} of ${registeredUsers} votes`}</p>
                            </div>

                            <div className='card-panel'
                                style={{background: authedUserAnswer === 'optionTwo' ? '#00695c' : '#eeeeee',
                                    position:'relative' }}>

                                {authedUserAnswer === 'optionTwo' && (
                                    <FcOk className='question-result-icon'/>
                                )}
                                <h5 className="black-text">
                                    {optionTwo.charAt(0).toUpperCase() + optionTwo.slice(1)} ?
                                </h5>
                                <div>
                                    <progress max='100' value={optionTwoPercentage}>{optionTwoPercentage}</progress>
                                </div>
                                <p className='black-text'>{`${optionTwoVotes} of ${registeredUsers} votes`}</p>
                            </div>
                        </div>

                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        )
    }
}

function mapStateToProps({authedUser,users,questions},{qid}){
    const author = questions[qid].author
    const authorName = users[author].name
    const avatar = users[author].avatarURL
    const optionOne = questions[qid].optionOne.text
    const optionTwo = questions[qid].optionTwo.text

    const registeredUsers = Object.keys(users).length
    const optionOneVotes = questions[qid].optionOne.votes.length
    const optionTwoVotes = questions[qid].optionTwo.votes.length
    const optionOnePercentage = ((questions[qid].optionOne.votes.length/registeredUsers)*100).toFixed(2)
    const optionTwoPercentage = ((questions[qid].optionTwo.votes.length/registeredUsers)*100).toFixed(2)


    const authedUserAnswer = questions[qid].optionOne.votes.includes(authedUser)
        ? 'optionOne'
        : 'optionTwo'

    console.log('THIS IS AUTHED USER ANSWER ', authedUserAnswer)
    return{
        author,
        authorName,
        avatar,
        optionOne,
        optionTwo,
        optionOneVotes,
        optionTwoVotes,
        authedUserAnswer,
        registeredUsers,
        optionOnePercentage,
        optionTwoPercentage
    }
}

export default connect(mapStateToProps)(QuestionResults)