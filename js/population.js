class Population {
    constructor(target, populationSize, mutationRate) {
        this.target = target;
        this.mutationRate = mutationRate;
        this.populationSize = populationSize;
        this.members = [];
        this.matingPool = [];
        this.generation = 0;
        this.bestPhrase = '';
        this.averageFitness = 0;
    }

    // Set up a fresh population
    init() {
        for (let i = 0; i < this.populationSize; i++) {
            this.members.push(new DNA(this.target.length))
        }
    }

    // Evaluate the population's metrics
    evaluate() {
        // calculate fitness for all members
        let recordFitness = 0;
        let recordIndex = 0;
        let fitnessSum = 0;
        for (let i = 0; i < this.members.length; i++) {
            const fitness = this.members[i].fitness(this.target);
            // add to overall sum
            fitnessSum += fitness;
            // check if it beats the record
            if (fitness > recordFitness) {
                recordFitness = fitness;
                recordIndex = i;
            }
        }

        this.bestPhrase = this.members[recordIndex].phrase;
        this.averageFitness = fitnessSum / this.members.length;
    }

    // One complete generation change
    generate() {
        // Construct a mating pool from the current population
        this.matingPool = [];
        for (const member of this.members) {
            const share = member.fitness(this.target) * 100;
            for (let i = 0; i < share; i++) {
                this.matingPool.push(member);
            }
        }

        // Replace every member in the population with a new child made by drawing 
        // parents from the mating pool
        for (let i = 0; i < this.members.length; i++) {
            const parentA = this.matingPool[Math.floor(random(this.matingPool.length))];
            const parentB = this.matingPool[Math.floor(random(this.matingPool.length))];
            const child = new DNA();
            child.genes = DNA.mutate(DNA.crossover(parentA, parentB), this.mutationRate);
            this.members[i] = child;
        }

        // increase the generation count once done
        this.generation++;
    }

}