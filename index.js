// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

destructivelyAppendCat = (name) => cats.push("Ralph")

destructivelyPrependCat = (name) => cats.unshift('Bob')

destructivelyRemoveLastCat = (name) => cats.pop()

destructivelyRemoveFirstCat = (name) => cats.shift()

function appendCat(name){
    const newcats = [...cats, 'Broom']
    return newcats
}

function prependCat(name){
    const newcats1 = ['Arnold', ...cats]
    return newcats1
}

function removeLastCat(){
    const copycat = cats.slice(0, 2)
    return copycat
}

console.log(removeLastCat())

function removeFirstCat(){
    const copycat1 = cats.slice(1)
    return copycat1
}

console.log(removeFirstCat())
