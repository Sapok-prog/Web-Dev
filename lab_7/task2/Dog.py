from Animal import Animal

class Dog(Animal):
    def __init__(self, name, age, isMammal, tailLength):
        super().__init__(name, age, isMammal)
        self.tailLength = tailLength

    def shakeTail(self):
        print("Shaking tail!")

    def makeSound(self):
        print("Bark bark!")

    def eat(self):
        print("Eating bone")

    def __str__(self):
        return super().__str__() + f"\ntail length : {self.tailLength}santimeters"

