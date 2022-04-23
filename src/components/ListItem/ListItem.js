import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ListItem.scss';

const ListItem = ({ id, name, scientificName, imageUrl }) => {
  return (
    <div className='list-item'>
      <img src={imageUrl} alt='' />
      <div className='list-item-names'>
        <h3>{name}</h3>
        <h4>{scientificName}</h4>
      </div>
      <Link to={`/explore/${id}`}>
        <button>View</button>
      </Link>
    </div>
  )
}

export default ListItem;

ListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  imageUrl: PropTypes.string
}