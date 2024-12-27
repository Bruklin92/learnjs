
// class Building {
//     constructor (l,w) {
//         this.length = l;
//         this.width = w;
//     }

//     area() {
//         console.log("Area of building is: ", this.length*this.width);
        
//     }

// }

// const b1 = new Building(10,20);
// b1.area();



// class Newspaper {
//     constructor (n,p,a) {
//         this.name = n;
//         this.price = p;
//         this.area = a;
//     }
//     location() {
//         console.log("Newspaper name: ",this.name);
//         console.log("Area : ",this.area);
//         console.log("Price: ",this.price);      
//     }
// }

// const n1 = new Newspaper("sandesh",10,"Varachha");
// n1.location();






// class Student {
//     constructor(n,r,a) {
//         this.name = n;
//         this.roll_no = r;
//         this.age = a;
//     }

//     Student_info() {
//         console.log("Name: ", this.name);
//         console.log("Roll_no: ", this.roll_no);
//         console.log("Age: ", this.age);
//     }

// }

// class course extends Student {
//     constructor(n,r,a,cn,d,f) {
//         super(n,r,a);
//         this.course_name = cn
//         this.duration = d;
//         this.fees = f;
//     }
//     course_info() {
//         this.Student_info();
//         console.log("Couese_name: ", this.course_name);
//         console.log("Duration: ", this.duration);
//         console.log("Fees: ", this.fees);
//     }
// }

// const c1 = new course ("Meet", 2601, 22, "Full Stack", "12 Month",800000);
// c1.course_info();





//parent classs

class Authore {
    constructor(n,c,m) {
        this.name = n;
        this.city = c;
        this.mobile_no = m;
    }
    Authore_info() {
        console.log("Authore name: ", this.name);
        console.log("City: ", this.city);
        console.log("Mobile no: ", this.mobile_no);
    }
}
//child class
class Book extends Authore {
    constructor(n,c,m,bn,p) {
        super(n,c,m);
        this.book_name = bn;
        this.price = p;
    }
    book_info() {
        this.Authore_info();
        console.log("Book name: ", this.book_name);
        console.log("Price: ", this.price);
    }
}

const book = new Book("Amit Patel", "Surat", 9876543215, "A.P.J", 350);
book.book_info(); 