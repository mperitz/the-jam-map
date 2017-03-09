import React from 'react';

export default function (props) {
  return (
    <div>
      <div>
        <h4>Hotels</h4>
        <select data-type="hotel" id="hotel-choices">
          <option>Andaz Wall Street</option>
          <option>...</option>
        </select>
        <button data-action="add" className="btn btn-primary btn-circle pull-right">+</button>
      </div>
      <div>
        <h4>Restaurants</h4>
        <select data-type="restaurant" id="restaurant-choices">
          <option>Bouley</option>
          <option>...</option>
        </select>
        <button data-action="add" className="btn btn-primary btn-circle pull-right">+</button>
      </div>
      <div>
        <h4>Activities</h4>
        <select data-type="activity" id="activity-choices">
          <option>Mahayana Buddhist Temple Association</option>
          <option>...</option>
        </select>
        <button data-action="add" className="btn btn-primary btn-circle pull-right">+</button>
      </div>
    </div>
  );
}
