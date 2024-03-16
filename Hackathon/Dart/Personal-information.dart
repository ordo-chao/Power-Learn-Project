import 'dart:io';

void main() {
  print('Enter your name: ');
  String name = stdin.readLineSync()!;
  print('Enter your age:  ');
  String age = stdin.readLineSync()!;
  print('Enter your school: ');
  String school = stdin.readLineSync()!;

  print('My name is $name, I am $age years old, and I attend $school.');
}
