import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PopularScreen from './screens/PopularScreen';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/">
            <PopularScreen />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;