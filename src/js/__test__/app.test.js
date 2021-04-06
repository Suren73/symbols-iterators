import Team from '../app';
import Bowman from '../bowman';
import Daemon from '../daemon';
import Undead from '../undead';
import Character from '../character';

test('testing class Team', () => {
  const expected = {
    done: false,
    value: {
      attack: 25,
      defence: 25,
      health: 100,
      level: 1,
      name: 'Лучник',
      type: 'Bowman',
    },
  };
  const team = new Team();
  const bowman = new Bowman('Лучник');
  const daemon = new Daemon('Демон');
  const undead = new Undead('Смертник');
  team.addAll(bowman, daemon, undead, bowman);
  const iterator = team[Symbol.iterator]();
  expect(iterator.next()).toEqual(expected);
});

test('testing class Team', () => {
  const expected = {
    done: false,
    value: {
      attack: 10,
      defence: 40,
      health: 100,
      level: 1,
      name: 'Демон',
      type: 'Daemon',
    },
  };
  const team = new Team();
  const bowman = new Bowman('Лучник');
  const daemon = new Daemon('Демон');
  const undead = new Undead('Смертник');
  team.addAll(bowman, daemon, undead, bowman);
  const iterator = team[Symbol.iterator]();
  iterator.next();
  expect(iterator.next()).toEqual(expected);
});

test('testing class Team', () => {
  const expected = {
    done: true,
  };
  const team = new Team();
  const bowman = new Bowman('Лучник');
  const daemon = new Daemon('Демон');
  const undead = new Undead('Смертник');
  team.addAll(bowman, daemon, undead, bowman);
  const iterator = team[Symbol.iterator]();
  iterator.next();
  iterator.next();
  iterator.next();
  expect(iterator.next()).toEqual(expected);
});

test('testing class Team', () => {
  const expected = {
    done: true,
  };
  const team = new Team();
  expect(team[Symbol.iterator]().next()).toEqual(expected);
});

test('testing class Team', () => {
  expect(() => {
    const team = new Team();
    const bowman = new Bowman('Лучник');
    team.add(bowman);
    team.add(bowman);
  }).toThrow();
});

test('testing class Team', () => {
  const expected = [
    {
      name: 'Лучник',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
    {
      name: 'Демон',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
    {
      name: 'Смертник',
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
  ];
  const team = new Team();
  const bowman = new Bowman('Лучник');
  const daemon = new Daemon('Демон');
  const undead = new Undead('Смертник');
  team.addAll(bowman, daemon, undead, bowman);
  expect([...team.members]).toEqual(expected);
});

test('testing class Team', () => {
  const expected = [
    {
      name: 'Лучник',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
  ];
  const team = new Team();
  const bowman = new Bowman('Лучник');
  team.add(bowman);
  expect(team.toArray()).toEqual(expected);
});

test('testing class Character', () => {
  expect(() => new Character('Andrei', 10)).toThrow('Ошибка типа игрока');
});

test('testing the player creation function', () => {
  expect(() => new Character('A', 'Bowman')).toThrow('Ошибка имени');
});
