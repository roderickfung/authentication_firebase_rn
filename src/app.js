import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  state = { loggedIn: null };

  // this is a life cycle method
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyArRkMPxyrsVqukTIY8Cq50e2weUizxeTg',
    authDomain: 'authentication-db0c0.firebaseapp.com',
    databaseURL: 'https://authentication-db0c0.firebaseio.com',
    storageBucket: 'authentication-db0c0.appspot.com',
    messagingSenderId: '72276480495'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return(
          <CardSection>
            <Button onPress={ () => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <CardSection><Spinner /></CardSection>
    }
  }

  render () {
    return (
      <View>
        <Header headerText = 'Authentication' />
        { this.renderContent() }
      </View>
    );
  }
}

export default App;
