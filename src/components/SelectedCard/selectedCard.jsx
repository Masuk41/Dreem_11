import React from "react";

const SelectedCard = ({ player, removePlayer }) => {
  const handleRemove = () => {
    removePlayer(player);
  };

  return (
    <div className="border-2 mt-5 border-gray-300 p-3 flex justify-between items-center rounded-xl">
      <div className="flex items-center">
        <img
          src={player.player_image}
          className="h-12 w-12 rounded-xl"
          alt=""
        />
        <div className="ml-2">
          <h1>{player.player_name}</h1>
          <p className="textarea-sm">{player.playing_role}</p>
        </div>
      </div>

      <div onClick={handleRemove}>
        <img src="https://i.ibb.co.com/d9YyH2F/Frame.png" alt="" />
      </div>
    </div>
  );
};

export default SelectedCard;
