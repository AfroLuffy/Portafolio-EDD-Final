  
function fact(n,r){
    let np;
    let f=n;
    let np=n-r
    for(let i=1;i<f;i++){
    n=n*i
	np=np*i;
    }
    npr=n/np;
}

console.log(fact(8,2))



