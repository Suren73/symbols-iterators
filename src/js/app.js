export default class Team {
  constructor() {
    let i = 0;
    this.members = new Set();
    this[Symbol.iterator] = function () {
      const personas = [...this.members];
      const len = personas.length;
      return {
        next() {
          if (len === 0 || i >= len) {
            return { done: true };
          }
          return {
            value: personas[i++],
            done: false,
          };
        },
      };
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
