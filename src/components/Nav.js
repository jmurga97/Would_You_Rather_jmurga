import React, { Component } from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import {GiVenezuela} from 'react-icons/gi'
import { MdHome,MdQuestionAnswer,MdStars} from "react-icons/md";
import { connect } from 'react-redux';
import {setAuthedUser} from '../actions/authedUser'
import M from 'materialize-css'
import SideNav from './SideNav';

class Nav extends Component {

    handleLogout = () => {
        this.props.dispatch(setAuthedUser(''))
    }

    componentDidMount(){
        M.AutoInit()
    }

    render() {
        const {authedUser,userAvatar,userName} = this.props
        return (
            <nav>
                {
                    authedUser && (
                        <SideNav avatar={userAvatar}
                            name={userName}
                            authedUser={authedUser}
                            handleLogout={this.handleLogout}/>
                    )
                }

                <div className="nav-wrapper centrar">
                <div className='centrar'>
                    <GiVenezuela className='logo'/>
                    <h1>WYA</h1>
                </div>
                <ul id="nav-mobile" className="right">
                    <li className='hide-on-med-and-down '>
                        <NavLink to='/' className='centrar'>
                            <MdHome className='icon'/> Home
                        </NavLink>
                    </li>
                    <li className='hide-on-med-and-down '>
                        <NavLink to='/add' className='centrar'>
                            <MdQuestionAnswer className='icon'/> New Question
                        </NavLink>
                    </li>
                    <li className='hide-on-med-and-down '>
                        <NavLink to='/leaderboard' className='centrar'>
                            <MdStars className='icon'/> Leaderboard
                        </NavLink>
                    </li >
                    {authedUser && (
                        <li className='user-nav hide-on-med-and-down'>
                            Hello, {authedUser}
                            <button onClick={this.handleLogout} className='btn'>Logout</button>
                        </li>
                    )}
                    <li>
                        <a data-target="slide-out" className="sidenav-trigger"><i class="material-icons">menu</i></a>
                    </li>
                </ul>

                </div>

            </nav>
        )
    }
}

function mapStateToProps({authedUser, users}) {
    console.log(users)
    return{
        authedUser,
        userName: authedUser ? users[authedUser].name : null,
        userAvatar: authedUser ? users[authedUser].avatarURL : null
    }
}

export default withRouter(connect(mapStateToProps)(Nav))
