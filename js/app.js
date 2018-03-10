const monkeys = new Population('hello', 0.01, 10);

monkeys.population.forEach(monkey => console.log(monkey.phrase))