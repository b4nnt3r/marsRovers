import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import GetImageForm from './GetImageForm'

export default class App extends Component {
  render() {
    return (
      <div>
        <logo />
        <GetImageForm />
      </div>
    );
  }
}
