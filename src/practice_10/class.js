export default class Klass{
    constructor(number){
        this.number = number;
    }

    getDisplayName(){
        return "Class " + this.number;
    }

    assignLeader(student){
        if(this === student.klass )
            this.leader = student;
        else
            console.log("It is not one of us.")
    }

    equal(klass){
        return this.number === klass.number;
    }

    appendMember(student){
        return student.changeClass(this);
    }

    verifyLeader(student) {
        return this.leader !== undefined && this.leader.is(student);
    }
}