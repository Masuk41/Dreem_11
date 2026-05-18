import React from "react";
import SelectedCard from "../SelectedCard/SelectedCard";

const SelectedPlayers = ({ removePlayer, purchasedPlayers, setToggle }) => {
  return (
    <div className="max-w-250 mx-auto">
      {purchasedPlayers.map((player) => (
        <SelectedCard
          key={player.id}
          removePlayer={removePlayer}
          player={player}
        />
      ))}

      <button
        className="mt-6 px-6 py-2 font-bold text-sm rounded-md border-2 border-yellow-400 text-black bg-green-300 hover:scale-105 transition-transform"
        onClick={() => setToggle(true)}
      >
        Add Button
      </button>
    </div>
  );
};

export default SelectedPlayers;
