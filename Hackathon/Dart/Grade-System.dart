import 'dart:io';

void main() {
  int marks;
  print('Enter your marks: ');
  marks = int.parse(stdin.readLineSync()!);

  switch (marks) {
    case >= 85:
      print('Excellent');
      break;
    case >= 75:
      print('Very Good');
      break;
    case >= 65:
      print('Good');
      break;
    case < 65:
      print('Average');
      break;
    default:
      print('Invalid');
  }
}
