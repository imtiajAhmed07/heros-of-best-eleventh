import './App.css';
import { useEffect, useState } from 'react';
import playerData from './data/data.json';
import Player from './components/Player/Player';
import SelectedPlayer from './components/SelectedPlayer/SelectedPlayer';
import Header from './components/Header/Header';

function App()
{

  const [player, setPlayer] = useState([])
  const [selectedPlayer, setSelectedPlayer] = useState([])
  const [playerName, setPlayersName] = useState([])
  const [playerSalary, setPlayerSalary] = useState([])

  useEffect(() =>
  {
    setPlayer(playerData)
  }, [])



  const handleAddPlayer = (player) =>
  {

    if (selectedPlayer.length < 11)
    {
      const newSelectedPlayer = [...selectedPlayer, player]
      setSelectedPlayer(newSelectedPlayer)

    } else
    {
      alert("Sorry you can't add players more than 11")
    }

    const newPlayer = [...playerName, player.name]
    setPlayersName(newPlayer)

    const newSalary = [...playerSalary, player.salary]
    setPlayerSalary(newSalary)


  }


  console.log(selectedPlayer)
  return (
    <div>
      <Header></Header>
      <div className="divContainer">
        {
          player.map(player => <Player player={player} handleAddPlayer={handleAddPlayer} key={player.img}></Player>)
        }
      </div>
      <SelectedPlayer selectedPlayer={selectedPlayer} playerName={playerName} playerSalary={playerSalary}></SelectedPlayer>
    </div>
  );
}

export default App;
