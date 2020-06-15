function primo(num)
{
  var cuantos=0;
    
    for(var i=2;i<=num;i++)
    {
      if(num%i==0)
        {
          
          if( ++cuantos>1)
            return false;
        }
    }
   return true;
}
function nprimo(total)
{
  var j = 1;
  for(var i=1;i<=(total*10);i++)
  {
   if( primo(i) && j<=total )
   {
      console.log(i);
      j++;
   }
  }
}
nprimo(6);