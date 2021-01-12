import React from 'react';
import axios from 'axios';

export default class MoviesList extends React.Component {
  state = {
    movies: []
  }

  componentDidMount() {
    axios.get(`./data.json`)
      .then(res => {
        const movies = res.data;
        this.setState({ movies });
      })
  }

  render() {
    return (
      <ul>
        { this.state.movies.map(movies => <li>{movies.title}</li>)}
      </ul>
    )
  }
}