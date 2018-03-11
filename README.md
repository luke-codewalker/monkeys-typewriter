# Monkeys With Typewriters ⌨🐒⌨🐒⌨🐒

## About

This [page](https://luke-codewalker.github.io/monkeys-typewriter/) demonstrates a **genetic algorithm** that will evolve a population of monkeys with typewriters to type a given target phrase. You can play around with the **target phrase**, the **population size** and the **mutation rate** and see how it affects the evolution process. 

* See [below](#genetic-algorithm) to learn more about the implementation on his page.
* This creation was inspired by [Daniel Shiffmann](https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw) and his Nature of Code video series, especially [this video](https://www.youtube.com/watch?v=nrKjSeoc7fc).
* If you have any question, issues or ideas for changes feel free to use the associated [repository](https://github.com/luke-codewalker/monkeys-typewriter).


## Using the page
You can play around with the **target phrase**, the **population size** and the **mutation rate** to influence how the population behaves. By pressing `Let them smash the keys` you start an evolution with the current parameters. If nothing happens check if you've entered valid parameters.

Depending on your input the evolution will take more or less time. Longer phrases need more time, as well as smaller populations. An increased mutation rate can help to arrive at the target phrase but if it's too high, the monkeys will change too drastically with every new generation and never progress towards the target phrase.

If it takes reaaaally long without ever reaching the target you might have hit a limit that the population with these certain parameters can never overcome. Just try again with new values! 🙈


## Genetic Algorithm
To get an in-depth understanding of genetic algorithms in programming I can recommend Daniel Shiffman's [video series](https://www.youtube.com/watch?v=9zfeTw-uFCw&list=PLRqwX-V7Uu6bJM3VgzjNV5YxVxUwzALHV) on them. The basic idea is to take concepts from natural evolution like *fitness*, *selection*, *crossover* and *mutation* and apply them in a programm. This way some problems can be solved more efficiently than for example with brute force guessing.

In this example the goal for the programm is to correctly guess a **target phrase** you give it e.g. `Lorem ipsum sunt dolores`. This would take a very long time if we just depended on chance and let the programm guess a completely random sequence of caracters every iteration.

We can solve this problem with a **genetic algorithm**! Here's how it's implemented in this example:

 1. Make a *population* in which every member can type a phrase the same length of the target phrase. The phrase is determined by the individual member's genes. These are just a random sequence of characters in the start.

 2. Now evaluate the *fitness* of every member. The fitness is simply the percentage of correctly guessed characters in the member's phrase.

 3. Make a *mating pool* from which to pick the parents of a new generation. Members with a higher *fitness* will have a higher probability of being picked as parents.

4. Completely renew the population by doing the following steps for every member:
    * Pick two parents from the mating pool
    * Perform a *crossover* of their genes: make a new gene sequence by combining parts of the parents' genes
    * Perform *mutation*: change some parts of the new genes randomly
    * Create a new member with these genes and put it in the population replacing the old one

5. Repeat until the target phrase is reached

