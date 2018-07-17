import Person from "./person.js";

export default class Student extends Person{
    constructor(name, age, klass){
        super(name, age);
        this.klass = klass;
    }

    introduce(){
        let introduction = super.introduce();
        introduction += " I am a Student. I am at Class " + this.klass + "."
        return introduction;
    }
}

module.exports = Student;