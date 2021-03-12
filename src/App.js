import { Component } from 'react';
import { xor } from 'lodash';
import TvShowItem from './components/TvShowItem';
import TvShowsList from './components/TvShowsList';
import PopularShows from './popular-shows.json';
import { Container, Divider, Header, Input } from 'semantic-ui-react';

class App extends Component {
  state = {
    searchFieldValue: '',
    favorites: [85271],
  };

  handleSearchFieldChange(e) {
    this.setState({ searchFieldValue: e.target.value });
  }

  filterShows() {
    const { searchFieldValue } = this.state;

    return PopularShows.results.filter((show) =>
      show.name.toLowerCase().includes(searchFieldValue.toLowerCase())
    );
  }

  handleTvShowItemClick(id) {
    const favorites = xor(this.state.favorites, [id]);
    this.setState({ favorites });
  }

  render() {
    const { searchFieldValue, favorites } = this.state;

    return (
      <Container>
        <Header as="h1">Tv Shows</Header>
        <Divider />
        <Input
          placeholder="Search shows..."
          value={searchFieldValue}
          onChange={this.handleSearchFieldChange.bind(this)}
        />
        <TvShowsList>
          {this.filterShows().map(
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
        </TvShowsList>
      </Container>
    );
  }
}

export default App;