# Code written by Prince Benedict +254741414892
user_input = input("Enter a number: ")
while not user_input.isnumeric():
  print("Enter a number")
  user_input = input("Enter your number: ")

print("\n")

fibonacci = [0,1]
def fibonacci_sequence(user_input):
  first_number = 0
  second_number = 1
  result = 0


  while result <= int(user_input):
    result = first_number + second_number
    first_number = second_number
    second_number = result
    fibonacci.append(result)

  fibonacci.pop(-1)

  # for i in fibonacci:
  #   print(i,end=',',)

fibonacci_sequence(user_input)

for i in fibonacci:
  print(i,end=',')

print("\n")



