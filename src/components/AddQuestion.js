import React, { Component } from 'react'
import {connect} from 'react-redux'
import image from '../images/question.jpg'
import { Redirect } from 'react-router'
import {handleAddQuestion} from '../actions/questions'
import M from 'materialize-css'

class AddQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
        toHome: false
    }

    handleChange = (e) => {
        const value = e.target.value
        console.log(e.target.value)
        this.setState({
            [e.target.name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        //I need optionOneText, optionTwoText and the authedUser to dispatch the action
        this.props.dispatch(handleAddQuestion(this.state.optionOne, this.state.optionTwo))
        M.toast({html: 'Your question have been added!'})
        this.setState({
            optionOne:'',
            optionTwo: '',
            toHome: true
        })
    }

    componentDidMount(){
        M.AutoInit()
    }

    render() {

        if(this.state.toHome === true){
            return <Redirect to={'/'}/>
        }

        return (
            <div className="row centrar add-question-row">
                <div className="col s12">
                <div className="card">
                    <div className="card-image">
                    <img src={image} alt='Add Question'/>
                    <span className="card-title">Create New Question</span>

                    </div>
                    <div className="card-content">
                    <p>Complete the question: </p>
                    <h5>Would you rather... </h5>
                    <hr></hr>
                    <form onSubmit={this.handleSubmit}>
                    <div className="row centrar">
                        <div className="input-field col s12">
                            <input id="optionOne"
                                name='optionOne'
                                value={this.state.optionOne}
                                onChange={this.handleChange}
                                type="text" />
                            <label htmlFor="optionOne">Option One: </label>
                        </div>
                        <b>OR</b>
                        <div className="input-field col s12">
                            <input id="optionTwo"
                                name='optionTwo'
                                value={this.state.optionTwo}
                                onChange={this.handleChange}
                                type="text" />
                            <label htmlFor="optionTwo">Option Two: </label>
                        </div>
                    </div>
                    <button className="btn-floating halfway-fab waves-effect waves-light orange pulse"
                        type='submit'
                        disabled = {this.state.optionOne && this.state.optionTwo ? false : true}>+</button>
                    </form>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({authedUser}){
    return {authedUser}
}

export default connect(mapStateToProps)(AddQuestion)