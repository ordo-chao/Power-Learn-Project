# try various inputs such as cat and numbers lesser than 0 for user_input_price
# try various inputs such as cat and numbers lesser graeter than 100 for user_input_dicount
#  one can enter the value % eg 20%

while(True):
  try:
    user_input_price = int(input("Enter original price: sh "))
    while(user_input_price < 0):
      user_input_price = int(input("Enter original price: sh "))
    break
  except(ValueError):
    pass

while(True):
  try:
    user_input_discount = int(input("Enter discount: ").strip("%"))
    while(user_input_discount > 100):
      user_input_discount = int(input("Enter discount: ").strip("%"))
    break
  except(ValueError):
    pass


def calculate_discount(price,discount_percentage):
  if discount_percentage >= 20:
   price = price - (price * (discount_percentage/100))
   return price
  else:
    return price

print("Sh " + str(calculate_discount(user_input_price,user_input_discount)))