const timeout = (ms) => {
  return new Promise(resolve=> {
      setTimeout(resolve, ms);
  })
}

function inc(a) {
  return new Promise(resolve=> {
    timeout(3000).then(() => { return resolve(a + 1)});
  })
}

const sum = function (a, b) {
  return new Promise(resolve=> {
    timeout(3000).then(()=> {return resolve(a + b)});
  })  
};

const max = (a, b) => {
  return new Promise(resolve=> {
    timeout(3000).then(()=> {return resolve(a > b ? a : b)});
})};

const avg = (a, b) => {
  const s = sum(a, b);
  return new Promise(resolve=> {
    timeout(3000).then(()=> { return resolve(s)/2});
  })
};

const obj = {
  name: "Marcus Aurelius",
  split(sep = " ") {
    return new Promise(resolve=> {
      timeout(3000).then(()=> { return resolve(this.name.split(sep))});
    });
  },
};

class Person {
  constructor(name) {
    this.name = name;
  }

  static of(name) {
    return new Person(name);
  }

  split(sep = " ") {
    return new Promise(resolve=>{
      timeout(3000).then(()=> { return resolve(this.name.split(sep))});
    });
  }
}

const person = Person.of("Marcus Aurelius");

// console.log("inc(5) =", inc(5));
// console.log("sum(1, 3) =", sum(1, 3));
// console.log("max(8, 6) =", max(8, 6));
// console.log("avg(8, 6) =", avg(8, 6));
// console.log("obj.split() =", obj.split());
// console.log("person.split() =", person.split());

(5).then(result=>{
  console.log(result);
}).catch(err => {
  console.log(err);
})

sum(5,10).then(result=>{
  console.log(result);
}).catch(err => {
  console.log(err);
})

max(5,10).then(result=>{
  console.log(result);
}).catch(err => {
  console.log(err);
})

avg(10,12).then(result=>{
  console.log(result);
}).catch(err => {
  console.log(err);
})

obj.split().then(result=> {
  console.log(result)
})

person.split().then(result=> {
  console.log(result);
})
.catch(err=>{
  console.log(err);
})