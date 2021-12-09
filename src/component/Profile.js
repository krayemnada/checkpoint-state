import React, { Component } from 'react'
import imageInSrc from "./idee-photo-profil-facebook-originale.jpg"
import "../Profile.css"

export class Profile extends Component {
    state ={
      title : "This is Your Account",
        FullName : "Nada Kraiem",
        Bio : "Welcome Everyone",
        Profession :"Full Stack Developer",
        src:imageInSrc,
        button : "Sign in with facebook",
        button1 : "Sign in with Google",
        button2: "Sign in with Apple Account",
       counter :0
       
      }
      componentDidMount () {
        setInterval (() => {
          this.setState({ counter: this.state.counter +1 })
        },1000)
      }
  render() {
    return (
      <div>
        <h1 style={{color: "white"}}>{this.state.title} </h1>
 <h3 style={{color: "white"}}>{this.state.FullName}</h3>
 <h3 style={{color: "white"}}> {this.state.Bio} </h3>
 <h3 style={{color: "white"}}> {this.state.Profession} </h3>
 
 <img src={this.state.src} alt="" />
 <br/>
 <br/>

 <button>{this.state.button}</button>
 <br/>
 <br/>
 

 <button>{this.state.button1} </button>
 <br/>
 <br/>


 <button> {this.state.button2}</button>
      </div>
    )
  }
}

export default Profile
