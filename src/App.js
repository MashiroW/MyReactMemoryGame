import React, { Component } from "react";
import "./App.css";

let Score = 0;
let Pairs = 0;
let Final_message = "";
let Points_vrai = 3;
let Points_faux = 1;

const Card = props => {
  let style = {};
  if (props.visible)
    style = { pointerEvents: "none", backgroundImage: props.backgroundImage };
  return <div onClick={props.click} style={style} className="card" />;
};

const CardGrid = props => {
  const cartes = props.cartes.map(card => (
    <Card
      key={card.id}
      backgroundImage={card.backgroundImage}
      visible={card.EtatCarte}
      click={() => props.Cliquables(card.id)}
    />
  ));
  return <div className="cards-block">{cartes}</div>;
};

const NouvellePartie = props => {
  return (
    <button onClick={props.startNouvellePartie} className="reset">
      Start a New Game
    </button>
  );
};

const Difficile = props => {
  return (
    <button onClick={props.Difficile} className="hard">
      <b>HARD MOD</b>
    </button>
  );
};

const Facile = props => {
  return (
    <button onClick={props.Facile} className="easy">
      <b>EASY MOD </b>
    </button>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    const EtatCarte = {
      non_visible: 0,
      visible: 1,
      identique: 2
    };
    let cartes = [
      { id: 0, EtatCarte: EtatCarte.non_visible, backgroundImage: `url("https://www.mariowiki.com/images/9/9e/SMW_Fire_Flower.jpg")`}, 
      { id: 1, EtatCarte: EtatCarte.non_visible, backgroundImage: `url("https://www.mariowiki.com/images/9/9e/SMW_Fire_Flower.jpg")`}, 
      { id: 2, EtatCarte: EtatCarte.non_visible, backgroundImage: `url("https://www.mariowiki.com/images/a/ac/SMW_Egg.jpg")`}, 
      { id: 3, EtatCarte: EtatCarte.non_visible, backgroundImage: `url("https://www.mariowiki.com/images/a/ac/SMW_Egg.jpg")`}, 
      { id: 4, EtatCarte: EtatCarte.non_visible, backgroundImage: `url("https://www.mariowiki.com/images/e/e0/3-Up_Moon_SMW_artwork.jpg")`}, 
      { id: 5, EtatCarte: EtatCarte.non_visible, backgroundImage: `url("https://www.mariowiki.com/images/e/e0/3-Up_Moon_SMW_artwork.jpg")`}, 
      { id: 6, EtatCarte: EtatCarte.non_visible, backgroundImage: `url("https://www.mariowiki.com/images/5/5e/SMW_Star.jpg")`}, 
      { id: 7, EtatCarte: EtatCarte.non_visible, backgroundImage: `url("https://www.mariowiki.com/images/5/5e/SMW_Star.jpg")`}, 
      { id: 8, EtatCarte: EtatCarte.non_visible, backgroundImage: `url("https://www.mariowiki.com/images/2/24/SMW_Super_Mushroom.jpg")`}, 
      { id: 9, EtatCarte: EtatCarte.non_visible, backgroundImage: `url("https://www.mariowiki.com/images/2/24/SMW_Super_Mushroom.jpg")`}, 
      { id: 10, EtatCarte: EtatCarte.non_visible, backgroundImage: `url("https://www.mariowiki.com/images/e/ec/SMW_1-Up_Mushroom.jpg")`}, 
      { id: 11, EtatCarte: EtatCarte.non_visible, backgroundImage: `url("https://www.mariowiki.com/images/e/ec/SMW_1-Up_Mushroom.jpg")`}, 
      { id: 12, EtatCarte: EtatCarte.non_visible, backgroundImage: `url("https://www.mariowiki.com/images/f/fb/SMW_Cape_Feather.jpg")`}, 
      { id: 13, EtatCarte: EtatCarte.non_visible, backgroundImage: `url("https://www.mariowiki.com/images/f/fb/SMW_Cape_Feather.jpg")`}, 
      { id: 14, EtatCarte: EtatCarte.non_visible, backgroundImage: `url("https://www.mariowiki.com/images/c/ca/SMW_Prize_Block.jpg")`}, 
      { id: 15, EtatCarte: EtatCarte.non_visible, backgroundImage: `url("https://www.mariowiki.com/images/c/ca/SMW_Prize_Block.jpg")`}
    ];
    cartes = this.shuffle(cartes);
    this.state = { cartes, Selection2: false };
  }

  shuffle = arr => arr.sort(() => 0.5 - Math.random());
  startNouvellePartie = () => window.location.reload()
  Difficile = () => Points_faux = 5;
  Facile = () => Points_faux = 1;

  Cliquables = id => {
    const cartevisible = this.state.cartes.map(card => {
      if (card.id === id) {
        return { ...card, EtatCarte: 1 };
      }
      return card;
    });
    const { Selection2 } = this.state;

    const IDcarteVisible = cartevisible
      .filter(card => card.EtatCarte === 1)
      .map(card => card.id);

    const card1 = cartevisible.filter(card => card.id === IDcarteVisible[0]);
    const couleurcarte1 = card1[0].backgroundImage;

    if (Selection2) {
      const carte2 = cartevisible.filter(card => card.id === IDcarteVisible[1]);
      const couleurcarte2 = carte2[0].backgroundImage;
      if (couleurcarte1 === couleurcarte2) {
        const cartesIdentiques = cartevisible.map(card =>
          IDcarteVisible.includes(card.id) ? { ...card, EtatCarte: 2 } : card
        );

        Score = Score + Points_vrai;
        Pairs = Pairs + 1;

        if (Pairs === 8) {
          Final_message = "You won ! Congratulations ! Mario is proud of ur moustache !"
        }

        this.setState({ cartes: cartesIdentiques, Selection2: false });
        return;
      } else if (couleurcarte1 !== couleurcarte2) {
        const cartesdiff = cartevisible.map(card =>
          IDcarteVisible.includes(card.id) ? { ...card, EtatCarte: 0 } : card
        );
        this.setState({ cartes: cartevisible }, () =>
          setTimeout(
            () => this.setState({ cartes: cartesdiff, Selection2: false }),
            300
          )
        );
        Score = Score - Points_faux;
        return;
      }
    }
    this.setState({ cartes: cartevisible, Selection2: true });
  };

  render() {
    return (
      <div className="App">
        <div className="texts"><b>SUPER MARIO MEMORY GAME</b></div>

        <ul>
          <div className="box_difficulty_reset">
            <NouvellePartie startNouvellePartie={this.startNouvellePartie}/>
          </div>

          <br></br>
          <br></br>

          <div className="box_difficulty">
            <div>
              <Difficile Difficile={this.Difficile} Points_faux={this.state.Points_faux} />
            </div>

            <br></br>
            
            <div>
              <Facile Facile={this.Facile} Points_faux={this.state.Points_faux}/>
            </div>

            <p className="p">
              Easy = -1/mistake (default)
              <br></br>
              Hard = -5/mistake
            </p>
          </div>

        </ul>

        <CardGrid Cliquables={this.Cliquables} cartes={this.state.cartes} />
        <br></br>
        <div className="texts">
          <b>Your current score is: </b>
          <div className="texts_result">{Score}</div>
          <br></br>
          <b>{Final_message}</b>
          </div>
      </div>

    );
  }
}

export default App;
