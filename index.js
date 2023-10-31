function receivesAFunction(callback) {
    console.log(callback());
}

function returnsANamedFunction() {
    return function namedFunction() {
        console.log("Hey!");
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("Anonymous");
    }
}