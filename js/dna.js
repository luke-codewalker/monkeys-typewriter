class DNA {
    constructor(length) {
        this.genes = [];
        for (let i = 0; i < length; i++) {
            this.genes[i] = randomChar();
        }
    }

    get phrase() {
        return this.genes.join('');
    }

}