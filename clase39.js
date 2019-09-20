// Memorización

// !6 = 6 * 5  * 4 * 3 * 2 * 1 (el 1 es el base) = 720
//!12 = 12 * 11 * 10 * 9 * 8 * 7 * !6

function factorial(n) {
    if(!this.cache){
        this.cache = {}
    }

    debugger
    if(this.cache[n]){
        return this.cache[n]
    }

    if(n === 1){
        return 1
        //caso base
    }

    this.cache[n] = n * factorial(n - 1)
    debugger
    return this.cache[n]
    // 6 * factorial(5), 5 * factorial(4), 4 * factorial(3), 3 * factorial(2), 2 * factorial(1), 
}
