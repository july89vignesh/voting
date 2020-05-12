// src/App.js
import React, { Component } from "react";
import "./styles.css";

const list = [
  {
    id: 1,
    name: "John Lennon",
    votes: 0
  },
  {
    id: 2,
    name: "Paul McCartney",
    votes: 0
  },
  {
    id: 3,
    name: "George Harrison",
    votes: 0
  },
  {
    id: 4,
    name: "Ringo Starr",
    votes: 0
  }
];

class App extends Component {
  state = {
    members: []
  };

  componentDidMount() {
    this.setState({ members: list });
  }

  handleEvent = memberId => {
    const updatedList = this.state.members.map(member => {
      if (member.id === memberId) {
        return Object.assign({}, member, {
          votes: member.votes + 1
        });
      } else {
        return member;
      }
    });

    this.setState({
      members: updatedList.sort((a, b) => b.votes - a.votes)
    });
  };

  render() {
    return this.state.members.map(member => (
      <Beatle
        key={member.id}
        id={member.id}
        name={member.name}
        votes={member.votes}
        onVote={this.handleEvent}
      />
    ));
  }
}

class Beatle extends Component {
  handleClick = () => this.props.onVote(this.props.id);

  render() {
    return (
      <div className="row">
        <div className="container">
          <div className="col-md-3 col-sm-3 prof-pic">
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="Avatar"
            />
          </div>
          <div className="col-md-9 col-sm-9 candidate-detail">
            <div className="details">
              <p>{this.props.name}</p>
            </div>
            <div className="desc">
              <p>Text Goes here</p>
            </div>
            <div className="votes">
              No. of votes - {this.props.votes}
              <a href="#" onClick={this.handleClick}>
                Click here to vote
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
