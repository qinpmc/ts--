function reverse(x) {
    if (typeof x == "number") {
        return Number(x.toString().split("").reverse().join(""));
    }
    else if (typeof x === "string") {
        return x.split("").reverse().join("");
    }
}
console.log(reverse(12345));
console.log(reverse("ASDF"));
