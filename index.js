//__________exercise from 1 to 3________


class Worker{

    #name;
    #surname;
    #rate;
    #days;

    get name(){
        return this.#name
    }

    get surname(){
        return this.#surname
    }

    get rate(){
        return this.#rate
    }

    get days(){
        return this.#days
    }

    set rate(value) {
        this.#rate = value;
    }

    set days(value) {
        this.#days = value;
    }

    constructor (name, surname, rate, days){
        this.#name = name;
        this.#surname = surname;
        this.#rate = rate;
        this.#days = days;
    }

    getSalary() {
        return this.#rate * this.#days;
    }

};


user1 = new Worker('Anna', 'Ivanova', 1.5, 22);


console.log(user1);
console.log(user1.getSalary());

user1.rate = 2;
user1.days = 25; 


console.log(user1.rate);
console.log(user1.days);
console.log(user1.getSalary());


//_______________exercise 4________________


//_______________version 1_________________


// class Rectangle {

//     constructor (length, width) {
//         this.length = length;
//         this.width = width;
//     }

//     square() {
//         return this.length*this.width
//     }

// }

// class Parallelepiped extends Rectangle{

//     constructor (length, width, height) {
//         super(length, width);
//         this.height = height;
//     }

//     size() {
//         return super.square()*this.height;
//     }

// };

// figure1 = new Parallelepiped (5, 10, 5);

// console.log(figure1.square());
// console.log(figure1.size());


//_______________version 2_________________


class Parallelepiped {

    constructor (length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }
    
    size() {
        return this.length * this.width * this.height
    }

}

class Rectangle extends Parallelepiped{

    constructor (length, width, height) {
        super(length, width, height);
    }

    square() {
        return this.length * this.width
    }

};

figure1 = new Rectangle (5, 10, 5);

console.log(figure1);

console.log(figure1.square());
console.log(figure1.size());
