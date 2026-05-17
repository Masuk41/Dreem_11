import { use } from "react";
import PlayerCard from "../playerCard/PlayerCard";

const AvailablePlayers = ({
  playersPromise,
  availableBalance,
  setAvailableBalance,
  setPurchasedPlayers,
  purchasedPlayers,
}) => {
  const playerData = use(playersPromise);

  return (
    <div className="max-w-300 mx-auto grid grid-cols-1 md:grid-cols-3 gap-3">
      {playerData.map((player) => (
        <PlayerCard
          key={player.id}
          purchasedPlayers={purchasedPlayers}
          setPurchasedPlayers={setPurchasedPlayers}
          player={player}
          availableBalance={availableBalance}
          setAvailableBalance={setAvailableBalance}
        />
      ))}
    </div>
  );
};

export default AvailablePlayers;

