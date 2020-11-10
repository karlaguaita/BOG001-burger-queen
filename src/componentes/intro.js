import React from "react";
import './intro.scss';
import bqImg from '../bqImg/img/src/burgerlogotitulo.png';
import { Component } from 'react';
import { Redirect } from 'react-router-dom';


class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({redirect: '/form'})
    }, 3000);
  }

  render(){
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <div className="Intro">
        <img src= {bqImg} alt ="" className="bqImg"/>
      </div>
    );
  }
  
}

 export default Intro; 
