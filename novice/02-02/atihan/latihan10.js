class BangunDatar {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    persegiPanjang() {
        return this.height * this.width;
    }
}

const square = new BangunDatar(10, 34);

console.log(square.persegiPanjang());