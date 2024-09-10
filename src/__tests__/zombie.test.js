import { Zombie } from "../Zombie";

test("Правильно создаётся Zombie", () => {
  const zombie = new Zombie("Zombie");
  const correct = {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: "Zombie",
    type: "Zombie",
  };
  expect(zombie).toEqual(correct);
});
