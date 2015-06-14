/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Parse = require('parse').Parse;
Parse.initialize('NbTDXnwo9JwdCIz6LAIGEJxPqutcFnpZSolxi4Wo', 'zfSErEJxguylcH9lnHsjWfZGV4mCwHWPkJexnlX7');
var ParseReact = require('parse-react');
var FBLogin = require('react-native-facebook-login');
var LinearGradient = require('react-native-linear-gradient');
var FacebookLoginManager = require('NativeModules').FacebookLoginManager;

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;


var hav2 = React.createClass({
  getInitialState() {
    return {
      result: '...'
    }
  },

  login() {
    FacebookLoginManager.newSession((error, info) => {
      if (error) {
        this.setState({result: error});
      } else {
        this.setState({result: info});
      }
    });
  },

  render() {
    var _this = this;
    return (
      <LinearGradient colors={['#80E0E2', '#FFC0CB']} style={styles.linearGradient}>
        <Text style={styles.titleOne}>Why show Gratitude?</Text>
        <Text style={styles.titleOne}>Cause you</Text>
        <Text style={styles.titleTwo}>Hav2</Text>

        <FBLogin style={styles.loginButton}
          permissions={["email","user_friends"]}
          onLogin={function(data){
            console.log("Logged in!");
            console.log(data);
            Parse.User._logInWith('facebook', {
              authData: {
                id: data.userId,
                access_token: data.token,
                expiration_date: data.tokenExpirationDate
              }
            });
          }}
          onLogout={function(){
            console.log("Logged out.");
            _this.setState({ user : null });
          }}
          onLoginFound={function(data){
            console.log("Existing login found.");
            console.log(data);
            _this.setState({ user : data.credentials });
          }}
          onLoginNotFound={function(){
            console.log("No user logged in.");
            _this.setState({ user : null });
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

AppRegistry.registerComponent('hav2', () => hav2);
