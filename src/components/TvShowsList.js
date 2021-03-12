import { Component } from 'react';
import { Card, Segment } from 'semantic-ui-react';

class TvShowsList extends Component {
  render() {
    return (
      <Segment>
        <Card.Group doubling itemsPerRow={4}>
          {this.props.children}
        </Card.Group>
      </Segment>
    );
  }
}

export default TvShowsList;