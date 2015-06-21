'use strict';

var React = require('react-native');
var Parse = require('parse').Parse;
Parse.initialize('NbTDXnwo9JwdCIz6LAIGEJxPqutcFnpZSolxi4Wo', 'yPgSpQoouc95OY70CYrUoUM2zBWkbOfpVz9uPFAx');
var FBLogin = require('react-native-facebook-login');
var LinearGradient = require('react-native-linear-gradient');
var FacebookLoginManager = require('NativeModules').FacebookLoginManager;
var Main = require('./Main');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var Login = React.createClass({
  getInitialState: function() {
    return {
      loadingCurrentUser: true
    }
  },
  handleLogin: function(fbData) {
    var credentials = fbData.credentials;
    let authData = {
      id: credentials.userId,
      access_token: credentials.token,
      expiration_date: credentials.tokenExpirationDate
    };
    Parse.FacebookUtils.logIn(authData, {
      success: () => {
        this.setState({loadingCurrentUser: false});
      },
      error: (user, error) => {
        switch (error.code) {
          case Parse.Error.INVALID_SESSION_TOKEN:
            Parse.User.logOut().then(() => {
              this.handleLogin(credentials);
            });
            break;
          default:
            this.setState({loadingCurrentUser: false});
            alert(error.message);
        }
      }
    });
  },
  render: function() {
    let blue = '#7AC8DB';
    let white = '#EFF0ED';
    if (!this.state.loadingCurrentUser) {
      return(
        <Main
          backgroundColor1={blue}
          backgroundColor2={white}
          loadingCurrentUser={true}
        />
      )
    }
    var _this = this;
    return (
      <LinearGradient colors={[blue, white]} style={styles.linearGradient}>
        <Text style={styles.titleOne}>Why show Gratitude?</Text>
        <Text style={styles.titleOne}>Cause you</Text>
        <Text style={styles.titleTwo}>Hav2</Text>

        <FBLogin style={styles.loginButton}
          permissions={["email","user_friends"]}
          onLogin={this.handleLogin}
          onLogout={function(){
            console.log("Logged out.");
            _this.setState({ user : null });
          }}
          onLoginFound={this.handleLogin}
          onLoginNotFound={function(){
            console.log("No user logged in.");
            _this.setState({ user : null});
          }}
          onError={function(data){
            console.log("ERROR");
            console.log(data);
          }}
          onCancel={function(){
            console.log("User cancelled.");
          }}
          onPermissionsMissing={function(data){
            console.log("Check permissions!");
            console.log(data);
          }}
        />
      </LinearGradient>
    );
  }
});

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleOne: {
    fontFamily: 'Allura-Regular',
    fontSize: 35,
  },
  titleTwo: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  loginButton: {
    marginTop: 30
  }
});

module.exports = Login;
