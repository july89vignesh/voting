import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./App";

const list = [
  {
    id: 1,
    name: "Pat Mclrean",
    votes: 0,
    profile: "https://www.w3schools.com/howto/img_avatar.png"
  },
  {
    id: 2,
    name: "Claretia Mary",
    votes: 0,
    profile: "https://www.w3schools.com/howto/img_avatar2.png"
  },
  {
    id: 3,
    name: "Williams Georgia",
    votes: 0,
    profile: "https://www.w3schools.com/w3images/avatar5.png"
  },
  {
    id: 4,
    name: "Matt Alberta",
    votes: 0,
    profile: "https://www.w3schools.com/w3images/avatar6.png"
  }
];

class VoteCount extends Component {
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
      <App
        key={member.id}
        id={member.id}
        name={member.name}
        votes={member.votes}
        profile={member.profile}
        onVote={this.handleEvent}
      />
    ));
  }
}

ReactDOM.render(<VoteCount />, document.getElementById("root"));
