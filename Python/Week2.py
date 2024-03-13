my_list = []

i = 0

for i in range(10,41):
  if i == 10 or i == 20 or i == 30 or i == 40:
    my_list.append(i)
  else:
    continue
  
my_list.insert(1,15)

for i in range(50,71):
  if i == 50 or i == 60 or i == 70:
    my_list.append(i)
  else:
    continue

my_list.pop(-1)
my_list.sort()

print(my_list[3])

x = 0
while x > 10:
  if my_list[x] == 30:
    print(my_list[x])
  else:
    continue
  
   