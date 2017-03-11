import React from 'react'
import axios from 'axios'

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
      axios.get(`https://api.spotify.com/v1/search?q=${attractions[Math.floor(Math.random() * attractions.length)]}&type=album`)
      .then(response => response.data)
      .then(resObj => {
        console.log(resObj)
        const albums = resObj.albums.items
        const album = albums[Math.floor(Math.random() * albums.length)].uri
        this.setState({currentAlbum: album})
      })
      .catch(err => console.error(err))
    }
  }
  render() {
    console.log(this.state.currentAlbum)
    return (
      this.state.currentAlbum.length ? <iframe src={`https://embed.spotify.com/?uri=${this.state.currentAlbum}`} width="100%" height="300vh" frameBorder="0" allowTransparency="true"></iframe> : <h5>No spotify</h5>
    )
  }
}

// const

// export default function (props) {
//   return (
//     <iframe src="https://embed.spotify.com/?uri=spotify:album:63pJMk3S5vS5e8wrInkDhi" width="300" height="380" frameBorder="0" allowTransparency="true"></iframe>
//   );
// }
