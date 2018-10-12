import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  state = {
    name : '',
    mail : '',
    pwd : ''
  }

  nameUpdate = (e) => {
    console.log(e.target.value);
    this.setState({
      name : e.target.value
    });
  }

  mailUpdate = (e) => {
    console.log(e.target.value);
    this.setState({
      mail : e.target.value
    });
  }

  pwdUpdate = (e) => {
    console.log(e.target.value);
    this.setState({
     pwd : e.target.value 
    });
  }

  signup = () => {
    axios
      .post('http://localhost:4000/signup', {
        name : this.state.name,
        mail : this.state.mail,
        pwd : this.state.pwd
      })
      .then( res => {
        console.log(res);
      });
  }

  signin = () => {
    axios
      .post('http://localhost:4000/signin', {
        mail : this.state.mail,
        pwd : this.state.pwd
      })
      .then( res => {
        window.localStorage.setItem('token', res.data);
        console.log(res);
      });
  }

  getProtectedData = () => {
    const token = window.localStorage.getItem('token');
    console.log(token);
    axios
      .get('http://localhost:4000/users', {
        params : {
          token : token
        }
      })
      .then( res => {
        console.log(res);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <h3>SIGNUP</h3>
            <form className="form">
              <input name="name" className="name" value={this.state.name} onChange={this.nameUpdate}/><br/>
              <input name="mail" className="mail" value={this.state.mail} onChange={this.mailUpdate}/><br/>
              <input type="password" name="pwd" className="pwd" value={this.state.pwd} onChange={this.pwdUpdate}/><br/>
              <button type="button" onClick={this.signup}>SIGNUP</button>
            </form>

            <h3>SIGNIN</h3>
            <form className="form">
              <input name="mail" className="mail" value={this.state.mail} onChange={this.mailUpdate}/><br/>
              <input type="password" name="pwd" className="pwd" value={this.state.pwd} onChange={this.pwdUpdate}/><br/>
              <button type="button" onClick={this.signin}>SIGNIN</button>
            </form>

            <h3>Acces données protégées</h3>
            <button type="button" onClick={this.getProtectedData}>SIGNIN</button>
        </header>
      </div>
    );
  }
}

export default App;
