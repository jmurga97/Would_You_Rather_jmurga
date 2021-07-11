import React, { Component } from 'react'
import M from 'materialize-css'

export default class Users extends Component {
    componentDidMount(){
        M.AutoInit()
    }
    render() {
        //This props are from Leaderboard component
        const {user} = this.props
        return (
            <div className="row">
                <div className="col s12">
                <div className="card background-card">
                    <div className="card-content white-text">
                    <span className="card-title">{user.authorName}</span>
                    <div className='centrar'>
                        <div className='question-avatar'>
                            <img className='circle responsive-img z-depth-3' alt={user.userId} src={user.avatarURL}/>
                        </div>
                        <div className='leaderboard-points centrar'>
                        <h4>Results: </h4>
                        <div className='leaderboard-results centrar'>
                            <div className='card-panel white black-text centrar'>
                                    <p>Answered Questions:</p>
                                    <b>{user.answersCount}</b>
                            </div>
                            <div className='card-panel white black-text centrar'>

                                    <p>Created Questions:</p>
                                    <b>{user.questionsCount}</b>

                            </div>
                        </div>
                        </div>
                        <div className='leaderboard-score'>
                            <div className='card-panel centrar'>
                                <h5 className='black-text'>Score</h5>
                                <hr className='black-text'></hr>
                                <b className='circle teal centrar pulse z-depth-2'>{user.totalCount}</b>
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
