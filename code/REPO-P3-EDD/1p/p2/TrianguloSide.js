function triangulo(a,b,c){
    let s=.50*(a+b+c);
    let r;
    let f=a*b*c;
    let di=(s-a)*(s-b)*(s-c);
    let a1=s*di;
    let multi=Math.sqrt(a1)
    let fn=4*multi;
    let ultimo=f/fn;
    return ultimo;
}

console.log(triangulo(5,6,7))