import './Card.css'

export const Card = ({ game }) => {

    const formatNumber = (number) => number.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const cardStyle = {
        backgroundImage: `url(${game.img})`,
    };
    debugger
    return (
        <div className="card" style={cardStyle}>
            <div className="container-price">
                <span className="promo">{game.desconto * 100}%</span>
                <div className="group-price">
                    <span className="original-price">{formatNumber(game.precoOrig)}</span>
                    <span className="price">{formatNumber(game.precoOrig * game.desconto)}</span>
                </div>
            </div>
        </div>
    )
}