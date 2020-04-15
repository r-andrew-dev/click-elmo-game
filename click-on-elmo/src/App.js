import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Container from "./components/Container";
import characters from "./characters.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters
  };

  removeCharacter = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const characters = this.state.characters.filter(characters => characters.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ characters });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Container>
        {this.state.characters.map(character => (
          <FriendCard
            removeCharacter={this.removeCharacters}
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
      </Container>
    );
  }
}

export default App;
