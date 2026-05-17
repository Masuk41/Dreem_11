import { useState } from "react";
import userLogo from "../../assets/user_1.png";
import flagImg from "../../assets/Vector.png";
import { toast } from "react-toastify";

const PlayerCard = ({
  player,
  availableBalance,
  setAvailableBalance,
  setPurchasedPlayers,
  purchasedPlayers,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleselected = (playerData) => {
    const priceStr = playerData.price || "0";
    const playerPrice = parseInt(
      priceStr.split("৳").join("").split(",").join(""),
    );
    if (availableBalance < playerPrice) {
      toast("Not enough coin!!!");
      return;
    }
    if (purchasedPlayers.length === 6) {
      toast("6 players already selected!");
      return;
    }
    setIsSelected(true);
    setAvailableBalance(availableBalance - playerPrice);
    setPurchasedPlayers([...purchasedPlayers, playerData]);
  };

  return (
    <div className="card bg-base-100 shadow-sm p-4">
      <figure>
        <img
          src={player.player_image}
          alt={player.player_name}
          className="w-full min-h-70 object-cover"
        />
      </figure>
      <div className="mt-4">
        <div className="flex">
          <img src={userLogo} alt="user icon" />
          <h2 className="card-title ml-4">{player.player_name}</h2>
        </div>
        <div className="flex justify-between mt-4 border-b-2 border-gray-400 pb-1">
          <div className="flex items-center">
            <img src={flagImg} alt="flag" />
            <p className="ml-2">{player.player_country}</p>
          </div>
          <div>
            <button className="btn">{player.playing_role}</button>
          </div>
        </div>
        <div className="flex justify-between">
          <span>Rating</span>
          <span>{player.rating}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-bold">{player.batting_style}</span>
          <span>{player.bowling_style}</span>
        </div>
        <div className="card-actions mt-4 flex justify-between items-center">
          <span className="font-bold">Price: {player.price}</span>
          <button
            disabled={isSelected}
            onClick={() => handleselected(player)}
            className="btn justify-end"
          >
            {isSelected ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
