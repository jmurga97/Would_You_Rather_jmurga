import React, { Component } from 'react'
import {connect} from 'react-redux'
import Users from './Users'

class Leaderboard extends Component {
    render() {
        console.log('userInfo', this.props.usersInfo)
        return (
            <div className="row question-container">
                <div className="col s12 card-panel questions">
                    {
                        this.props.usersInfo.map(user => (
                            <Users key={user.userId} user={user}/>
                        ))
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps({users}){
    const usersInfo = Object.keys(users)
        .map(userId => {
            const avatarURL = users[userId].avatarURL
            const authorName = users[userId].name
            const answersCount = Object.keys(users[userId].answers).length
            const questionsCount = users[userId].questions.length
            const totalCount = questionsCount + answersCount
            return {
                userId,
                authorName,
                avatarURL,
                answersCount,
                questionsCount,
                totalCount
            }
        })

    return {
        usersInfo: usersInfo.sort((a,b) => b.totalCount - a.totalCount)
    }
}

export default connect(mapStateToProps)(Leaderboard)