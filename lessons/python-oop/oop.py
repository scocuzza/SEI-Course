class User:
    def __init__(self, name):
        self.name = name

    def greet(self):
        print(f'Hi! My name is {self.name}')

me = User('Jimmy')
me.greet()
# => "Hi! My name is Jimmy"