const newObject = {
    name: "rajneesh",
    age: 28,
    work: "bakchodi",
    cheli: 5
}

console.log(newObject.cheli);

Object.freeze(newObject)

newObject.name = "change"
newObject.age = 29

console.log(newObject.indexOf);
console.log(newObject.age);