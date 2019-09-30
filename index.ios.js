/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Home from './components/home';
import ImageDetail from './components/image_detail';

import {
  HOME,
  IMAGE_DETAIL
} from './routes';

class PesquisaDeImagens extends Component {
  renderScene(route, navigator) {
    switch(route.id) {
      case HOME:
        return <Home navigator={navigator} />
      case IMAGE_DETAIL:
        return <ImageDetail onPressBack={navigator.pop} {...route.passProps} />
      default:
        return <Home />
    }
  }

  render() {
    return (
      <Navigator
        renderScene={this.renderScene}
        initialRoute={{ id: HOME }}
      />
    );
  }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('PesquisaDeImagens', () => PesquisaDeImagens);
