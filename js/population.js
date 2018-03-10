class Population {
    constructor(target, mutationRate, populationMax) {
        this.target = target;
        this.mutationRate = mutationRate;
        this.populationMax = populationMax;
        this.population = [];

        for (let i = 0; i < populationMax; i++) {
            this.population[i] = new DNA(this.target.length);
        }
    }
}