import Person from "./person.js";

export default class Student extends Person{
    constructor(id, name, age, klass){
        super(id, name, age);
        this.klass = klass;
    }

    introduce(){
        let introduction = super.introduce();
        if(this.isLeader(this.klass)){
            introduction += " I am a Student. I am Leader of Class " + this.klass.number + "."
        }else{
            introduction += " I am a Student. I am at Class " + this.klass.number + "."
        }
        return introduction;
    }
    isLeader(klass){
        return this === klass.leader;
    }
    
}
