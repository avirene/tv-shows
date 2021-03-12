import { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Icon, Image } from 'semantic-ui-react';

class TvShowItem extends Component {
  render() {
    const {
      name,
      rating,
      posterPath,
      favorite,
      onClick,
      releaseDate,
    } = this.props;

    return (
      <Card
        onClick={() => onClick()}
        style={{
          cursor: 'pointer',
        }}
      >
        <Image
          src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
          alt={name}
        />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>{releaseDate}</Card.Meta>
        </Card.Content>
        <Card.Content>
          <Icon name="star" />
          {rating}
        </Card.Content>
        <Card.Content>
          <Button fluid basic={!favorite} positive={favorite}>
            <Icon name="heart" />
            {favorite ? 'Remove from favorites' : 'Add to favorites'}
          </Button>
        </Card.Content>
      </Card>
    );
  }
}

TvShowItem.propTypes = {
  name: PropTypes.string,
  rating: PropTypes.number,
  posterPath: PropTypes.string,
  releaseDate: PropTypes.string,
  favorite: PropTypes.bool,
  onClick: PropTypes.func,
};

export default TvShowItem;