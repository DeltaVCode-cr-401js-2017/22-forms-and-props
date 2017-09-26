const css = require('./style/main.scss');
const { say,SQUIRREL,DRAGON } = require('cowsay');
const { fake } = require('faker');

import React from 'react';
import ReactDOM from 'react-dom';
import superagent from 'superagent';

const API_URL = 'https://pokeapi.co/api/v2';

class SearchForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    console.log('SearchForm mounted');
  }

  handleSubmit(){

  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input
        type="text"
        onChange=""
        />
      </form>
    );
  }
}

class SearchResultList extends React.Component {
  constructor(props){
    super(props);
    //do a thing
  }
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  componentDidMount(){
    console.log('Mounted');
  }

  componentDidUpdate(){
    console.log('Updated');
  }

  render(){
    return (<SearchForm/>);
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
