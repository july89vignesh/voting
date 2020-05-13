// src/App.js
import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  handleClick = () => this.props.onVote(this.props.id);

  render() {
    return (
      <div className="row">
        <div className="container">
          <div className="col-md-3 col-sm-3 col-xs-12 prof-pic">
            <img src={this.props.profile} alt="Avatar" />
          </div>
          <div className="col-md-9 col-sm-9 col-xs-12 candidate-detail">
            <div className="details">
              <h5>{this.props.name}</h5>
            </div>
            <div className="desc">
              <p>Text Goes here</p>
            </div>
            <div className="votes">
              <p className="vote-btn">No. of votes</p> - {this.props.votes}
              <p>
                <a href="#" onClick={this.handleClick}>
                  Click here to vote
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
