class Hero {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }
    greet() {
        return `${this.name} adalah Nama saya`;
    }
}

class Mage extends Hero {
    constructor(name, level, spell) {
        super(name, level);

        // propeti baru
        this.spell = spell;
    }
    serang() {
        console.log(`Rassaaaakaannn iniiiiiii musuh-kuuuunn, ${this.spell}`);
    }
}

let momochan = new Mage('momochan', 3, 'Fayeru Bolt');
momochan.serang();