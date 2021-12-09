import React, { Component } from 'react'
import Profile from './component/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/header/Header';
import "./App.css"

export class App extends Component {
  state = {
    isShow:false
  }
  handleShow = () =>{
    this.setState({ isShow:! this.state.isShow });
  }
  render() {
    return (
      <div className='all'>
        <Header/>
        
      <div style={{marginTop : "20px", textAlign:"center"}}>
        <button onClick={this.handleShow}>{this.state.isShow ? "Hide" : "Show"}</button>
        {this.state.isShow === true ? <Profile/> : null}
      </div>
      
      </div>
    )
  }
}

export default App


