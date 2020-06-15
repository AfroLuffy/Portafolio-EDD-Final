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
function mulBase(num, base) {
var s = new Stack();
do {
s.push(num % base);
num = Math.floor(num /= base);
} while (num > 0);
var converted = "";
while (s.isEmpty() > 0) {
converted += s.pop();
}
return converted;
}
var num = 32;
var base = 2;
var newNum = mulBase(num, base);
console.log(num + " convertido a base " + base + " es " + newNum);
num = 125;
base = 8;
var newNum = mulBase(num, base);
console.log(num + " convertido a base " + base + " es " + newNum);
