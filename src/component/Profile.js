import React, { Component } from 'react'
import imageInSrc from "./idee-photo-profil-facebook-originale.jpg"
export class Profile extends Component {
    state ={
        FullName : "Nada Kraiem",
        Bio : "Welcome Everyone",
        Profession :"Full Stack Developer",
        src:imageInSrc,
        alt :"profile_img",
       
      }
  render() {
    return (
      <div>
 <p>{this.state.FullName}</p>
 <p> {this.state.Bio} </p>
 <p> {this.state.Profession} </p>
 <p> {this.state.Bio} </p>
 <img src={this.state.src} alt="" />
      </div>
    )
  }
}

export default Profile
