
//任意值上访问任何属性/方法都是允许的
let anyThing: any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);

//变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：

let something;
something = 'seven';
something = 7;

something.setName('Tom');