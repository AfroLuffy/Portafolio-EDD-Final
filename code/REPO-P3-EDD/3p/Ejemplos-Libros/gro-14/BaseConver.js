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
    }
function baseConverter(decNumber, base){
 var remStack = new Stack();
 let rem,
 baseString = '',
 digits = '0123456789ABCDEF'; //{6}
 while (decNumber > 0){
 rem = Math.floor(decNumber % base);
 remStack.push(rem);
 decNumber = Math.floor(decNumber / base);
 }
 while (!remStack.isEmpty()){
 baseString += digits[remStack.pop()]; //{7}
 }
 return baseString;
}
console.log(baseConverter(100345, 2));
console.log(baseConverter(100345, 8));
console.log(baseConverter(100345, 16));
