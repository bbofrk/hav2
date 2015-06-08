/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var FBLogin = require('react-native-facebook-login');
var LinearGradient = require('react-native-linear-gradient');
var FacebookLoginManager = require('NativeModules').FacebookLoginManager;

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
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
        <FBLogin style={{ marginBottom: 10, }}
          permissions={["email","user_friends"]}
          onLogin={function(data){
            console.log("Logged in!");
            console.log(data);
            _this.setState({ user : data.credentials });
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('hav2', () => hav2);
