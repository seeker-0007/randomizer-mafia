import { useState } from "react";

import Cards from "./components/Cards";
import ModeChanger from "./components/ModeChanger";
import deriveRoles from "./util/deriveRoles";

import "./styles/cards.css";
import "./styles/menu.css";

const DEFAULT_MODE_INITIAL_DATA = {
  classic: { playerCount: 10, mafiaCount: 3 },
  without10: { playerCount: 9, mafiaCount: 3 },
  creative: { playerCount: 7, mafiaCount: 2 },
};

export default function App() {
  const [mode, setMode] = useState({
    type: "classic",
    playerCount: 10,
    mafiaCount: 3,
    roles: deriveRoles(10, 3),
    isShown: Array(10).fill(false),
  });

  function handleClick(roleIndex) {
    setMode((prevMode) => {
      const updatedMode = {
        ...prevMode,
      };
      updatedMode.isShown[roleIndex] = true;
      return updatedMode;
    });
  }

  function handleModeChange(type) {
    const newPlayerCount = DEFAULT_MODE_INITIAL_DATA[type].playerCount;
    const newMafiaCount = DEFAULT_MODE_INITIAL_DATA[type].mafiaCount;

    setMode({
      type: type,
      playerCount: newPlayerCount,
      mafiaCount: newMafiaCount,
      roles: deriveRoles(newPlayerCount, newMafiaCount),
      isShown: Array(newPlayerCount).fill(false),
    });
  }

  return (
    <>
      <Cards mode={mode} handleClick={handleClick} />
      <ModeChanger
        mode={mode}
        setMode={setMode}
        handleModeChange={handleModeChange}
        deriveRoles={deriveRoles}
      />
    </>
  );
}
