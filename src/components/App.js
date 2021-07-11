
//import './App.css';
import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import Nav from './Nav'
import Login from './Login'
import Home from './Home'
import AddQuestion from './AddQuestion'
import Leaderboard from './Leaderboard'
import QuestionDetail from './QuestionDetail'
import Page404 from './Page404'
import LoadingBar  from 'react-redux-loading'
import '../App.css';


export class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }


  render() {

    const {authedUser} = this.props
    console.log('AUTHED USER IS:', authedUser)
    return (
      <div>
        <Router>
          <Fragment>
            <LoadingBar/>
            <Nav/>
            {this.props.loading === true
              ? null
              : <div>
                  { authedUser
                    ? <div>
                        <Route path='/' exact component={Home}/>
                        <Route path='/add' exact component={AddQuestion}/>
                        <Route path='/leaderboard' exact component={Leaderboard}/>
                        <Route path='/question/:id' component={QuestionDetail}/>
                        <Route path='/404' component={Page404}/>
                      </div>
                    : <Route path='/' component={Login}/>
                  }
                </div>
            }

          </Fragment>
        </Router>

      </div>
    )
  }
}

function mapStateToProps({authedUser}) {
  return {
    authedUser,
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
