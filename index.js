// class Flight {
//   constructor(flightNumber, departureTime, destination, seats) {
//     this.flightNumber = flightNumber;
//     this.departureTime = departureTime;
//     this.destination = destination;
//     this.seats = seats;
//   }

//   bookSeat() {
//     if (this.seats > 0) {
//       this.seats--;
//       return "Seat booked";
//     }
//     return "No seats available";
//   }

//   cancelSeat() {
//     this.seats++;
//     return "Seat canceled";
//   }

//   getAvailableSeats() {
//     return this.seats;
//   }
// }

// const flight = new Flight("HY123", "10:00", "Tashkent", 2);

// console.log(flight.bookSeat());
// console.log(flight.bookSeat());
// console.log(flight.bookSeat());
// console.log(flight.getAvailableSeats());  



// 5-masala  


// class Course {
//     constructor ( courseName , courseCode) {
//             this.courseName= courseName ;
//             this.courseCode = courseCode ;
//             this.students = [] ; 
//     }
// addStudent (student) {
//     this.students.push (student) ;
// } 
// removeStudent(student) {
//     this.students = this.students.filter (s => s !== student) ;
// }

// } 

// const course = new Course ( " JS " , "JS101")


// course.addStudent("Ali");
// course.addStudent("Vali");
// console.log(course.students);

// course.removeStudent("Ali");
// console.log(course.students); 


// 6-masala  
// class Wallet {
//   constructor() {
//     this.balance = 0;
//   }

//   addFunds(amount) {
//     this.balance += amount;
//   }

//   spendFunds(amount) {
//     if (amount > this.balance) {
//       return "Insufficient funds";
//     }
//     this.balance -= amount;
//   }
// }

// const wallet = new Wallet();

// wallet.addFunds(100);
// console.log(wallet.balance);

// console.log(wallet.spendFunds(30));
// console.log(wallet.balance);

// console.log(wallet.spendFunds(100)); 



// 7-masala 

// class Notification {
//   constructor(message) {
//     this.message = message;
//     this.date = new Date();
//   }

//   sendNotification() {
//     return `Sent: ${this.message}`;
//   }

//   clearNotification() {
//     this.message = "";
//     return "Notification cleared";
//   }
// }

// const notif = new Notification("Hello!");

// console.log(notif.sendNotification());
// console.log(notif.clearNotification());
// console.log(notif);   



// uyga vazifa  

//  1-masala  

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     return `Ism: ${this.name}, Yosh: ${this.age}`;
//   }
// }

// const p1 = new Person("sanjarbek", 17);
// console.log(p1.greet()); 


// 2-masala 

// class BankAccount {
//   constructor(balance = 0) {
//     this.balance = balance;
//   }

//   deposit(amount) {
//     this.balance += amount;
//   }

//   withdraw(amount) {
//     if (this.balance - amount >= 0) {
//       this.balance -= amount;
//     } else {
//       console.log("Yetarli mablag‘ yo‘q!");
//     }
//   }
// }

// const acc = new BankAccount(100);
// acc.deposit(50);
// acc.withdraw(30);
// acc.withdraw(150);
// console.log("Balance:", acc.balance);


// 3-masala 

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   area() {
//     return this.width * this.height;
//   }

//   perimeter() {
//     return 2 * (this.width + this.height);
//   }
// }

// const rect = new Rectangle(5, 10);
// console.log("Area:", rect.area());
// console.log("Perimeter:", rect.perimeter()); 


// 4-masala  

// class Student {
//   constructor(name, id, grades) {
//     this.name = name;
//     this.id = id;
//     this.grades = grades;
//   }

//   calculateAverage() {
//     let sum = this.grades.reduce((a, b) => a + b, 0);
//     return sum / this.grades.length;
//   }
// }

// const st = new Student("sanjarbek", 1, [80, 90, 100]);
// console.log("Average:", st.calculateAverage()); 


// 5-masala  


// class Clock {
//   displayTime() {
//     let now = new Date();
//     console.log(now.toLocaleTimeString());
//   }

//   start() {
//     setInterval(() => this.displayTime(), 1000);
//   }
// }

// const clock = new Clock();
// clock.start(); 
// console.log(clock.start());
 

// 6-masala   

// class Employee {
//   constructor(name, position, salary) {
//     this.name = name;
//     this.position = position;
//     this.salary = salary;
//   }

//   giveRaise(percent) {
//     this.salary += this.salary * (percent / 100);
//   }
// }

// const emp = new Employee("sanjarbek", "Dasturchi", 1000);
// emp.giveRaise(10);
// console.log("New Salary:", emp.salary); 


// 7-masala  

// class Order {
//   constructor() {
//     this.items = [];
//   }

//   addItem(item, quantity) {
//     this.items.push({ item, quantity });
//   }

//   removeItem(item) {
//     this.items = this.items.filter(i => i.item !== item);
//   }

//   calculateTotal() {
//     return this.items.reduce((sum, i) => sum + i.quantity, 0);
//   }
// }

// const order = new Order();
// order.addItem("Olma", 3);
// order.addItem("Banan", 2);
// order.removeItem("Olma");
// console.log("Total items:", order.calculateTotal()); 


// 8-masala 

// class Calculator {
//   add(a, b) { return a + b; }
//   subtract(a, b) { return a - b; }
//   multiply(a, b) { return a * b; }
//   divide(a, b) { return b !== 0 ? a / b : "0 ga bo‘lib bo‘lmaydi"; }
// }

// const calc = new Calculator();
// console.log(calc.add(5, 3));
// console.log(calc.subtract(5, 3));
// console.log(calc.multiply(5, 3));
// console.log(calc.divide(5, 0)); 

// 9-masala 

// class Stack {
//   constructor() {
//     this.items = [];
//   }

//   push(item) {
//     this.items.push(item);
//   }

//   pop() {
//     return this.items.pop();
//   }

//   isEmpty() {
//     return this.items.length === 0;
//   }
// }

// const stack = new Stack();
// stack.push(10);
// stack.push(20);
// console.log(stack.pop());
// console.log(stack.isEmpty()); 

// 10-masala  

// class Vehicle {
//   constructor(speed) {
//     this.speed = speed;
//   }
// }

// class Car extends Vehicle {
//   constructor(speed, fuel) {
//     super(speed);
//     this.fuel = fuel;
//   }
// }

// const car = new Car(120, "Benzin");
// console.log("Speed:", car.speed);
// console.log("Fuel:", car.fuel);