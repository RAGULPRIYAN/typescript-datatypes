export{}
let message ="hii welcome"
console.log(message)
let a:any=123;
a=1;
a="hii"

let b:number=1.2;
b=12;

let c:string="hello";

let d:boolean=true;

let e:null=null;

let f:undefined
 
let arr=[2,4,6,8,10];
let arrstr:string[]=["ragul"]
let multitype:number|string;
multitype=1;
multitype="ragul"


 let obj={
    name:"ragul",
    age:24
 }
 obj.age=1
 obj.name="ragul"

 function myFunction(a:number,b:number):number{
return a+b
 }

 function myFunction1(a){
    return a.toLowerCase();
     }

     function myFunction2(a:string,b?:string){
        if(b)
          return a.toLowerCase()+b;
        return a.toLowerCase();
         }
         console.log(myFunction2('hii'))


         function myFunction3(a:string,b:string="DED"):String{
            // if(b)
              return a.toLowerCase()+b;
            // return a.toLowerCase();
             }
             console.log(myFunction3('hii'))

//////
             
    function adding(point:{x:number,y:number}){
                return point.x+point.y;
        }
     let p={x:11,y:1
             }
             console.log(adding(p));


             interface Point{
                x:number;
                y:number;
                z?:number;
             }
             ///
             function adding2(point:Point){
                return point.x+point.y
             }
             console.log(adding2(p));

            
