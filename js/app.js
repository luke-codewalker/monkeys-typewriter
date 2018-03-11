const evolve = (population, id) => {
    console.log(id);
    // if evolution process is not the current one we can quit right away
    if (id !== evolutionId) return;

    // evaluate the current population
    population.evaluate();

    // show the best phrase on the page
    select('.best-phrase').innerText = population.bestPhrase;

    // show all phrases on the page
    select('.typewriter').innerHTML = population.members.reduce((allPhrases, member) => {
        return allPhrases += `<span>${member.phrase}</span>`;
    }, ``);

    // if not done request another evolution
    if (population.bestPhrase !== population.target) {
        select('.avg-fitness').innerText = `${Math.floor(population.averageFitness * 100)} %`;
        select('.generation').innerText = population.generation;
        population.generate();
        window.requestAnimationFrame(() => evolve(population, id));
    } else {
        // show that we are done
        select('.best-phrase').classList.add('done');
    }
}

let evolutionId = 0;

select('button').addEventListener('click', () => {
    select('.best-phrase').classList.remove('done');
    // get input values for new population
    const target = select('.target-phrase').value;
    const populationSize = select('.population-size').value;
    const mutationRate = select('.mutation-rate').value;

    if (target.length > 0 &&
        populationSize >= 100 &&
        populationSize <= 999 &&
        mutationRate >= 1 &&
        mutationRate <= 99) {
        // increase the evolution id to stop the old loop
        evolutionId++;
        // use the input to start a new evolution
        const monkeys = new Population(target, populationSize, mutationRate / 100);
        monkeys.init();
        evolve(monkeys, evolutionId);
    }
});

