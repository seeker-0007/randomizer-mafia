const ROLE_IMG_NAME = {
  don: "don.jpg",
  sherif: "sherif.jpg",
  mafia: "mafia.jpg",
  civil: "civil.png",
};

export default function Cards({ mode, handleClick }) {
  return (
    <>
      <ol id="roles">
        {mode.roles.map((role, roleIndex) => (
          <li key={roleIndex} className="center">
            <button
              onClick={() => handleClick(roleIndex)}
              disabled={mode.isShown[roleIndex]}
            >
              {mode.isShown[roleIndex] ? (
                <img src={ROLE_IMG_NAME[role]} alt={`${role}`} />
              ) : (
                <img src={`${roleIndex + 1}.png`} alt={roleIndex + 1} />
              )}
            </button>
          </li>
        ))}
        {mode.type === "without10" && (
          <li key={9} className="center">
            <button disabled>
              <img src="civil.png" alt="civil" />
            </button>
          </li>
        )}
      </ol>
    </>
  );
}
