import { useState } from "react";
import "./App.css";
import Player from "./components/Player";

const VALID_NUMBER_PLAYER = 5;
const initialState = [
  {
    id: 1,
    name: "Cristian Ronaldo",
    position: "ST",
    age: 38,
    rate: 10,
    avatar: "images/ronaldo.jpeg",
  },
  {
    id: 2,
    name: "Van Persi",
    position: "ST",
    age: 41,
    rate: 9,
    avatar: "images/persie.jpg",
  },
  {
    id: 3,
    name: "B. Leno",
    position: "GK",
    age: 20,
    rate: 8,
    avatar: "images/leno.jpg",
  },
  {
    id: 4,
    name: "T. Henry",
    position: "ST",
    rate: 100,
    age: 20,
    avatar: "images/henry.jpg",
  },
];
function App() {
  const [players, setPlayers] = useState(initialState);

  const onAddPlayerHandler = () => {
    const newPlayer = [
      {
        name: "Harry Macguire",
        position: "Captain -  Rap xiec",
        age: 30,
        rate: 1,
        id: players.length + 1,
        avatar: "images/magai.jpg",
      },
      {
        name: "Quang Hai",
        position: "Hồ Tây",
        age: 30,
        rate: 10,
        id: players.length + 1,
        avatar: "images/quanghai.jpg",
      },
      {
        name: "Rio Ferdinand",
        position: "CB",
        age: 30,
        rate: 15,
        id: players.length + 1,
        avatar: "images/rio.jpg",
      },
      {
        name: "ViDic",
        position: "CB",
        age: 30,
        rate: 1,
        id: players.length + 1,
        avatar: "images/vidic.jpg",
      },
      {
        name: "Messi",
        position: "CF",
        age: 30,
        rate: 1,
        id: players.length + 1,
        avatar: "images/messi.jpeg",
      },
      {
        name: "Sadio Mane",
        position: "LF",
        age: 30,
        rate: 1,
        id: players.length + 1,
        avatar: "images/mane.jpg",
      },
      {
        name: "Sadio Mane",
        position: "LF",
        age: 30,
        rate: 1,
        id: players.length + 1,
        avatar: "images/mane.jpg",
      },
      {
        name: "Messi",
        position: "CF",
        age: 30,
        rate: 1,
        id: players.length + 1,
        avatar: "images/messi.jpeg",
      },
      {
        name: "Messi",
        position: "CF",
        age: 30,
        rate: 1,
        id: players.length + 1,
        avatar: "images/messi.jpeg",
      },
      {
        name: "Rio Ferdinand",
        position: "CB",
        age: 30,
        rate: 15,
        id: players.length + 1,
        avatar: "images/rio.jpg",
      },
    ];
    const newState = [...players, newPlayer[Math.floor(Math.random() * 10)]];
    setPlayers(newState);
    if (newState.length == 11) {
      alert("Đội bóng của bạn đã đủ 11 người");
    }
  };

  const onFilterPlayer = () => {
    const filtedState = players.filter(
      (player) => player.rate >= VALID_NUMBER_PLAYER
    );
    setPlayers(filtedState);
  };

  const onDeletePlayerHandler = (id) => {
    const newState = players.filter((player) => player.id !== id);
    setPlayers(newState);
  };

  const playList = players.map((player, index) => (
    <Player
      key={index}
      player={player}
      onDeletePlayer={onDeletePlayerHandler}
    />
  ));
  return (
    <div className="App">
      <h1>Football manager</h1>
      <button onClick={onAddPlayerHandler} className="btn">
        + Player
      </button>
      <button
        onClick={onFilterPlayer}
        className="btn"
        style={{
          marginTop: "16px",
        }}
      >
        Filter player
      </button>
      <div className="players__container">{playList}</div>
    </div>
  );
}

export default App;
//Component Tree
// Desctructering: object, array
// Method array: map, filter, reduce, some, every
