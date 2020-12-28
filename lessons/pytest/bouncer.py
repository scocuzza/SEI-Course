print("how old are you: ")
age = int(input())

if age <= 18:
    print("you are too young")
elif age >= 18 and age <= 20:
    print("you are allowed to enter")
else: 
    print("you are allowed to enter and drink")