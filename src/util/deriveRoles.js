export default function deriveRoles(playerCount, mafiaCount) {
  const roles = Array(playerCount).fill("civil");
  const slots = [];

  for (let i = 0; i < mafiaCount + 1; i++) {
    while (true) {
      const slot = Math.floor(Math.random() * playerCount);
      if (!slots.includes(slot)) {
        slots.push(slot);
        if (i === 0) {
          roles[slot] = "sherif";
        } else if (i === 1) {
          roles[slot] = "don";
        } else {
          roles[slot] = "mafia";
        }
        break;
      }
    }
  }

  return roles;
}
