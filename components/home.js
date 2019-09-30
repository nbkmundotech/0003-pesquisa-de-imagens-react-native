import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import SearchBar from './search_bar';
import ImageList from './image_list';
import ImageDetail from './image_detail';

import { IMAGE_DETAIL } from '../routes';

const API_ENDPOINT = 'https://api.cognitive.microsoft.com/bing/v5.0/images/search';
const API_KEY = '5b4eb3dd414a427ab20765d7aae66394';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      buscando: false
    };
  }

  onSearchSubmit(palavraChave) {
    const query = `?q=${palavraChave}&mkt=pt-br`;

    this.setState({ buscando: true });

    fetch(`${API_ENDPOINT}${query}`, {
      headers: {
        'Ocp-Apim-Subscription-Key': API_KEY
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({ items: responseJson.value });
    });
  }

  onItemClick(item) {
    console.log("Item foi clicado", item);

    // argumento é o 'route'
    this.props.navigator.push({
      id: IMAGE_DETAIL,
      passProps: {
        image: item,
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBar onSearchSubmit={this.onSearchSubmit.bind(this)} />

        {
          this.state.buscando ?
            <ImageList
              items={this.state.items}
              onItemClick={this.onItemClick.bind(this)}
            />
          :
            <Text>Por favor entre uma pesquisa</Text>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
    padding: 10,
    paddingTop: 20,
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

export default Home;
