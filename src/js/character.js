export default class Character {
  constructor(name, type, health = 100, level = 1, attack = Number(), defence = Number()) {
    const playerType = ['Bowman', 'Swordsman', 'Magician', 'Undead', 'Zombie', 'Daemon'];
    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Ошибка имени');
    }
    if (playerType.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Ошибка типа игрока');
    }
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }
}
