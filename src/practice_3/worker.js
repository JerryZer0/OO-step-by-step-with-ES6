import Person from "../practice_3/person";

export default class Worker extends Person{
    constructor(name,age){
        super(name,age);
    }
    
    introduce(){
        let introduction = "I am a Worker. I have a job."
        return introduction;
    }
}
