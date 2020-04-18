import React, {
  Component
} from "react";
import FriendCard from "./components/FriendCard";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer"
import characters from "./characters.json";

// PSEDUO CODING PSUEDO CODING PSEDUO CODING 

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

// PSUEDO CODING PSEDUO CODING PSUEDO CODING 

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters,
    score: 0,
    topScore: 0,
    message: "Click an image to begin!"
  };

  clickCharacter = id => {

    if (!this.state.characters[id].clicked && this.state.score < 11) {
      let characters = this.state.characters.map(character => {
        if (character.id === id) {
          character.clicked = true;
        }
        return character
      })
      this.setState({
        score: this.state.score + 1,
        characters: characters,
        message: "You got it right!"
      })
      console.log(characters)
    } else if (!this.state.characters[id].clicked && this.state.score === 11) {

      let characters = this.state.characters.map(character => {
        character.clicked = false
        return character
      })

      this.setState({
        characters,
        score: 0,
        topScore: 0,
        message: "Congratulations! You win!"
      });
      console.log(characters)
    } else {
      if (this.state.topScore < this.state.score) {

        let topScore = this.state.score

        this.setState({
          topScore: topScore
        })
      } else {
        this.setState({
          topScore: this.state.topScore
        })
      }

     let characters = this.state.characters.map(character => {
        character.clicked = false
        return character
      })

      this.setState({
        characters: characters,
        score: 0,
        message: "You Lost. Try again?"
      });
    }
  }

// Map over this.state.friends and render a FriendCard component for each friend object
render() {
  return (
    <div>
    <Navbar
    score={this.state.score}
    topScore={this.state.topScore}
    message={this.state.message}
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