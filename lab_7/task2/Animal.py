class Animal:
    def __init__(self , name , age , isMammal):
        self.name = name
        self.age = age
        self.isMammal = isMammal

    def makeSound(self):
        print("Sound!")
    
    def eat(self):
        print("Eating")

    def __str__(self):
        return f"name : {self.name}\nage : {self.age}\nis mammal : {self.isMammal}"
    
