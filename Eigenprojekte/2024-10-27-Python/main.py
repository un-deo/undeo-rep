print("Here is a questionaire.")

age = input("What is your age? ")
while age == "":
    age = input("What is your age? ")

if age.isnumeric():
    age = int(age)
    print(f"you are {age} years old")
else:
    print("not a number")

if int(age) <= 0:
    print("invalid number")
    age = ""
    minor = False
elif age < 18:
    print("you ar a minor! You aren't allowed to proceed without parental permission!")
    minor = True
else:
    print("continue")
    minor = False

if minor == False:
    fullname = input("What is your full name? ")
    while fullname == "":
        fullname = input("What is your full name? ")
        
        
print(f"hello {fullname}!")



