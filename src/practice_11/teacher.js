import Person from "./person.js";

export default class Teacher extends Person{
    constructor(id, name,age,klasses){
        super(id, name, age);
        this.klasses = klasses;
    }
    
    introduce(){
        let introduction = super.introduce();
        if(this.klasses === undefined || this.klasses.length === 0){
            introduction += " I am a Teacher. I teach No Class.";
        }else{
            let teachClass = this.klasses.map(klass => klass.number).join(", ");
            introduction += " I am a Teacher. I teach Class "+ teachClass +".";
        } 
        return introduction;
    }

    introduceWith(student){
        let isStudent = this.klasses.some( klass => klass.equal(student.klass));
        let introduction = super.introduce();
        if(isStudent){
            introduction += " I am a Teacher. I teach " + student.name + "."
        }else{
            introduction += " I am a Teacher. I don't teach "+ student.name +"."
        }
        return introduction;
    }
    
    nofityLeaderAssigned(leader, klass){
        console.log(`I am ${this.name}. I know ${leader.name} become Leader of ${klass.getDisplayName()}.`)
    }

    nofiyJoined(student, klass){
        console.log(`I am ${this.name}. I know ${student.name} has joined ${klass.getDisplayName()}.`);
    }
}
