const Person = function (name, age) {
  let _name = name;
  let _age = age;

  return {
    setName: (name) => { _name = name },
    getName: () => { return _name },
    getAge: () => { return _age },
    facade: () => { if (_age > 17) return _name }
  };

};

console.log("Hello", typeof (Person));

let nedim = new Person("nedim", 25);
console.log(nedim.getName());
console.log(nedim.getAge());
nedim.setName("Nedim");
console.log (nedim.getName());
console.log(nedim.facade());

let ivan = new Person("ivan", 17);
console.log (ivan.getName());
console.log(ivan.facade());

//ovo radi kako treba i mislim da je to to, ali za fasadu ne mislim da je ovako trebalo... nadam se da cete vi uraditi primjer pa da mogu znati 100% kako sta ide...