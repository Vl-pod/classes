import Character from '../class';

describe('Character', () => {
  it('should create a character with valid name and type', () => {
    const bowman = new Character('Legolas', 'Bowman');
    expect(bowman.name).toBe('Legolas');
    expect(bowman.type).toBe('Bowman');
    expect(bowman.health).toBe(100);
    expect(bowman.level).toBe(1);
    expect(bowman.attack).toBe(25);
    expect(bowman.defence).toBe(25);
  });

  it('should throw an error for invalid name length', () => {
    // Покрываем строку с проверкой длины имени
    expect(() => new Character('A', 'Bowman')).toThrow('Invalid name length. Should be between 2 and 10 characters.');
    expect(() => new Character('SomeVeryLongName', 'Bowman')).toThrow('Invalid name length. Should be between 2 and 10 characters.');
  });

  it('should throw an error for invalid character type', () => {
    // Покрываем строку с проверкой типа персонажа
    expect(() => new Character('Legolas', 'Archer')).toThrow('Invalid character type.');
  });

  it('should set default values for health, level, attack, and defence', () => {
    // Покрываем строки с установкой значений по умолчанию
    const character = new Character('Legolas', 'Bowman');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(25);
    expect(character.defence).toBe(25);
  });

  // Покрываем строки с установкой значений для других типов персонажей
  it('should set default values for health, level, attack, and defence for Swordsman', () => {
    const swordsman = new Character('Aragorn', 'Swordsman');
    expect(swordsman.health).toBe(100);
    expect(swordsman.level).toBe(1);
    expect(swordsman.attack).toBe(40);
    expect(swordsman.defence).toBe(10);
  });

  // Покрываем строки с установкой значений для других типов персонажей
  it('should set default values for health, level, attack, and defence for Magician', () => {
    const magician = new Character('Gandalf', 'Magician');
    expect(magician.health).toBe(100);
    expect(magician.level).toBe(1);
    expect(magician.attack).toBe(10);
    expect(magician.defence).toBe(40);
  });

  // Покрываем строки с установкой значений для других типов персонажей
  it('should set default values for health, level, attack, and defence for Undead', () => {
    const undead = new Character('Lich', 'Undead');
    expect(undead.health).toBe(100);
    expect(undead.level).toBe(1);
    expect(undead.attack).toBe(25);
    expect(undead.defence).toBe(25);
  });

  // Покрываем строки с установкой значений для других типов персонажей
  it('should set default values for health, level, attack, and defence for Zombie', () => {
    const zombie = new Character('Zack', 'Zombie');
    expect(zombie.health).toBe(100);
    expect(zombie.level).toBe(1);
    expect(zombie.attack).toBe(40);
    expect(zombie.defence).toBe(10);
  });

  // Покрываем строки с установкой значений для других типов персонажей
  it('should set default values for health, level, attack, and defence for Daemon', () => {
    const daemon = new Character('Balrog', 'Daemon');
    expect(daemon.health).toBe(100);
    expect(daemon.level).toBe(1);
    expect(daemon.attack).toBe(10);
    expect(daemon.defence).toBe(40);
  });
});
