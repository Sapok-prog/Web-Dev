from Animal import Animal
from Dog import Dog
from Cat import Cat

Bird = Animal("Bird" , 1 , False)
Alex = Dog("Alex" , 5 , True , 5)
Mary = Cat("Mary" , 4 , True , "Regdoll")

listOfAnimals = [Bird , Alex , Mary]
Bird.makeSound()
Bird.eat()

Alex.makeSound()
Alex.shakeTail()
Alex.eat()

Mary.makeSound()
Mary.lick()
Mary.eat()

for animal in listOfAnimals:
    print(animal)