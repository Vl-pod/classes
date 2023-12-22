export default class Character {
	constructor(name, type) {
			if (name.length < 2 || name.length > 10) {
					throw new Error("Invalid name length. Should be between 2 and 10 characters.");
			}

			const validTypes = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"];
			if (!validTypes.includes(type)) {
					throw new Error("Invalid character type.");
			}

			this.name = name;
			this.type = type;
			this.health = 100;
			this.level = 1;

			// Set attack and defence based on character type
			switch (type) {
					case "Bowman":
							this.attack = 25;
							this.defence = 25;
							break;
					case "Swordsman":
							this.attack = 40;
							this.defence = 10;
							break;
					case "Magician":
							this.attack = 10;
							this.defence = 40;
							break;
					case "Undead":
							this.attack = 25;
							this.defence = 25;
							break;
					case "Zombie":
							this.attack = 40;
							this.defence = 10;
							break;
					case "Daemon":
							this.attack = 10;
							this.defence = 40;
							break;
					default:
							throw new Error("Invalid character type.");
			}
	}
}
