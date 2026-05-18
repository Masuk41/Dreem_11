import { Suspense, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer/Footer";
import HeroCard from "./components/Herosection/HeroCard";
import SelectedPlayers from "./components/selectedPlayers/SelectedPlayers";

const fetchPlayer = async () => {
  const res = await fetch("./players.json");
  return res.json();
};

const playersPromise = fetchPlayer();

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(60000000000);
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);

  const removePlayer = (p) => {
    const filteredData = purchasedPlayers.filter((ply) => ply.id !== p.id);
    setPurchasedPlayers(filteredData);

    const priceNum = parseInt(
      p.price?.split("৳").join("").split(",").join("") || "0",
      10,
    );
    setAvailableBalance(availableBalance + priceNum);
  };

  return (
    <>
      <Navbar availableBalance={availableBalance} />
      <div className="border-2 border-white max-w-300 mx-auto flex justify-between items-center font-bold">
        <h1 className="font-bold text-2xl">
          {toggle === true
            ? "Available players"
            : `selected player(${purchasedPlayers.length}/6)`}
        </h1>
        <div>
          <button
            onClick={() => setToggle(true)}
            className={`py-3 px-4 border border-gray-400 rounded-l-2xl border-r-0 ${
              toggle === true ? "bg-[#E7FE29]" : ""
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`py-3 px-4 border border-gray-400 rounded-r-2xl border-l-0 ${
              toggle === false ? "bg-[#E7FE29]" : ""
            }`}
          >
            selected <span>({purchasedPlayers.length})</span>{" "}
          </button>
        </div>
      </div>
      {toggle === true ? (
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xs"></span>
          }
        >
          <HeroCard />
          <AvailablePlayers
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            playersPromise={playersPromise}
            purchasedPlayers={purchasedPlayers}
            setPurchasedPlayers={setPurchasedPlayers}
          />
        </Suspense>
      ) : (
        <SelectedPlayers
          removePlayer={removePlayer}
          purchasedPlayers={purchasedPlayers}
          setToggle={setToggle}
        />
      )}

      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
