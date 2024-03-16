# Code written by Prince Benedict +254741414892

user_input = input("Enter your age: ")

while not user_input.isnumeric():
  print("Enter a number as age")
  user_input = input("Enter your age: ")

if int(user_input) >= 18:
  print("You are eligible to vote")
else:
  print("You are not eligible to vote")