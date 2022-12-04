"use strict";
function arredondar(n) {
    if (typeof n === "number") {
        return Math.ceil(n);
    }
    else {
        return Math.ceil(+n).toString();
    }
}
console.log(arredondar(2.43));
console.log(arredondar("2.43"));
