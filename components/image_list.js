import React, { Component } from 'react';
import {
  ListView,
  View,
  Text
} from 'react-native';

import ImageListItem from './image_list_item';

export default class ImageList extends Component {
  constructor(props) {
    super(props);

    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      dataSource
    };
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.items !== this.props.items) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.items)
      });
    }
  }

  render() {
    if (this.props.items.length === 0) {
      return <Text>Carregando . . .</Text>;
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={item => <ImageListItem item={item} key={item.imageId} onItemClick={this.props.onItemClick} />}
      />
    );
  }
}
