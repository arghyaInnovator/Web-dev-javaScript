class user{
    constructor(name){
        this.name = name;
    }

    get name(){
        return this._name;
    }

    set name(value){
        if(value.length < 4){
            console.log("Name is too short....");
            return;
        }
        this._name = value;
    }
}

let user = new user("arghya");
console.log("user.name");


user.name = "harry"
console.log(user.name)