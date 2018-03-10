class DNA {
    constructor(length = 0) {
        this.genes = [];
        for (let i = 0; i < length; i++) {
            this.genes[i] = randomChar();
        }
    }

    get phrase() {
        return this.genes.join('');
    }

    static crossover(parentA, parentB) {
        const slicePoint = Math.floor(random(parentA.genes.length));
        return parentA.genes.slice(0, slicePoint).concat(parentB.genes.slice(slicePoint));
    }

    static mutate(genes, rate) {
        return genes.map(gene => {
            if (random() < rate) {
                return randomChar();
            } else {
                return gene;
            }
        })
    }

    fitness(target) {
        const score = this.genes.reduce((score, geneChar, i) => {
            if (geneChar === target[i]) {
                return score += 1;
            } else {
                return score;
            }
        }, 0);

        return score / target.length;
    }
}