import React, { Component } from 'react';
import Letter from './Letter';

class App extends Component {
  constructor(props) {
    super(props);

      this.acceptedLetter = `
        We are pleased to inform you that you have a place at Hogwarts School of
        Witchcraft and Wizardry. Please find enclosed a list of all necessary books and
        equipment.

        Term begins on 1 September. We await your owl by no later than 31 July.
      `;

      this.rejectedLetter = `
        We regret to inform you that we are unable to offer you a place at Hogwarts
        School of Witchcraft and Wizardry. After reviewing your application and
        Github profile, we recognize that you are indeed a "coding wizard".
        Unfortunately, we have concluded that you do not have actual magical
        abilities, which you must have to be admitted into Hogwarts.
      `;

      this.state = {
        name: "Addressee",
        message: this.acceptedLetter
      };

    this.handleAccept = this.handleAccept.bind(this);
    this.handleReject = this.handleReject.bind(this);
    this.handleName = this.handleName.bind(this);
  }

    handleAccept(event) {
      event.preventDefault();
      this.setState({ message: this.acceptedLetter });
    }

    handleReject(event) {
      event.preventDefault();
      this.setState({ message: this.rejectedLetter });
    }

    handleName(event) {
      this.setState({ name: event.target.value });
    }

  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="" onChange={this.handleName} />
          <input type="submit" value="Accepted" onClick={this.handleAccept} />
          <input type="submit" value="Rejected" onClick={this.handleReject} />
        </form>
      <div>
        <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Hogwarts_coat_of_arms_colored_with_shading.svg/2000px-Hogwarts_coat_of_arms_colored_with_shading.svg.png"} />

        <Letter
          name={this.state.name}
          message={this.state.message} />
        </div>
      </div>
    );
  }
}

export default App;
