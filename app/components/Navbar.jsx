import React from 'react'
import { Link } from 'react-router'
import DatePicker from 'material-ui/DatePicker'
import Toggle from 'material-ui/Toggle'
import AppBar from 'material-ui/AppBar'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'
import IconButton from 'material-ui/IconButton'
import ActionHome from 'material-ui/svg-icons/action/home'
import RaisedButton from 'material-ui/RaisedButton'

import { startDate, endDate, convertDate, convertGenre } from '../utils'

export default class Navbar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      startDate: startDate,
      endDate: endDate,
      genre: 1,
      artist: '',
      toggled: false
    }
  }

  handleToggle = () => {
    this.setState({
      toggled: !this.state.toggled
    })
  }

  handleChangeStartDate = (event, date) => {
    this.setState({
      startDate: date,
    })
  }

  handleChangeEndDate = (event, date) => {
    this.setState({
      endDate: date,
    })
  }

  handleChangeGenre = (event, genre) => {
    this.setState({
      genre: ++genre
    })
  }

  handleChangeArtist = (event, artist) => {
    this.setState({
      artist
    })
  }

  handleFilter = (event) => {
    const body = {
      startDate: convertDate(this.state.startDate),
      endDate: convertDate(this.state.endDate),
      genre: convertGenre(this.state.genre)
    }
    this.props.filterShows(body)
  }

  handleSearch = (event) => {
    this.props.getShowsByArtist(this.state.artist)
  }

  render() {
    const styles = {
      // appBar: {
      //   background: '#999999'
      // },
      toggle: {
        marginTop: 20,
        marginRight: 20
      },
      title: {
        cursor: 'pointer'
      },
      subTitle: {
        fontSize: '12px'
      },
      datePicker: {
        width: '75px',
        marginRight: '50px',
        float: 'left'
      },
      filterButton: {
        margin: 12,
        height: 30,
        marginRight: '50px',
        bottom: '30px',
        position: 'relative'
      },
      searchButton: {
        margin: 12,
        height: 30,
        marginRight: '50px',
        bottom: '15px',
        position: 'relative'
      },
      genre: {
        width: '150px'
      }
    }
    return (
      <AppBar
        style={styles.appBar}
        title={
          <div>
            <span style={styles.title}>The Jam Map     </span>
            <span style={styles.subTitle}>      Where will you rage tonight?</span>
          </div>
        }
        iconElementLeft={<Link to="/map"><IconButton><ActionHome /></IconButton></Link>}
      >
        <div style={{ marginRight: '10%' }}>
          {!this.state.toggled ?
            <div style={{height: '77px'}}>
              <DatePicker
                style={styles.datePicker}
                floatingLabelText="Start Date"
                defaultDate={this.state.startDate}
                onChange={this.handleChangeStartDate}
              />
              <DatePicker
                style={styles.datePicker}
                floatingLabelText="End Date"
                defaultDate={this.state.endDate}
                onChange={this.handleChangeEndDate}
              />
              <SelectField floatingLabelText="Select Genre" style={styles.genre} value={this.state.genre} onChange={this.handleChangeGenre} >
                <MenuItem value={1} primaryText="All" />
                <MenuItem value={2} primaryText="Rock" />
                <MenuItem value={3} primaryText="Pop" />
                <MenuItem value={4} primaryText="Country" />
                <MenuItem value={5} primaryText="R&B" />
                <MenuItem value={6} primaryText="Folk" />
                <MenuItem value={7} primaryText="Funk" />
                <MenuItem value={8} primaryText="Jazz" />
                <MenuItem value={9} primaryText="Hip-Hop/Rap" />
                <MenuItem value={10} primaryText="World" />
                <MenuItem value={11} primaryText="Latin" />
                <MenuItem value={12} primaryText="Reggae" />
                <MenuItem value={13} primaryText="Dance/Electronic" />
              </SelectField>
              <RaisedButton label="Filter" style={ styles.filterButton } onClick={this.handleFilter} />
            </div>
            :
            <div>
              <TextField
                floatingLabelText="Search by Artist"
                onChange={this.handleChangeArtist}
              />
              <RaisedButton label="Search" style={ styles.searchButton } onClick={this.handleSearch} />
            </div>
            }
        </div>
        <div style={{ position: 'absolute', right: '0'}}>
          <Toggle
            style={styles.toggle}
            label={this.state.toggled ? 'Artist Search' : 'Date/Genre Filter'}
            defaultToggled={false}
            onToggle={this.handleToggle}
            labelPosition="right"
          />
        </div>
      </AppBar>
    )
  }
}
