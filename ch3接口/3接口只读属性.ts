

//只读属性

interface Point {
    x: number;
    readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
console.log(p1.x);