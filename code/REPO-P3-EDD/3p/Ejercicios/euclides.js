function Euclid_gcd(a, b) {
  a = +a;
  b = +b;
  if (a !== a || b !== b) {
    return [NaN, NaN, NaN];
  }
  
  if (a === Infinity || a === -Infinity || b === Infinity || b === -Infinity) {
    return [Infinity, Infinity, Infinity];
  }

  // Checa si a o b son decimales

  if ((a % 1 !== 0) || (b % 1 !== 0)) {
    return false;
  }
  var signX = (a < 0) ? -1 : 1,
    signY = (b < 0) ? -1 : 1,
    x = 0,
    y = 1,
    u = 1,
    v = 0,
    q, r, m, n;
  a = Math.abs(a);//permite calcular el valor absoluto de un número
  b = Math.abs(b);//permite calcular el valor absoluto de un número

  while (a !== 0) {
    q = Math.floor(b / a);//Devuelve el máximo entero menor o igual a un número.
    r = b % a;
    m = x - u * q;
    n = y - v * q;
    b = a;
    a = r;
    x = u;
    y = v;
    u = m;
    v = n;
  }
  return [b, signX * x, signY * y];
}

console.log(Euclid_gcd(17, 4));