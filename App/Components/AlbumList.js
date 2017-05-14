
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {

  state = { albums: [] }; // deafult/empty state, can only be used by class based components

  componentWillMount() { // automatically executed when component is about to be rendered to screen
    // use built in fetch function to grab data
    // async http request (takes some amount of time)...
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({ albums: responseData });
      });
  }

  renderAlbums() {
    return (
      this.state.albums.map(album => // map is an array helper
        <AlbumDetail
          key={album.title} // must have a key property and be unique
          album={album}
        />
      )
    );
  }

  render() {
    console.log(this.state);

    return (
      <ScrollView>
        { this.renderAlbums() }
      </ScrollView>
    );
  }
}


export default AlbumList;
