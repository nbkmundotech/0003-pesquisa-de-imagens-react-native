import React, { Component } from 'react';
import {
  TextInput,
  TouchableHighlight,
  Text,
  View,
  StyleSheet
} from 'react-native';

export default
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      palavraChave: '',
    };
  }

  onSubmit() {
    this.props.onSearchSubmit(this.state.palavraChave);
  }

  render() {
    return (
      <View style={styles.barraDeBusca}>
        <TextInput
          style={styles.caixaDeBusca}
          value={this.state.palavraChave}
          onChangeText={palavraChave => this.setState({ palavraChave })}
          autoCapitalize={'none'}
          autoCorrect={false}
        />
        <TouchableHighlight
          style={styles.botaoBuscar}
          onPress={() => this.onSubmit()}
        >
          <Text style={styles.textoDoBotao}>Buscar</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  caixaDeBusca: {
    flex: 3,
    borderWidth: 1,
    borderRadius: 4,
    height: 40,
    marginRight: 8
  },
  botaoBuscar: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 4,
    padding: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoDoBotao: {
    fontWeight: 'bold'
  },
  barraDeBusca: {
    flexDirection: 'row',
    marginBottom: 16
  }
});
