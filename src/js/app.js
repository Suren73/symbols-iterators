export default class Team {
  constructor() {
    this.members = new Set();
  }

  [Symbol.iterator]() {
    const personas = [...this.members];
    // const len = personas.length;
    let index = -1;
    return {
      next() {
        index++;
        return {
          value: personas[index],
          done: index >= personas.length,
        };
      },
    };
  }

  add(persona) {
    if (!this.members.has(persona)) {
      this.members.add(persona);
    } else {
      throw new Error('Персонаж уже добавлен');
    }
  }

  addAll(...personas) {
    personas.forEach((persona) => this.members.add(persona));
  }

  toArray() {
    return [...this.members];
  }
}
