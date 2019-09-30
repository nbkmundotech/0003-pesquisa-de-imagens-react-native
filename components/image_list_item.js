import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

const ImageListItem = ({ item, onItemClick }) => {
  // item.name
  // item.thumbnailUrl
  return (
    <View style={styles.item}>
      <TouchableHighlight
      onPress={() => onItemClick(item)}
      >
        <View>
          <Image
            source={{ uri: item.thumbnailUrl }}
            style={styles.imagem}
          />
          <Text>{item.name}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    borderWidth: 2,
    padding: 16,
    marginBottom: 16,
  },
  imagem: {
    width: 64,
    height: 64,
    marginRight: 12
  }
});

export default ImageListItem;
