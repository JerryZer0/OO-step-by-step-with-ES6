export default class Klass{
    constructor(number){
        this.number = number;
        this.leaderAssignedListeners = [];
        this.joinListeners = [];
    }

    getDisplayName(){
        return "Class " + this.number;
    }

    assignLeader(student){
        if(this === student.klass ){
            this.leader = student;
            this._notifyLeaderAssigned(student);
        }
        else
            console.log("It is not one of us.")
    }

    verifyLeader(student) {
        return this.leader !== undefined && this.leader.is(student);
    }

    equal(klass){
        return this.number === klass.number;
    }

    appendMember(student){
        this._nofiyJoined(student);
        return student.changeClass(this);
    }

    verifyLeader(student) {
        return this.leader !== undefined && student.isLeader(this);
    }

    registerAssignLeaderListener(listener){
        this.leaderAssignedListeners.push(listener);
    }

    _notifyLeaderAssigned(leader){
        this.leaderAssignedListeners.forEach(listener => listener.nofityLeaderAssigned(leader, this));
    }

    registerJoinListener(listener){
        this.joinListeners.push(listener);
    }

    _nofiyJoined(student) {
        this.joinListeners.forEach(listener => listener.nofiyJoined(student, this));
    }
}