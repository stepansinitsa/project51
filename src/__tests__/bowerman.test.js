import { Bowerman } from "../Bowerman";

test("Правильно создаётся Bowerman", () => {
  const bowerman = new Bowerman("Bowman");
  const correct = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: "Bowman",
    type: "Bowman",
  };
  expect(bowerman).toEqual(correct);
});
