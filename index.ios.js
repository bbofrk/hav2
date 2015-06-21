/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry
} = React;
var Login = require('./App/Components/Login');

var hav2 = React.createClass({
  render: function()
  {
    return (
      <Login />
    )
  }
});

AppRegistry.registerComponent('hav2', () => hav2);
