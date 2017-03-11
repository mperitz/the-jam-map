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

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

/*
PLANS:
- Make date selection work
  * set the initial local state to be today for the start date and one week in the future for the end date
- Make genre selection work
  * initial state is all genres
- Make arist search work
  * this will reset dates to start date: today, end date: 1 year in the future, unless dates are specified
  * initial state is all artists
- Need to set up dispatch functions for all of this
- Need to make the filter button call these dispatch functions if values are present
*/

    const minDate = new Date();
    const maxDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 1);
    minDate.setHours(0, 0, 0, 0);
    maxDate.setFullYear(maxDate.getFullYear() + 1);
    maxDate.setHours(0, 0, 0, 0);

    this.state = {
      minDate: minDate,
      maxDate: maxDate,
      autoOk: false,
      disableYearSelection: false,
      genre: 1
    };
  }

  handleChangeStartDate = (event, date) => {
    this.setState({
      minDate: date,
    });
  };

  handleChangeEndDate = (event, date) => {
    this.setState({
      maxDate: date,
    });
  };

  handleFilter = (event, toggled) => {
    console.log(this.state)
    // here dispatch the whole state and filter changes using the ticketmaster api
  };

  render() {
    const styles = {
      title: {
        cursor: 'pointer'
      },
      filterButton: {
        margin: 12,
        height: 30,
        marginTop: 20
      }
    }
    return (
      <AppBar
        title={<span style={styles.title}>The Jam Map</span>}
        iconElementLeft={<Link to="/map"><IconButton><ActionHome /></IconButton></Link>}
      >
        <DatePicker
          style={styles.datePicker}
          floatingLabelText="Start Date"
          defaultDate={this.state.minDate}
          onChange={this.handleChangeStartDate}
        />
        <DatePicker
          style={styles.datePicker}
          floatingLabelText="End Date"
          defaultDate={this.state.maxDate}
          onChange={this.handleChangeEndDate}
        />
        <SelectField floatingLabelText="Select Genre" value={this.state.genre}>
          <MenuItem value={1} primaryText="All" />
          <MenuItem value={2} primaryText="Rock" />
          <MenuItem value={3} primaryText="Pop" />
        </SelectField>
        <TextField
          floatingLabelText="Search by Artist"
        />
        <RaisedButton label="Filter" style={ styles.filterButton } onClick={this.handleFilter} />
      </AppBar>
    )
  }
}

/*export default function (props) {
  return (
    <div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <Link className="navbar-brand clearfix" to="/map"><span>Jam Map</span></Link>
      </div>
      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav">
          <li>Select Start Date <DatePicker /></li>
          <li>Select End Date <DatePicker /></li>
        </ul>
      </div>
    </div>
  );
}*/
