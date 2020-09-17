# 手写实现常用方法

##深拷贝

- 当前属性是对象类型
  - 判断对象是否可遍历
    - 解决循环引用的问题
    - Ojbect
    - Array
    - Map
    - Set
  - 对象不可遍历
    - Date,Error
    - Symbol
    - Regexp
    - Function
- 当前属性是非对象类型，返回值
  - Number
  - Boolean
  - String
