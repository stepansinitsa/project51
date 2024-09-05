import { Bowerman, Swordsman, Magician, Daemon, Undead, Zombie    } from "../app.js";

test("Bowerman", () => {
  const result = new Bowerman("Andrey", "Bowman", 100, 1, 25, 25);
  expect(result).toEqual(
    {
      name: 'Andrey', 
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25 
    }
  );
});

test("Swordsman", () => {
  const result = new Swordsman("Ivan", "Swordsman", 100, 1, 40, 10);
  expect(result).toEqual(
    {
      name: 'Ivan', 
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10 
    }
  );
});

test("Magician", () => {
  const result = new Magician("Sergey", "Magician", 100, 1, 10, 40);
  expect(result).toEqual(
    {
      name: 'Sergey', 
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40 
    }
  );
});

test("Daemon", () => {
  const result = new Daemon("Stepan", "Daemon", 100, 1, 25, 25);
  expect(result).toEqual(
    {
      name: 'Stepan', 
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25 
    }
  );
});

test("Undead", () => {
  const result = new Undead("Anatoliy", "Undead", 100, 1, 40, 10);
  expect(result).toEqual(
    {
      name: 'Anatoliy', 
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10 
    }
  );
});

test("Zombie", () => {
  const result = new Zombie("Ignat", "Zombie", 100, 1, 10, 40);
  expect(result).toEqual(
    {
      name: 'Ignat', 
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40 
    }
  );
});

