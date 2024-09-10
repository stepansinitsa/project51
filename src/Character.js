export class Character {
  constructor(name, type) {
    this.name = getName(name);
    this.type = getType(type);
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }
}

export const types = [
  "Bowman",
  "Swordsman",
  "Magician",
  "Daemon",
  "Undead",
  "Zombie",
];

export const getName = function (name) {
  if (typeof name != "string") {
    throw new Error("Ошибка в типе данных name");
  }
  if (name.length < 2 || name.length > 10) {
    throw new Error("Ошибка в длине name");
  }
  return name;
};

export const getType = function (type) {
  if (typeof type != "string") {
    throw new Error("Ошибка в типе данных type");
  }
  if (types.includes(type)) {
    return type;
  }
  throw new Error("Ошибка в названии type");
};
