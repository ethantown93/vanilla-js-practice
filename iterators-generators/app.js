// iterator example

function nameIterator(names){
    let nextIndex = 0;

    return {
        next: function(){
            return nextIndex < names.length ? {
                value: names[nextIndex++], done: false
            } : {
                done: true
            }
        }
    }
}

// array of names
const namesArray = ['Ethan', 'Ece', 'Kim'];
// init iterator and pass in the names array
const names = nameIterator(namesArray);

console.log(names.next().value)
console.log(names.next().value)
console.log(names.next().value)

// generator example
function* sayName(){
    yield "Jack";
    yield "Ethan";
    yield "Ece";
}

const name = sayName();

console.log(name.next().value)
console.log(name.next().value)
console.log(name.next().value)

// generate ID's

function* createIds(){
    let index = 1;

    while(true){
        yield index++
    }
}

const generate = createIds();

console.log(generate.next().value)
console.log(generate.next().value)
console.log(generate.next().value)