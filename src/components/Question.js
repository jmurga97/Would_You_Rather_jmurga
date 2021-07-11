import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

class Question extends Component {
    render() {
        const {author,authorName,avatar,textPreview} = this.props

        return (
            <div className="row">
                <div className="col s12">
                <div className="card background-card">
                    <div className="card-content white-text">
                    <span className="card-title">{authorName} asks: </span>
                    <div className='centrar'>
                        <div className='question-avatar'>
                            <img className='circle responsive-img z-depth-3' alt={author} src={avatar}/>
                        </div>
                        <div className='question-text'>
                            <h5>Would you rather</h5>
                            <p className='truncate'>
                                {textPreview} ...
                            </p>
                        </div>
                    </div>
                    </div>
                    <div className="card-action">
                        {/*With te parameter state on Link I will be passing
                        data that will let me know if the Question was answered. Depending
                        on this, QuestionDetail will render a specific component. */}
                        <Link to = {{
                            pathname: `/question/${this.props.questionId}`,
                            state: {
                                answered: this.props.answered
                            }
                        }}>
                            View Poll
                        </Link>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({users,questions},{questionId}){
    const author = questions[questionId].author
    const authorName = users[author].name
    const avatar = users[author].avatarURL
    const textPreview = questions[questionId].optionOne.text

    return{
        author,
        authorName,
        avatar,
        textPreview
    }
}

export default connect(mapStateToProps)(Question)