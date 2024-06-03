import React from 'react';
import { useParams } from 'react-router-dom';
import jogos from '../Jogos';


const GameDetails = () => {
  const { id } = useParams();
  const game = jogos.find(game => game.id === parseInt(id));

  if (!game) {
    return <div>Game not found</div>;
  }

  return (
    <div>
      <header>
        <div className="website-title">
          <h1>{game.title}</h1>
        </div>
      </header>
      <main>
        <div className="card" style={{ backgroundImage: `url(${game.imageUrl})` }}>
          <div className="container-price">
            {game.promoPrice && <div className="promo">${game.promoPrice}</div>}
            <div className="group-price">
              <div className={game.promoPrice ? 'original-price' : ''}>${game.price}</div>
            </div>
          </div>
        </div>
        <div>
          <h2>Price: ${game.price}</h2>
          {game.promoPrice && <h2>Promo Price: ${game.promoPrice}</h2>}
        </div>
      </main>
    </div>
  );
};

export default GameDetails;
