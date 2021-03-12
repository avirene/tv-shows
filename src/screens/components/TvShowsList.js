import { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Dimmer, Loader, Message, Segment } from 'semantic-ui-react';
import TvShowItem from './TvShowItem';
import { xor } from 'lodash';

class TvShowsList extends Component {
  handleTvShowItemClick(id) {
    const favorites = xor(this.props.favorites, [id]);
    this.props.onFavoritesChange(favorites);
  }

  render() {
    const { isLoaded, shows, error, favorites } = this.props;

    if (!isLoaded) {
      return (
        <Dimmer active inverted>
          <Loader>Loading</Loader>
        </Dimmer>
      );
    }

    if (isLoaded && error) {
      return (
        <Message negative>
          <Message.Header>
            We're sorry, we can't display the popular tv shows at the moment.
          </Message.Header>
          <p>Please contact support NOW!!!</p>
        </Message>
      );
    }

    return (
      <Segment>
        <Card.Group doubling itemsPerRow={4}>
          {shows.map(
            ({ id, poster_path, name, vote_average, first_air_date }) => (
              <TvShowItem
                key={id}
                name={name}
                posterPath={poster_path}
                rating={vote_average}
                releaseDate={first_air_date}
                onClick={this.handleTvShowItemClick.bind(this, id)}
                favorite={favorites.some((favorite) => id === favorite)}
              />
            )
          )}
        </Card.Group>
      </Segment>
    );
  }
}

TvShowsList.propTypes = {
  isLoaded: PropTypes.bool,
  error: PropTypes.object,
  shows: PropTypes.array,
  favorites: PropTypes.array,
  onFavoritesChange: PropTypes.func,
};

export default TvShowsList;