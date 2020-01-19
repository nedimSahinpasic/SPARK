class Person {
  constructor(name, years) {
    this.name = name;
    this.years = years;
  }

  getUp() {
    console.log("I usually get up at 8 o clock");
  }

  get name_() {
    return this.name;
  }
}

class Student extends Person {
  getUp() {
    return ("I usually get up at 10 o clock");
  }
}

const person = new Person("Ivan", "27");
person.getUp();

const student = new Student("Nedim", "23");
console.log("My name is", student.name, "and", student.getUp());

//klasa "student" ekstenda klasu "person", odnosno samo klasa "getUp" iz studenta overridea klasu "getUp" iz persona... 
