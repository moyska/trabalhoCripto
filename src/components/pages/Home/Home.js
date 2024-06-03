import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../shared/Card/Card';
import jogos from '../Jogos';

const Home = () => {
  const [games, setGames] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setGames(jogos);
  }, []);
  const filteredGames = useMemo(() => {
    return games.filter(game => game.title.toLowerCase().includes(filter.toLowerCase()));
  }, [games, filter]);

  const handleFilterChange = useCallback((event) => {
    setFilter(event.target.value);
  }, []);

  return (
    <div>
      <header>
        <div className="website-title">
          <h1>Game Library</h1>
        </div>
        <div className="navigation">
          <input
            type="text"
            placeholder="Search games..."
            value={filter}
            onChange={handleFilterChange}
          />
        </div>
      </header>
      <main>
        {filteredGames.map(game => (
          <Link to={`/game/${game.id}`} key={game.id}>
            <Card game={game} />
          </Link>
        ))}
      </main>
    </div>
  );
};

export default Home;
