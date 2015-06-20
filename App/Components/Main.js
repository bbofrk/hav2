'use strict'

var React = require('react-native');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');
var LinearGradient = require('react-native-linear-gradient');

var {
  View,
  Text,
  StyleSheet
} = React;

var Main = React.createClass({
  render: function() {
    let blue = this.props.backgroundColor1;
    let white = this.props.backgroundColor2;
    return (
      <LinearGradient colors={[blue, white]} style={styles.main}>
        
      </LinearGradient>
    );
  }
});

var styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

module.exports = Main;
