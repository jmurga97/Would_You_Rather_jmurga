import React, { Component } from 'react'
import {connect} from 'react-redux'
import {handleSaveAnswer} from '../actions/questions'

class QuestionPoll extends Component {

    state = {
        answer: 'optionOne'
    }
    handleChange = (e) => {
        this.setState({answer: e.target.value})
    }
    submitAnswer = (e) => {
        e.preventDefault();
        this.props.dispatch(handleSaveAnswer(this.state.answer,this.props.qid))
    }

    render() {
        const {author,authorName,avatar,optionOne,optionTwo} = this.props

        return (
            <div className="row question-poll-container">
                <div className="col s12 question-poll-child">
                <div className="card question-poll-card">
                    <div className="card-content white-text">
                    <span className="card-title">{authorName} asks: </span>
                    <div className='centrar'>
                        <div className='question-avatar'>
                            <img className='circle z-depth-3 responsive-img' alt={author} src={avatar}/>
                        </div>
                        <div className='question-text centrar question-form'>
                            <h3>Would you rather: </h3>
                            <form className='centrar' onSubmit={this.submitAnswer}>
                                <div className='question-poll-option' >
                                <label >
                                    <input
                                    type="radio"
                                    name='answers'
                                    value='optioneOne'
                                    checked={this.state.answer === 'optionOne'}
                                    onChange={this.handleChange}
                                    />
                                    <span className='white-text'>{optionOne.charAt(0).toUpperCase() + optionOne.slice(1)} ?</span>
                                </label>
                                </div>
                                <div className='question-poll-option'>
                                <label >
                                    <input
                                    type="radio"
                                    name='answers'
                                    value='optionTwo'
                                    checked={this.state.answer === 'optionTwo'}
                                    onChange={this.handleChange}
                                    />
                                    <span className='white-text'>{optionTwo.charAt(0).toUpperCase() + optionTwo.slice(1)} ?</span>
                                </label>
                                </div>
                                <button type='submit' className='btn'>Vote</button>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({users,questions},{qid}){

        const author = questions[qid].author
        const authorName = users[author].name
        const avatar = users[author].avatarURL
        const optionOne = questions[qid].optionOne.text
        const optionTwo = questions[qid].optionTwo.text

    return{
        author,
        authorName,
        avatar,
        optionOne,
        optionTwo,
    }
}

export default connect(mapStateToProps)(QuestionPoll)
