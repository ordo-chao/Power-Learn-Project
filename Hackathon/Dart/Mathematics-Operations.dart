import 'dart:io';

int plus(firstnumber, secondnumber) { 
  return firstnumber + secondnumber;
}

int minus(firstnumber, secondnumber)
{
  return firstnumber - secondnumber;
}

int multiply(firstnumber, secondnumber)
{
  return firstnumber * secondnumber;
}

int divide(firstnumber , secondnumber)
{
  return firstnumber / secondnumber;
}

void main()
{
  int firstnumber, secondnumber, result;

  print('Enter first number: ');
  firstnumber = int.parse(stdin.readLineSync()!);
  print('Enter second number: ');
  secondnumber = int.parse(stdin.readLineSync()!);
  print('Enter Operation: ');
  String operation = stdin.readLineSync()!;

  if (operation == '+')
  {
    result = plus(firstnumber, secondnumber);
    print('$firstnumber $operation $secondnumber = $result');
  }
  else if(operation == '-')
  {
    result = minus(firstnumber, secondnumber);
    print('$firstnumber $operation $secondnumber = $result');
  }
  else if(operation == '*')
  {
    result = multiply(firstnumber, secondnumber);
    print('$firstnumber $operation $secondnumber = $result');
  }
  else if(operation == '/')
  {
    result = divide(firstnumber, secondnumber);
    print('$firstnumber $operation $secondnumber = $result');
  }


}