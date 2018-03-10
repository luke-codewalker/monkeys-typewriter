const target = 'To be or not to be that is the question';
const populationSize = 1500;
const mutationRate = 0.01;

select('.population-size').innerText = populationSize;
select('.mutation-rate').innerText = `${Math.floor(mutationRate * 100)} %`;

const monkeys = new Population(target, populationSize, mutationRate);
monkeys.init();

const evolve = (population) => {
    // evaluate if not done request another evolution
    population.evaluate();

    // show the best phrase on the page
    select('.best-phrase').innerText = population.bestPhrase;

    if (population.bestPhrase !== target) {
        select('.avg-fitness').innerText = `${Math.floor(population.averageFitness * 100)} %`;
        select('.generation').innerText = population.generation;
        population.generate();
        window.requestAnimationFrame(() => evolve(population));
    }
}

evolve(monkeys);