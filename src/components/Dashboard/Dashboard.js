import React from 'react';
import PropTypes from 'prop-types';
import Sighting from '../Sighting/Sighting';
import NavBar from '../NavBar/NavBar';
import { formatRegions, getSightingsThisMonth } from '../../utils';
import './Dashboard.css';

const Dashboard = ({ user, sightings }) => {
  const sightingsThisMonth = getSightingsThisMonth(sightings);
  
  const allSightings = sightings.map(sighting => <Sighting key={sighting.id} id={sighting.id} fungusId={sighting.fungusId} date={sighting.date} location={sighting.location} notes={sighting.notes}/>)

  const region = formatRegions([user.region]);

  return (
    <div>
      <section>
        <NavBar />
        <h2>Dashboard</h2>
        <div>
          <h3>Region: {region}</h3>
          <h3>Total sightings: {sightings.length}</h3>
          <h3>Sightings this month: {sightingsThisMonth.length}</h3>
        </div>
      </section>
      <section>
        <h2>My Sightings</h2>
        {allSightings}
      </section>
    </div>
  )
}

export default Dashboard;

Dashboard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    region: PropTypes.string
  }).isRequired,
  sightings: PropTypes.array.isRequired
}