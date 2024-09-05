class Character {
  constructor(name, type, health, level, attack, defence) {
    this.name = getName(name);
    this.type = getType(type);
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }
};

const getName = function (obj) {
  if (typeof obj != "string") {
    throw new Error("Ошибка в типе данных name");
  } else {
    if (obj.length < 2 || obj.length > 10) {
      throw new Error("Ошибка в длине name");
    } else {
      return obj;
    }
  }
};

const getType = function (obj) {
  if (typeof obj != "string") {
    throw new Error("Ошибка в типе данных type");
  } else {
    if (
      obj === "Bowman" ||
      obj === "Swordsman" ||
      obj === "Magician" ||
      obj === "Daemon" ||
      obj === "Undead" ||
      obj === "Zombie"
    ) {
      return obj;
    } else {
      throw new Error("Ошибка в названии type");
    }
  }
};

export class Bowerman extends Character {
  constructor (name, type, health, level, attack, defence) {
    super(name, type, health, level, attack, defence);
  }
};
export class Swordsman extends Character {
  constructor (name, type, health, level, attack, defence) {
    super(name, type, health, level, attack, defence);
  }
};
export class Magician extends Character {
  constructor (name, type, health, level, attack, defence) {
    super(name, type, health, level, attack, defence);
  }
};
export class Daemon extends Character {
  constructor (name, type, health, level, attack, defence) {
    super(name, type, health, level, attack, defence);
  }
};
export class Undead extends Character {
  constructor (name, type, health, level, attack, defence) {
    super(name, type, health, level, attack, defence);
  }
};
export class Zombie extends Character {
  constructor (name, type, health, level, attack, defence) {
    super(name, type, health, level, attack, defence);
  }
};