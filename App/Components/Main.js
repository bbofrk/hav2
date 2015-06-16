'use strict'

var React = require('react-native');
var ParseReact = require('parse-react');
var {
  View,
  Text,
  StyleSheet
} = React;

var Main = React.createClass({

  render: function() {
    console.log( ParseReact.currentUser);
    return (
      <View>
        <Text>Working</Text>
      </View>
    );
  }
});

module.exports = Main;
