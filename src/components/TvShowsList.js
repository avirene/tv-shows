import { Component } from "react";

class TvShowsList extends Component {
  render() {
    return (
      <div>
        <ul>{this.props.children}</ul>
      </div>
    );
  }
}

export default TvShowsList;
