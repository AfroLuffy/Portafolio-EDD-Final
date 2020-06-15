let f=[1,2,2,9,10];
let b=false;
for(let x of f){
    if(x===3){
	b=true;
	console.log("Encontrado")
    }
}
if(b==false)
        console.log("no encontrado")
