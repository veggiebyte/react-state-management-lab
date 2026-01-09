import { useState } from 'react';
import './App.css';

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([

  {
    id: 1,
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: '/images/zombies/survivor.png',
  },
  {
    id: 2,
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: '/images/zombies/scavenger.png',
  },
  {
    id: 3,
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: '/images/zombies/shadow.png',
  },
  {
    id: 4,
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: '/images/zombies/tracker.png',
  },
  {
    id: 5,
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: '/images/zombies/sharpshooter.png',
  },
  {
    id: 6,
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: '/images/zombies/medic.png',
  },
  {
    id: 7,
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: '/images/zombies/engineer.png',
  },
  {
    id: 8,
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: '/images/zombies/brawler.png',
  },
  {
    id: 9,
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: '/images/zombies/infiltrator.png',
  },
  {
    id: 10,
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: '/images/zombies/leader.png',
  },

  ]);

  const handleAddFighter = (fighter) => {
  // Check if enough money
  if (money < fighter.price) {
    console.log('Not enough money');
    return;
  }

  // Add fighter to team
  setTeam([...team, fighter]);

  // Remove fighter from available fighters
  setZombieFighters(zombieFighters.filter(f => f.id !== fighter.id));

  // Subtract price from money
  setMoney(money - fighter.price);
};

const handleRemoveFighter = (fighter) => {
  // Remove fighter from team
  setTeam(team.filter(f => f.id !== fighter.id));

  // Add fighter back to available fighters
  setZombieFighters([...zombieFighters, fighter]);

  // Refund the money
  setMoney(money + fighter.price);
};

const totalStrength = team.reduce((sum, fighter) => sum + fighter.strength, 0);
const totalAgility = team.reduce((sum, fighter) => sum + fighter.agility, 0);

return (
  <div>
    <h1>Zombie Fighters</h1>
    
    <div className="team-stats">
      <p>Money: ${money}</p>
      <p>Team Strength: {totalStrength}</p>
      <p>Team Agility: {totalAgility}</p>
    </div>

    <h2>Team</h2>
    {team.length === 0 ? (
      <p>Pick some team members!</p>
    ) : (
      <ul>
        {team.map((fighter) => (
          <li key={fighter.id}>
            <img src={fighter.img} alt={fighter.name} />
            <h3>{fighter.name}</h3>
            <p>Price: {fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>

          </li>


        ))}
      </ul>
    )}

    <h2>Fighters</h2>
    <ul>
      {zombieFighters.map((fighter) => (
        <li key={fighter.id}>
          <img src={fighter.img} alt={fighter.name} />
          <h3>{fighter.name}</h3>
          <p>Price: {fighter.price}</p>
          <p>Strength: {fighter.strength}</p>
          <p>Agility: {fighter.agility}</p>
          <button onClick={() => handleAddFighter(fighter)}>Add</button>

        </li>
      ))}
    </ul>
  </div>
);
};

export default App;