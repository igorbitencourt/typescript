function arredondar(n: string): string;
function arredondar(n: number): number;
function arredondar(n: number | string): number | string {
  if (typeof n === "number") {
    return Math.ceil(n);
  } else {
    return Math.ceil(+n).toString();
  }
}

console.log(arredondar(2.43));
console.log(arredondar("2.43"));
