import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {StackActions} from '@react-navigation/native';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(StackActions.replace('LoginScreen'));
    }, 2000);
  }

  render() {
    return (
      <View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 250,
          }}>
          <Image
            source={require('../images/logo.png')}
            style={{
              width: 100,
              height: 100,
            }}
          />
        </View>
      </View>
    );
  }
}

export default SplashScreen;
