import { Component } from 'react';
import { xor } from 'lodash';
import TvShowItem from './components/TvShowItem';
import TvShowsList from './components/TvShowsList';
import PopularShows from './popular-shows.json';

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
      <div>
        <h1>Tv Shows</h1>
        <input
          placeholder="Search shows..."
          value={searchFieldValue}
          onChange={this.handleSearchFieldChange.bind(this)}
        />
        <TvShowsList>
          {this.filterShows().map(({ id, poster_path, name, vote_average }) => (
            <TvShowItem
              key={id}
              name={name}
              posterPath={poster_path}
              rating={vote_average}
              onClick={this.handleTvShowItemClick.bind(this, id)}
              favorite={favorites.some((favorite) => id === favorite)}
            />
          ))}
        </TvShowsList>
      </div>
    );
  }
}

export default App;
