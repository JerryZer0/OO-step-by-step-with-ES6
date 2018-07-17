export default class Klass{
    constructor(number){
        this.number = number;
    }

    getDisplayName(){
        return "Class " + this.number;
    }

    assignLeader(student){
        if(this.equal(student.klass) )
            this.leader = student;
    }

    equal(klass){
        return this.number === klass.number;
    }
}
