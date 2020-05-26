import java.util.Random;


public class GA {

    Population population = new Population();
    Individual fittest;
    Individual secondFittest;
    int generationCount = 0;

    public static void main(String[] args) {

        Random rn = new Random();

        GA example = new GA();

        
        example.population.initializePopulation(10);

        
        example.population.calculateFitness();

        System.out.println("Generation number: " + (example.generationCount + 1) + " Fittest number: " + example.population.fittest);

        
        while (example.population.fittest < 5) {
            ++example.generationCount;

            
            example.selection();

            
            example.crossover();

            
            if (rn.nextInt()%7 < 5) {
            	example.mutation();
            }

            
            example.addFittestOffspring();

            
            example.population.calculateFitness();

            System.out.println("Generation number: " + example.generationCount + " Fittest number: " + example.population.fittest);
        }

        System.out.println("\nBest choice found in generation number " + example.generationCount);

    }

    //The idea of selection phase is to select the fittest individuals and let them pass
//their genes to the next generation.
    void selection() {

        
        fittest = population.getFittest();

        
        secondFittest = population.getSecondFittest();
    }

    //Crossover is the most significant phase in a genetic algorithm. For each pair of
//parents to be mated, a crossover point is chosen at random from within the
//genes.
    void crossover() {
        Random rn = new Random();

        
        int crossOverPoint = rn.nextInt(population.individuals[0].geneLength);

        
        for (int i = 0; i < crossOverPoint; i++) {
            int temp = fittest.genes[i];
            fittest.genes[i] = secondFittest.genes[i];
            secondFittest.genes[i] = temp;

        }

    }

    //In certain new offspring formed, some of their genes can be subjected to a
//mutation with a low random probability. This implies that some of the bits in
//the bit string can be flipped.
    void mutation() {
        Random rn = new Random();

        
        int mutationPoint = rn.nextInt(population.individuals[0].geneLength);

        
        if (fittest.genes[mutationPoint] == 0) {
            fittest.genes[mutationPoint] = 1;
        } else {
            fittest.genes[mutationPoint] = 0;
        }

        mutationPoint = rn.nextInt(population.individuals[0].geneLength);

        if (secondFittest.genes[mutationPoint] == 0) {
            secondFittest.genes[mutationPoint] = 1;
        } else {
            secondFittest.genes[mutationPoint] = 0;
        }
    }

    //getter
    Individual getFittestOffspring() {
        if (fittest.fitness > secondFittest.fitness) {
            return fittest;
        }
        return secondFittest;
    }


    //
    void addFittestOffspring() {

        
        fittest.calcFitness();
        secondFittest.calcFitness();

        
        int leastFittestIndex = population.getLeastFittestIndex();

        
        population.individuals[leastFittestIndex] = getFittestOffspring();
    }

}

import java.util.Random;

class Individual {

    int fitness = 0;
    int[] genes = new int[5];
    int geneLength = 5;

    public Individual() {
        Random rn = new Random();

        //Рандомная подборка пяти генов
        for (int i = 0; i < genes.length; i++) {
            genes[i] = Math.abs(rn.nextInt() % 2);
        }

        fitness = 0;
    }

    //Высчитавние уровня подходимости гена
    public void calcFitness() {

        fitness = 0;
        for (int i = 0; i < 5; i++) {
            if (genes[i] == 1) {
                ++fitness;
            }
        }
    }

}

public class Population {

    Individual[] individuals = new Individual[5];
    int fittest = 0;

    //Определение "поколения" (сбор сгенерированных моделей из класса Individual)
    public void initializePopulation(int size) {
        for (int i = 0; i < individuals.length; i++) {
            individuals[i] = new Individual();
        }
    }

    //Нахождение наилучшего "гена" (части машины)
    //Fitness Function
//The fitness function determines how fit an individual is (the ability of an
//individual to compete with other individuals). It gives a fitness score to each
//individual. The probability that an individual will be selected for reproduction is
//based on its fitness score.
    public Individual getFittest() {
        int maxFit = 0;
        int maxFitIndex = 0;
        for (int i = 0; i < individuals.length; i++) {
            if (maxFit <= individuals[i].fitness) {
                maxFit = individuals[i].fitness;
                maxFitIndex = i;
            }
        }
        fittest = individuals[maxFitIndex].fitness;
        return individuals[maxFitIndex];
    }
    
    
    public Individual getSecondFittest() {
        int maxFit1 = 0;
        int maxFit2 = 0;
        for (int i = 0; i < individuals.length; i++) {
            if (individuals[i].fitness > individuals[maxFit1].fitness) {
                maxFit2 = maxFit1;
                maxFit1 = i;
            } else if (individuals[i].fitness > individuals[maxFit2].fitness) {
                maxFit2 = i;
            }
        }
        return individuals[maxFit2];
    }

    
    public int getLeastFittestIndex() {
        int minFitVal = Integer.MAX_VALUE;
        int minFitIndex = 0;
        for (int i = 0; i < individuals.length; i++) {
            if (minFitVal >= individuals[i].fitness) {
                minFitVal = individuals[i].fitness;
                minFitIndex = i;
            }
        }
        return minFitIndex;
    }

    // Конечное высчитывание наилучшего "гена" (части машины) исходя из выставленных оценок
    public void calculateFitness() {

        for (int i = 0; i < individuals.length; i++) {
            individuals[i].calcFitness();
        }
        getFittest();
    }

}