import React, {Component} from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'; 
import userlogin from './user.png'
import Projects from './Projects.js'
import {
  Link
} from 'react-router-dom'
firebase.initializeApp({
    apiKey: "AIzaSyByKtMuyDBYeeUf9xmnBYV4Y5kXBoPMIsk",
    authDomain: "example-login-edc79.firebaseapp.com",
    databaseURL: "https://example-login-edc79.firebaseio.com",
    projectId: "example-login-edc79",
    storageBucket: "example-login-edc79.appspot.com",
    messagingSenderId: "323406922598"
})
const firebaseAuthKey = "firebaseAuthInProgress";
const appTokenKey = "appToken";
const firebaseUser = "userData";

class Login extends Component{
    state = {
      user: false,
      login: false,
    }
    uiconfig = {
      sigInFlow: "popup",
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccess: () => false
      }
    }
    

  componentDidMount = () => {

    firebase.auth().onAuthStateChanged((user) => {
       localStorage.setItem(firebaseAuthKey, "1");
        localStorage.removeItem(firebaseAuthKey);
        localStorage.setItem(firebaseUser, JSON.stringify(user));
          this.setState({user: false})
        /*user.getIdToken().then((idtoken) => {
          localStorage.setItem(appTokenKey, idtoken);
        })*/
        //window.location.reload()
      })
  }
  handleGoogleLogout = () => {
    firebase.auth().signOut()
      .then(() => {
        localStorage.removeItem(appTokenKey);
        localStorage.removeItem(firebaseUser);
        this.setState({user: true})
        window.location.reload();
        //localStorage.removeItem(firebaseAuthKey)
      })
  }
  render() {
    let User = JSON.parse(localStorage.getItem(firebaseUser));
    console.log(User)
    return(
        <header className="header_login">
        <nav className="header_navigation_access"> 
        <div className="spacer"/>         
          <div className="header_navigation_login">
            <ul>
              <li>
                Bienvenido(a): 
              </li>
              {User ? (
                  ""
              ):(
                  <img src={userlogin} weigth='20px' height='20px'/>
              )}
              {User ? (
                <li>
                  {User.displayName} 
                </li>
              ):(
                  ""
              )}
            </ul>
          </div>
        </nav>
        {User ? (
            <div className="MenuPrincipal">
              <div className = "menu">
                <div className="submenuimg">
                  <img src={User.photoURL}/>
                </div>
                <div className="submenu">
                  Informacion Personal
                  <br/>
                  <br/>
                  <br/>
                  Nombre:
                  <br/>
                  {User.displayName}
                  <br/><br/>
                  Correo:
                  <br/>
                  {User.email}
                  <br/><br/>
                  Telefono:
                  <br/>
                  {User.phoneNumber}
                  <br/><br/>
                  <Link to="/View_Projects">
                    <button>
                      Ver Proyectos
                    </button>
                  </Link>
                  <button onClick={this.handleGoogleLogout}>
                    Cerrar Sesión
                  </button> 
                </div>
              </div>
            </div>
          ):(
            <StyledFirebaseAuth 
                  uiConfig={this.uiconfig}
                  firebaseAuth = {firebase.auth()}
            />
          )}
      </header>
      );
  }
}
 
export default Login;