import React, { Component } from 'react'
import { GiCube } from "react-icons/gi";
import M from 'materialize-css'
import { connect } from 'react-redux';
import {setAuthedUser} from '../actions/authedUser'


class Login extends Component {

    handleChange = (e) =>{
        this.props.dispatch(setAuthedUser(e.target.value))
    }

    /*
        TODO:
            PROGRAMAR LA LOGICA DE RENDERIZADO PARA VERIFICAR SI SE MUESTRA LOGIN O NO
            EN CASO DE TENER LA SESION INICIADA.
    */
    componentDidMount(){
        M.AutoInit()
    }
    render() {

        const {usersIdentity} = this.props
        return (
            <div className=' centrar container'>
                <div className="card-panel login-container centrar">
                    <div className='card-panel login-title centrar'>
                        <h1>Welcome to Would you Rather App!</h1>
                        <div>Please, sign in to continue.</div>
                    </div>
                    <GiCube className='login-logo'/>
                    <h4>Sign In</h4>
                    <div className='input-field'>
                        <select value='Choose your option' onChange={this.handleChange}>
                            <option value="Choose your option" disabled>Choose your option</option>
                            {usersIdentity.map((user,index) => (
                                <option key={index} value={user.userId}>
                                    {user.userId}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({users}) {
    const usersIdentity = Object.keys(users)
        .map(userId => {
            const avatarURL = users[userId].avatarURL
            return {
                userId,
                avatarURL
            }
        })

    return{
        usersIdentity
    }

}

export default connect(mapStateToProps)(Login)