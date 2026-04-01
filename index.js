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
class Wallet {
    constructor() {
        this.balance = 0 ;
    }

    addFounds (amout) {
        this.balance += amout ;
    }
     spendFounds (amout ) 
}
