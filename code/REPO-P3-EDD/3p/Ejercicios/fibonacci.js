function p(n)
{ let t1=0
  let t2=1
  for(let i=1;i<n;i++){
	if(i==1)
	    console.log(t1);
	
    	if(i==2)
	    console.log(t2);
	
  siguiente=t1+t2;
  t1=t2
      t2=siguiente
      console.log(siguiente)
      
  }
}
console.log(p(10))