import React from 'react';
import {
  Image,
  TouchableHighlight,
  Text,
  View,
  StyleSheet
} from 'react-native';

const ImageDetail = (props) => {
  const { name, thumbnailUrl } = props.image;
  const { container, titulo, imagem, botao, textoDoBotao } = styles;

  return (
    <View style={container}>
      <Text style={titulo}>{name}</Text>

      <Image style={imagem} source={{ uri: thumbnailUrl }} />

      <TouchableHighlight
        style={botao}
        onPress={() => props.onPressBack()}
      >
        <Text style={textoDoBotao}>Voltar</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
  },
  titulo: {
    fontSize: 18,
    alignSelf: 'center',
    marginBottom: 15,
  },
  imagem: {
    width: null,
    height: 300,
    flex: 1,
  },
  botao: {
    alignSelf: 'center',
    marginTop: 15,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'gray',
    padding: 4,
  },
  textoDoBotao: {
    fontWeight: 'bold',
  },
});

export default ImageDetail;
