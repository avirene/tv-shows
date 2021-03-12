import { Component } from 'react';
import PropTypes from 'prop-types';

class TvShowItem extends Component {
  render() {
    const { name, rating, posterPath, favorite, onClick } = this.props;

    return (
      <li
        onClick={() => onClick()}
        style={{
          userSelect: 'none',
          cursor: 'pointer',
          fontWeight: favorite ? 'bold' : 'normal',
        }}
      >
        <img
          width={50}
          src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
          alt={name}
        />
        {name}, {rating}
      </li>
    );
  }
}

TvShowItem.propTypes = {
  name: PropTypes.string,
  rating: PropTypes.number,
  posterPath: PropTypes.string,
  favorite: PropTypes.bool,
  onClick: PropTypes.func,
};

export default TvShowItem;
