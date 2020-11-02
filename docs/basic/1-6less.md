# LESS

[学习 Less](https://juejin.im/post/6844903520441729037#heading-5)

## 变量

- 值变量

```less
@color: #111;
```

- 选择器变量

```less
@bd: border;
@{bd}: 1px solid @color;
```

- 属性变量

```less
@bd:border;
@Solid:solid
@{bd}: 1px @Solid #111;
```

- URL 变量

```less
@images: '../img';
body {
  background: url('@{images}/dog.png'); //变量名 必须使用大括号包裹
}
```

- 声明变量

```less
@background: {
  background: red;
};
#main {
  @background();
}
```

- 变量运算

```less
/* 
加减法时 以第一个数据的单位为基准
乘除法时 注意单位一定要统一
*/
@width: 300px;
@color: #222;
#wrap {
  width: @width-20;
  height: @width-20*5;
  margin: (@width-20) * 5;
  color: @color*2;
  background-color: @color + #111;
}
```

- 变量作用域

```less
/* Less */
@var: @a;
@a: 100%;
#wrap {
  width: @var;
  @a: 9%;
}

/* 生成的 CSS */
#wrap {
  width: 9%;
}
```

- 变量去定义变量

## 嵌套

> & ：代表的上一层选择器的名字

## 混合方法

- `.` 与 `#` 皆可作为 方法前缀。
- 方法后写不写`()`看个人习惯。
- Less 可以使用默认参数，如果 没有传参数，那么将使用默认参数。
- `@arguments` 犹如 JS 中的 `arguments` 指代的是 全部参数。
- 传的参数中 必须带着单位。
- 如果匹配的参数 是变量，则将会匹配，如 `@_` 。
- 方法的命名空间 ⭐
- Less 没有 `if else`，可是它有`when`
- `and`代表`&&`，`not`代表`!`，逗号`,`代表`||`
- 如果你希望你的方法接受数量不定的参数，你可以使用`...` ，犹如 ES6 的扩展运算符。
- 方法使用`important！`
- 循环使用递归

```less
/* Less */
.generate-columns(4);

.generate-columns(@n, @i: 1) when (@i =< @n) {
  .column-@{i} {
    width: (@i * 100% / @n);
  }
  .generate-columns(@n, (@i + 1));
}
/* 生成后的 CSS */
.column-1 {
  width: 25%;
}
.column-2 {
  width: 50%;
}
.column-3 {
  width: 75%;
}
.column-4 {
  width: 100%;
}
```

- 属性拼接方法，`+_`代表的是 空格；`+`代表的是 逗号。

## 继承

- `extend`
- `all` 全局搜索替换

## 导入

- `@import` 的位置可随意放置
- `reference`, Less 中 最强大的特性 使用 引入的 Less 文件，但不会 编译它。
- `@import`语句的默认行为。这表明相同的文件只会被导入一次
- 使用`@import (multiple)`允许导入多个同名文件。

## 函数

- 判断类型、颜色操作、数学函数

## 注释

- `/* */` CSS 原生注释，会被编译在 CSS 文件中。
- `/ /` Less 提供的一种注释，不会被编译在 CSS 文件中。

## mixins

## 使用 JavaScript
