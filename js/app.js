const evolve = (population) => {
    // evaluate if not done request another evolution
    population.evaluate();

    // show the best phrase on the page
    select('.best-phrase').innerText = population.bestPhrase;

    // show all phrases on the page
    select('.typewriter').innerHTML = population.members.reduce((allPhrases, member) => {
        return allPhrases += `<span>${member.phrase}</span>`;
    }, ``);

    if (population.bestPhrase !== population.target) {
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

    const target = select('.target-phrase').value;
    const populationSize = select('.population-size').value;
    const mutationRate = select('.mutation-rate').value;

    if(target.length > 0 &&
    populationSize >= 100 &&
    populationSize <= 999 &&
    mutationRate >= 1 &&
    mutationRate <= 99) {
        const monkeys = new Population(target, populationSize, mutationRate / 100);
        monkeys.init();
        evolve(monkeys);
    } 
});

