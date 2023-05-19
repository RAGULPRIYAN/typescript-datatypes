export{}
import { Engine } from "./engine";
// class Greater{
//     greeting:string;
//     constructor (message:string){
//        this.greeting=message;
//     }
//     greet(){
//        return "hello,"+this.greeting;
//     }
//   }
// (or) this two methods is same
class Greater{
    constructor (public greeting:string){}
    class1(){
        return "hello "+this.greeting;
    }
}
let w=new Greater("message")
console.log(w.class1())

  

 class Car0{
    engine:string;
    constructor (engine:string){
        this.engine=engine;
    }
 }

// this refers to the caller

 class Car{
    constructor (public engine:string){}
 }
let c=new Car("audi")
 console.log(c)


 class car{
    constructor (public engine:string){}
    // engine : string;
    // constructor(engine:string){
    //     this.engine=engine;
    // }
    start(){
        return "started "+ this.engine;
    }
    stop(){
        return "stopped" + this.engine;
    }
 }
 let d1=new car("audi")
 console.log(d1.start())


 class Car1{
    // private _engine:string;
    constructor(private _engine:string){
        
        // this.engine =_engine;
        // console.log(this.engine);
    }

    get engine():string{
        
        return this._engine;
    }

    set engine(value:string){
       
        if(value==undefined)throw 'supply an engine!';
        this._engine=value;
    }
 }
 let d=new Car1("audi")
 console.log(d.engine)
 
//
// class Engine{
//     constructor(public power:number,public name:string){
//     } 
// }
 class Auto{
    engine : Engine;
    constructor(engine:Engine){
        this.engine=engine;
    }
 }
 class Truck extends Auto{
    fourByFour:boolean;
    constructor (engine:Engine,fourByFour:boolean){
        super(engine);
        this.fourByFour=fourByFour;
    }
 }

var e= new Engine(200,'vg')
let t= new Truck(e,true)
console.log(t)

 //
 interface Action{
    start(message:string);
    stop(message:string);
    
   
 }
 class Cars implements Action{
constructor(public engine:string){

}
start(message:string){
    console.log(this.engine+message);
}
stop(message:string){
    console.log(this.engine+message);
}


 }
 var p=new Cars('v8');
 
p.start('started')


enum deptid{
    mech,cse,it,eee
}
class student{
    constructor(public name:string,public age:number,public deptid:number){
    }
}
 let s1=new student('RAM',20,deptid.cse)
 console.log(s1)
console.log(deptid.cse)


let myfun = <T extends object>(obj:T)=>{
    return{...obj,greet:'hii',gender:'male'}
}
 let a={name:'raja',
age:20}

// console.log(myfun(a.name))
let b1= myfun(a)
console.log(b1.name)


///
let a1=[1,2,3]

let b=['a','b','c','vignesh']
 let myfun1 = <R>(a1:R)=>{
    return [a1]
}
let vars = myfun1(1)
console.log(vars)
///

let reverseArray=<T>(array: T[]) =>{
    return array.reverse();
  }
  
  const numbers = [1, 2, 3, 4, 5];
  const reversedNumbers = reverseArray(numbers);
  console.log(reversedNumbers); // [5, 4, 3, 2, 1]
  
  const strings = ['apple', 'banana', 'cherry'];
  const reversedStrings = reverseArray(strings);
  console.log(reversedStrings); // ['cherry', 'banana', 'apple']
  
  const boolean=[true,false]
  const reversedbooleans =reverseArray(boolean);
  console.log(reversedbooleans)

  ///
  interface variety<X,Y>{
    a:number;
    b:number;
    data:X;
    data1:Y;
  }
  class bike implements variety<number, string> {
    a: number;
    b: number;
    data: number;
    data1: string;
  
    constructor(public quality: number) {
      // Implement the properties of the interface
      this.a = 0;
      this.b = 0;
      this.data = 0;
      this.data1 = "";
    }
  }
  
  let a13 = new bike(1);
  console.log(a13)
  