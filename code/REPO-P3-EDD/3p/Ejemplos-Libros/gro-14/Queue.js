class Queue {
constructor(){
 this.items=[];
 this.enqueue = enqueue;
 this.dequeue= dequeue;
 this.front= front;
 this.isEmpty= isEmpty;
 this.size= size;
 this.print= print;
}
}
	enqueue = function(element){
 this.items.push(element);
};
	dequeue = function(){
 return this.items.shift();
};
	front = function(){
 return this.items[0];
};
	isEmpty = function(){
 return this.items.length == 0;
};
	size = function(){
 return this.items.length;
};
	print = function(){
 console.log(this.items.toString());
};

let queue = new Queue();
 console.log(queue.isEmpty()); 
 queue.enqueue("John");
 queue.enqueue("Jack");
 queue.enqueue("Camila");
 queue.print();
 console.log(queue.size());
 console.log(queue.isEmpty());
 queue.dequeue();
 queue.dequeue();
 queue.print();
