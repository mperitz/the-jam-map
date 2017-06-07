import React from 'react'
import axios from 'axios'

import secrets from '../../secrets'

export default class Playlist extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentAlbum: ''
    }
  }
  componentWillReceiveProps(props) {
    this.getSpotify(props)
  }
  getSpotify = (props) => {
    if (props.show.attractionsArr) {
      const attractions = props.show.attractionsArr
      axios.get(`https://api.spotify.com/v1/search?client_id=${secrets.spotify}&q=${attractions[0]}&type=album`)
      .then(response => response.data)
      .then(resObj => {
        const albums = resObj.albums.items
        const album = albums[Math.floor(Math.random() * albums.length)].uri
        this.setState({currentAlbum: album})
      })
      .catch(err => console.error(err))
    }
  }
  render() {
    return (
      this.state.currentAlbum.length ? <iframe src={`https://embed.spotify.com/?uri=${this.state.currentAlbum}`} width="100%" height="100%" frameBorder="0" allowTransparency="true"></iframe> : null
    )
  }
}
