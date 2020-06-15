class Stack {
    constructor(){ 
        this.items=[];}
        push(element){
            this.items.push(element);
            return this.stack;
           };
           isEmpty(){
            return this.items.length == 0;
           };
        pop(){
            return this.items.pop();
           };
         print(){
 			console.log(this.items.toString());
};
    }
let stack=new Stack();
stack.push(5);
stack.push(8);
let objectSymbols=Object.getOwnPropertySymbols(stack);
console.log(objectSymbols.length);
console.log(objectSymbols);
console.log(objectSymbols[0]);
stack.push(1);
stack.print();
