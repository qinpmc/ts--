# TypeScript接口
- 用于对「对象的形状（Shape）」进行描述
- 定义的变量比接口少了一些属性是不允许的，多一些属性也是不允许的

```
interface Person {
    name: string;
    age: number;
}
//定义的变量比接口少了一些属性是不允许的
let tom: Person = {
    name: 'Tom'
};


interface Person2 {
    name: string;
    age: number;
}

//多一些属性也是不允许的：
let tom2: Person2 = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};
```

## 注意以下方式，规定函数参数的“形状”，以变量形式传入，可以多出属性，直接以对象传入，不允许多出属性;  **均不允许少属性**；

```
interface LabelledValue {
    label: string;
}

function printLabel2(labelledObj: LabelledValue) {
/*    if(labelledObj.name){ //报错，引用不存在的属性

    }*/
    console.log(labelledObj.label);
}
let myObj2 = {size: 20, label: "Size 20 Object"}; // 多余属性 size
printLabel2(myObj2); //Size 20 Object

//注意 ：这种方式下，编译报错，多出属性 size
printLabel2({
    size: 30,
    label: "Size 30 Object",
    name:"hh"
});
```


## 可选属性
- 可选的属性可以没有，也可以有 
- 仍然不允许添加未定义的属性 

```
interface Person {
    name: string;
    age?: number;
}
// age 属性可选，可以没有
let tom: Person = {
    name: 'Tom'
};


interface Person2 {
    name: string;
    age?: number;
}

// age 属性可选，也可以有
let tom2: Person2 = {
    name: 'Tom',
    age: 25
};


interface Person3 {
    name: string;
    age?: number;
}

// 编译错误：仍然不允许添加未定义的属性 （gender）
let tom3: Person3 = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};
```


##  额外的属性检查
对象字面量会被特殊对待而且会经过 额外属性检查，当将它们赋值给变量或作为参数传递的时候。
如果一个对象字面量存在任何“目标类型”不包含的属性时，你会得到一个错误。

```
// ##  额外的属性检查

interface SquareConfig {
    color?: string;
    width: number;
}

function createSquare(config: SquareConfig):{ color: string; area: number } {
    // ...
    return {
        color:"color",
        area:123
    }
}

//let mySquare = createSquare({ colour: "red", width: 100 }); // colour 报错,接口没有该属性

let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig); //绕过编译器检查

//另外一种绕过
let squareOptions = { colour: "red", width: 100 };
let mySquare2 = createSquare(squareOptions);
```


