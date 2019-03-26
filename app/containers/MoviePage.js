// @flow
import React, { Component } from 'react';
import Movie from '../components/movies/Movie';

type Props = {};

export default class MoviePage extends Component<Props> {
  props: Props;

  render() {
    return <Movie />;
  }
}
