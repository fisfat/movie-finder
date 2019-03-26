// @flow
import React, { Component } from 'react';
import NoInternet from '../components/NoInternet';

type Props = {};

export default class HomePage extends Component<Props> {
  props: Props;

  render() {
    return <NoInternet />;
  }
}
