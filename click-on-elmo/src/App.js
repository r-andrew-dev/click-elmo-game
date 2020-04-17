import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer"
import characters from "./characters.json";


// My ideas: set score in state, 
// then using onClick function handler, whenever a character is clicked, 
// add 1 to score and shuffleArray() unless clicked: is already true, then check if top score or score is greater. 
// if Score is greater, set Top Score = Score, and then score = 0, and "clicked", back to false, run shuffleArray(). Else, Top Score stays score and 
// Score is still reset to zero and all clicked back to false again run shuffle array.
// * add "clicked" property to characters. Would this work? 

// How to randomly render when clicked? 
// Fisher Yates aka Knuth shuffle ?
// Durstenfeld shuffle ? 
// https://stackoverflow.com/questions/38101522/how-to-render-random-objects-from-an-array-in-react

// function shuffleArray(characters) {
//   let i = characters.length - 1;
//   for (; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     const temp = characters[i];
//     characters[i] = characters[j];
//     characters[j] = temp;
//   }
//   return characters;
// }

// characters.sort(() => Math.random() > 0.5) THANKS KATHY

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters,
    score: 0,
    topScore: 0
  };

  clickCharacter = id => {

    const clickedCharacter = this.state.characters.filter(character => character.id === id)
    let clicked = clickedCharacter[0].clicked

    if (clicked === false) {

      let clicked = true;
      this.setState({ score: this.state.score + 1 });
      return clicked = true, console.log(characters)
    } else {

    }
    
    console.log(characters)
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
      <Navbar
      score={this.state.score}
      topScore={this.state.topScore}
      />
      <Header/>
      <Container>
        {this.state.characters.map(character => (
          <FriendCard
            clickCharacter={this.clickCharacter} 
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
          />
        )).sort(()=> Math.random() - .5)}
      </Container>
      <Footer/>
    </div>
    )
  }
}

export default App;
