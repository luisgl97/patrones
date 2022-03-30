//Patron de diseño: Singleton
singleton = (function () {
  var instance;
  function createInstance() {
    var object = new Object("Yo soy una instancia");
    return object;
  }
  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();
var instance1 = singleton.getInstance();
var instance2 = singleton.getInstance();
console.log("instance 1:" + instance1);
console.log("instance 2:" + instance2);
console.log("************************");

//Patron de diseño: Iterator
let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numArray2 = numArray.map((current) => current * 2);

console.log("numArray => ", numArray);
console.log("numArray2 => ", numArray2);
console.log("************************");
//Patron  de diseño Adapter 
class Adaptador {
  constructor(obj) {
    this.obj = obj;
  }
  getName() {
    return this.obj.getNamePersona();
  }
  getAge() {
    return this.obj.getAgePersona();
  }
}
class Persona {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getNamePersona() {
    return this.name;
  }
  getAgePersona() {
    return this.age;
  }
}
const persona = new Persona("Juan", 30);
const adaptador = new Adaptador(persona);
console.log(persona);
console.log(adaptador);
console.log(persona.getNamePersona());
console.log(persona.getAgePersona());
console.log(adaptador.getName());
console.log(adaptador.getAge());
console.log("************************");
//Patron Observer
class Subject {
  constructor() {
    this.observers = [];
  }
  subscribe(fn) {
    this.observers.push(fn);
  }
  unsubscribe(fn) {
    this.observers = this.observers.filter(function (item) {
      if (item !== fn) {
        return item;
      }
    });
  }
  fire(data) {
    this.observers.forEach(function (item) {
      item(data);
    });
  }
}
const subject = new Subject();
const observer1 = function (data) {
  console.log(data);
};
const observer2 = function (data) {
  console.log(data);
};
const observer3 = function (data) {
  console.log(data);
};
subject.subscribe(observer1); //se suscribe a la clase
subject.subscribe(observer2); //se suscribe a la clase
subject.subscribe(observer3); //se suscribe a la clase
subject.fire("Hello World"); //se envia el mensaje
subject.unsubscribe(observer1); //se desuscribe a la clase
subject.fire("Hello World"); //se envia el mensaje




 


