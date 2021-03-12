import { Component } from 'react';
import TvShowsList from './components/TvShowsList';
import { Container, Divider, Header, Input } from 'semantic-ui-react';

class PopularScreen extends Component {
  state = {
    searchFieldValue: '',
    favorites: [85271],
    popularShows: [],
    isLoaded: false,
    error: null,
  };

  componentDidMount() {
    const params = new URLSearchParams({
      api_key: process.env.REACT_APP_API_KEY,
      language: 'en_US',
      page: 1,
    });
    fetch(`https://api.themoviedb.org/3/tv/popular?${params}`)
      .then((res) => res.json())
      .then(
        (response) => {
          this.setState({
            popularShows: response,
            isLoaded: true,
          });
        },
        (error) => {
          this.setState({
            error,
            isLoaded: true,
          });
        }
      );
  }

  handleSearchFieldChange(e) {
    this.setState({ searchFieldValue: e.target.value });
  }

  handleFavoritesChange(favorites) {
    this.setState({ favorites });
  }

  filterShows() {
    const { searchFieldValue, popularShows, isLoaded, error } = this.state;

    if (!isLoaded || error) {
      return [];
    }

    return popularShows.results.filter((show) =>
      show.name.toLowerCase().includes(searchFieldValue.toLowerCase())
    );
  }

  render() {
    const { searchFieldValue, favorites, isLoaded, error } = this.state;

    return (
      <Container>
        <Header as="h1">Tv Shows</Header>
        <Divider />
        <Input
          placeholder="Search shows..."
          value={searchFieldValue}
          onChange={this.handleSearchFieldChange.bind(this)}
        />
        <TvShowsList
          shows={this.filterShows()}
          favorites={favorites}
          onFavoritesChange={this.handleFavoritesChange.bind(this)}
          isLoaded={isLoaded}
          error={error}
        />
      </Container>
    );
  }
}

export default PopularScreen;