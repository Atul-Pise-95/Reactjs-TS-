const isEqual = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1); //['a','b','c']
  const obj2Keys = Object.keys(obj2); //['a','b']
  if (obj1Keys.length != obj2Keys.length) return false;

  for (const prop of obj1Keys) {
    if (!obj2Keys.includes(prop)) return false;
    if (obj1[prop] != obj2[prop]) return false;
  }
  return true;
};

const obj1 = { a: "aaa", b: "bbb", C: "ccc" };
const obj2 = { a: "aaa", b: "bbb" };

//shallow comparison
console.log(obj1 == obj2);

//Deep comparison
console.log(isEqual(obj1, obj2));
