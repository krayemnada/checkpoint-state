import React, { Component } from 'react'
import Profile from './component/Profile';


export class App extends Component {
  state = {
    isShow:false
  }
  handleShow = () =>{
    this.setState({ isShow:! this.state.isShow });
  }
  render() {
    return (
      <div style={{marginTop : "250px", textAlign:"center"}}>
        <button onClick={this.handleShow}>{this.state.isShow ? "Hide" : "Show"}</button>
        {this.state.isShow === true ? <Profile/> : null}
      </div>
    )
  }
}

export default App


