const cats = ["Milo", "Otis", "Garfield"]; 

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name){
    const newCatsEnd = [...cats, "Broom"];
    return newCatsEnd;
}

function prependCat(name) {
    const newCatsBeg = ["Arnold", ...cats];
    return newCatsBeg;
}

function removeLastCat(){
    const ByeGarfield = cats.slice(0,2);
    return ByeGarfield;
}

function removeFirstCat(){
    const ByeMilo = cats.slice(1);
    return ByeMilo;
}
