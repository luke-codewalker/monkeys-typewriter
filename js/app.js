const target = 'To be or not to be';
const populationSize = 1500;
const mutationRate = 0.01;

select('.target-phrase').innerText = target;
select('.population-size').innerText = populationSize;
select('.mutation-rate').innerText = `${Math.floor(mutationRate * 100)} %`;

const evolve = (population) => {
    // evaluate if not done request another evolution
    population.evaluate();

    // show the best phrase on the page
    select('.best-phrase').innerText = population.bestPhrase;

    // show all phrases on the page
    select('.typewriter').innerHTML = population.members.reduce((allPhrases, member) => {
        return allPhrases += `<span>${member.phrase}</span>`;
    }, ``);

    if (population.bestPhrase !== target) {
        select('.avg-fitness').innerText = `${Math.floor(population.averageFitness * 100)} %`;
        select('.generation').innerText = population.generation;
        population.generate();
        window.requestAnimationFrame(() => evolve(population));
    } else {
        select('.best-phrase').classList.add('done');
    }
}

select('button').addEventListener('click', () => {
    select('.best-phrase').classList.remove('done');

    const monkeys = new Population(target, populationSize, mutationRate);
    monkeys.init();
    evolve(monkeys)
});