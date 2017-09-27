const css = require('./style/main.scss');
const { say,SQUIRREL,DRAGON } = require('cowsay');
const { fake } = require('faker');
const request = require('superagent');
import React from 'react';
import ReactDOM from 'react-dom';
import superagent from 'superagent';

const API_URL = 'https://reddit.com/r';

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

  handleSubmit(event){
    event.preventDefault();
    let searchFormBoard = document.getElementById('textField').value;
    let searchFormLimit = 10;//document.getElementById('resultLimit').value;
    console.log('Board:', searchFormBoard);
    console.log('Limit:', searchFormLimit);
    request.get(`${API_URL}/${searchFormBoard}.json?limit=${searchFormLimit}`)
      .then(res => {
        console.log(res.body);
      });
  }


  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input
        id="textField"
        type="text"
        onChange={this.onChange}
        />
      </form>
    );
  }
}

/*<input
id="resultLimit"
type="number"
value="10"
onChange={this.onChange}/>*/

class SearchResultList extends React.Component {
  constructor(props){
    super(props);
    //do a thing
  }

  render(){
    return (
      <div>Search Result List</div>
    )
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
    return (
      <div>
        <h1>Reddit Search:</h1>
        <SearchForm/>
        <SearchResultList/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
