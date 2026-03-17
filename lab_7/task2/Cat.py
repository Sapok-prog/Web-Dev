from Animal import Animal

class Cat(Animal):
    def __init__(self , name , age , isMammal , species):
        super().__init__(name , age , isMammal)
        self.species = species
    
    def lick(self):
        print("lick lick")

    def makeSound(self):
        print("Meow")

    def eat(self):
        print("Eating fish")

    def __str__(self):
        return super().__str__() + f"\nspecies : {self.species}"
    