const deleteFirst = function (d) {
  d.length > 0 && d.shift();
}
// napravio anonimnu funckiju
//umjesto if-a u funckiji je koristen shorthand
//promijenio sam i uslov d[0] u d.length>0, jer ako bi se teoretski desilo da je prvi element niza nula, ne bi bio obrisan jer je uslov false

const showData = function (a, b, c, d, e) {
  //napravio anonimnu funkciju
  //ovdje je e cisti visak... iako je u pozivu proslijedjen kao new date...
  b = parseFloat(b);
  //parsirao sam b u float, jer zadatak ne bi imao smisla dalje bez toga

  a > b ? f = a / b : f = b / a;
  //i ovdje je koristen shorthand umjesto if-a

  d.push(f);
  //ovo je okej
  console.log(d[0].toFixed(3));
  //koristio toFixed da prikazem clan d niza sa tri broja iza zareza

  setTimeout(deleteFirst(d), 1000);
  //ovdje sam sklonio navodnike, ne mozemo pozivati string

  a = [1, 2, 3];
  b = [4, 5, 6];
  //na a i b sklonio var, vec su definirani u zaglavlju funkcije

  Array.prototype.push.apply(b, a);
  //umjesto pushanja for-om koristio sam ovu funckiju da dodam a na kraj b

  for (let j = 0; j < b.length; j++) {
    c[j] = b[j] * 4;
  }
  //u ovom for-u sam samo umjest var koristio let... ne znam da tu nesto moze bolje... i mogu se ukloniti viticaste zagrade jer je samo jedna linija koda ispod koju for vrti, ali to ne zelim zbog urednosti
  //eventualno mozemo prvo inicijalizirati propertije objekta pa ih onda puniti sa for in petljom... ali to je dupli posao... nema smisla...
}

showData(012, '10.55', {}, [], new Date());