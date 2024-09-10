import { Daemon } from "../Daemon";

test("Правильно создаётся Daemon", () => {
  const daemon = new Daemon("Daemon");
  const correct = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: "Daemon",
    type: "Daemon",
  };
  expect(daemon).toEqual(correct);
});
