import React from 'react';
import { convertShowTime } from '../utils'

// export default class ShowInfo extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   componentWillReceiveProps() {

//   }
// }

export default function (props) {
  const show = props.show
  return (
    show ?
    (<div>
      <img style={{ maxHeight: '300px', width: '100%' }} src={show.imagesArr[0].url} />
      <div>
        <h3>{show.name}</h3>
      </div>
      <div>
        <h3 style={{textAlign: 'left'}}>Where</h3>
        <h5>{show.venue.name}</h5>
        <h5>{show.timeInfo.date} @ {convertShowTime(show.timeInfo.time)}</h5>
        <h5>{show.venue.address.street.line1}</h5>
        <h5>{show.venue.address.city}, {show.venue.address.state} {show.venue.address.zip}</h5>
      </div>
      <div>
        <h3 style={{textAlign: 'left'}}>Pricing</h3>
        {show.pricing && <h5>Cheap Seats: ${show.pricing.min}</h5>}
        {show.pricing && <h5>Best Seats: ${show.pricing.max}</h5>}
      </div>
      <div>
        <h3 style={{textAlign: 'left'}}>About the Show</h3>
        {show.showInfo && <h5>{show.showInfo.length > 400 ? show.showInfo.slice(0, 400) + '.....' : show.showInfo}</h5>}
        <h5><a href={show.infoUrl}>Click here for tickets!</a></h5>
      </div>
    </div>) : null
  );
}
