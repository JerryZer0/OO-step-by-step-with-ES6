import Person from "../practice_3/person";

export default class Student extends Person{
    constructor(name, age, klass){
        super(name, age);
        this.klass = klass;
    }

    introduce(){
        let introduction = "I am a Student. I am at Class " + this.klass + "."
        return introduction;
    }
}