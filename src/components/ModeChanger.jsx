import Select from "./Select";
import { useState } from "react";
import deriveRoles from "../util/deriveRoles";

export default function ModeChanger({ mode, setMode, handleModeChange }) {
  const playerCountRange = [7, 8, 9, 10, 11, 12, 13, 14, 15];
  const [mafiaCountRange, setMafiaCountRange] = useState([1, 2]);

  function handlePlayerCountChange(newPlayerCount) {
    setMode((prevMode) => ({
      type: prevMode.type,
      playerCount: +newPlayerCount,
      mafiaCount: Math.round(+newPlayerCount * 0.3),
      roles: deriveRoles(+newPlayerCount, Math.round(+newPlayerCount * 0.3)),
      isShown: Array(newPlayerCount).fill(false),
    }));

    setMafiaCountRange(
      Array.from({ length: Math.round(newPlayerCount * 0.3) }, (_, i) => i + 1)
    );
  }

  function handleMafiaCountChange(newMafiaCount) {
    setMode((prevMode) => ({
      ...prevMode,
      mafiaCount: newMafiaCount,
      roles: deriveRoles(prevMode.playerCount, +newMafiaCount),
      isShown: Array(prevMode.playerCount).fill(false),
    }));
  }

  return (
    <>
      <div className="hamburger-menu">
        <input id="menu_toggle" type="checkbox" />
        <label className="menu_btn" htmlFor="menu_toggle">
          <span></span>
        </label>
        <ul className="menu_box">
        <Select
          labelText="Mode"
          id="mode"
          value={mode.type}
          onChange={(event) => handleModeChange(event.target.value)}
        >
          <option value="classic">Classic</option>
          <option value="without10">Without 10</option>
          <option value="creative">Creative</option>
        </Select>
        {mode.type === "creative" && (
          <>
            <Select
              labelText="Player Count"
              id="playerCount"
              value={mode.playerCount}
              onChange={(event) => handlePlayerCountChange(event.target.value)}
            >
              {playerCountRange.map((item, itemIndex) => (
                <option key={itemIndex} value={item}>{item}</option>
              ))}
            </Select>
            <Select
              labelText="Mafia Count"
              id="mafiaCount"
              value={mode.mafiaCount}
              onChange={(event) => handleMafiaCountChange(event.target.value)}
            >
              {mafiaCountRange.map((item, itemIndex) => (
                <option key={itemIndex} value={item}>{item}</option>
              ))}
            </Select>
          </>
        )}
        </ul>
      </div>
    </>
  );
}
