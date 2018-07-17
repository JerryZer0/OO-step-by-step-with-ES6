import Person from "./person.js";

export default class Worker extends Person{
    constructor(name,age){
        super(name,age);
    }
    
    introduce(){
        let introduction = super.introduce();
        introduction += " I am a Worker. I have a job."
        return introduction;
    }
}
