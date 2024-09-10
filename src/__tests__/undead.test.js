import { Undead } from "../Undead";

test("Правильно создаётся Undead", () => {
  const undead = new Undead("Undead");
  const correct = {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: "Undead",
    type: "Undead",
  };
  expect(undead).toEqual(correct);
});
