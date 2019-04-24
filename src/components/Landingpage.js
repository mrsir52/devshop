import React, { Component } from 'react'
import '../App.css';
import background from '../img/ai-blur.jpg'

const styles = {
    background: {
        backgroundImage: `url(${background})`
      
    }
};

class Landingpage extends Component {
  render() {
    return (
      <div className="landing" style={styles.background}>
      <div className="container">
      <h1>Hello from Landing</h1>
      <button>Login</button>
      <button>sign up</button>
      </div>
      
       
      </div>
    )
  }
}

export default Landingpage