import React, { Component } from 'react';
import axios from 'axios';

class Main extends Component {

  constructor (props) {
    super(props);
    this.state = {
      id: '',
      person: null,
      commPercentile : '',
      codePercentile : ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt){
    evt.preventDefault();
    let id = evt.target.candid.value;
    if(id<899||id>947)
      alert('That id is not valid!');
    else{
      axios.get(`/percentiles/${evt.target.candid.value}`)
        .then(arr=>arr.data)
        .then((arr)=>{
          this.setState({id:id,commPercentile:arr[0],codePercentile:arr[1],person:arr[2]});
        })
        .catch(console.err)
    }
    evt.target.candid.value = "";
  }


  render () {
    return (
      <div>
        <h3>Candidate ID: {this.state.id}</h3>
        {
          this.state.person && (
          <div>
            <p> Title: {this.state.person.title}</p>
            <p> Company: {this.state.person.company_id}</p>
          </div>
          )
        }
      	 <form onSubmit={this.handleSubmit}>
            <input className="type" name="candid" type="text" placeholder="Please enter your candidate ID"/>
            <input className="submit" type="submit" value="Submit" />
          </form>
          <p> Communication Percentile: {this.state.commPercentile}%</p>
          <p> Coding Percentile: {this.state.codePercentile}%</p>
      </div>
      

    );
  }
}

export default Main;