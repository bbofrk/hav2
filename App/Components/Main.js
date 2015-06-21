'use strict'

var React = require('react-native');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');
var LinearGradient = require('react-native-linear-gradient');
var FacebookTabBar = require('./FacebookTabBar');
var deviceWidth = require('Dimensions').get('window').width;
var ScrollableTabView = require('react-native-scrollable-tab-view');

var FacebookLoginManager = require('NativeModules').FacebookLoginManager;
var FBLogin = require('react-native-facebook-login');

var Login = require('./Login');



var {
  View,
  Text,
  StyleSheet,
  ScrollView,
} = React;

var Main = React.createClass({
  render: function() {
    let blue = this.props.backgroundColor1;
    let white = this.props.backgroundColor2;
    // console.log(Parse.User.current());
    var _this = this;
    return (
      <LinearGradient colors={[blue, white]} style={styles.main}>
        <View style={styles.container}>
          <ScrollableTabView renderTabBar={() => <FacebookTabBar />}>
            <ScrollView tabLabel="ion|ios-paper" style={styles.tabView}>
              <View style={styles.card}>
                <Text>News</Text>
              </View>
            </ScrollView>
            <ScrollView tabLabel="ion|person-stalker" style={styles.tabView}>
              <View style={styles.card}>
                <Text>Friends</Text>
              </View>
            </ScrollView>
            <ScrollView tabLabel="ion|ios-chatboxes" style={styles.tabView}>
              <View style={styles.card}>
                <Text>Messenger</Text>
              </View>
            </ScrollView>
            <ScrollView tabLabel="ion|ios-world" style={styles.tabView}>
              <View style={styles.card}>
                <Text>Notifications</Text>
              </View>
            </ScrollView>
            <ScrollView tabLabel="ion|navicon-round" style={styles.tabView}>
              <View style={styles.card}>
              </View>
            </ScrollView>
          </ScrollableTabView>
        </View>
      </LinearGradient>
    );
  }
});

var styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    marginTop: 30,
  },
  tabView: {
    width: deviceWidth,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 150,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});

module.exports = Main;
