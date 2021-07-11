import React from 'react'
import image from '../images/background-sidenav.jpg'
import { NavLink } from 'react-router-dom'
import { MdHome,MdQuestionAnswer,MdStars} from "react-icons/md";

export default function SideNav(props) {
    return (

            <ul id="slide-out" class="sidenav">
                    <li>
                        <div class="user-view">
                        <div class="background">
                            <img alt='background sidenav' src={image}/>
                        </div>
                        <img class="circle" alt={`avatar of ${props.name}`} src={props.avatar}/>
                        <span class="white-text name">{props.name}</span>
                        {
                            props.authedUser && (
                                <div>
                                    <div>Hello, {props.authedUser}</div>
                                    <button onClick={props.handleLogout} className='btn'>Logout</button>
                                </div>
                            )
                        }

                        </div>
                    </li>
                    <li>
                        <NavLink to='/' className='centrar'>
                            <MdHome className='icon'/> Home
                        </NavLink>
                    </li>
                    <li >
                        <NavLink to='/add' className='centrar'>
                            <MdQuestionAnswer className='icon'/> New Question
                        </NavLink>
                    </li>
                    <li >
                        <NavLink to='/leaderboard' className='centrar'>
                            <MdStars className='icon'/> Leaderboard
                        </NavLink>
                    </li >
            </ul>

    )
}
