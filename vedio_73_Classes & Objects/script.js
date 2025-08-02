class Animal{
    constructor(name){
        this.name = name
        console.log("object is created...")
    }

    eats(){
        console.log("kha raha hoon...")
    }
    jumps(){
        console.log("kud raha hoon...")

    }
}

class lion extends Animal{
    constructor(name){
        super(name)
        console.log("object is created and he is a lion......")
    }

}


let a = new Animal("bunny");
console.log(a)

let l = new lion ("shera")
console.log(l)