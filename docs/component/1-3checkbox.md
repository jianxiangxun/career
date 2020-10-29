# checkbox

> 优点：

- 漂亮的 check 效果，让人印象深刻
- 尝试使用如 context 等特性来简化状态管理
- useCallback 与 useMemo 的使用说明重视性能
- 测试较全面，重点需求都照顾到了

> 可以改进的地方：

- 一个重要需求未正确实现：多列时，每一列顺序应该从上到下，而不是每一行从左右到
- MultiCheck 传入的 label 未使用
- 组件属性比如 selectAllCheckboxProps 放在外面定义成变量，而不是写成组件形式，可读性不佳
- context 在这个组件中使用有点重，且其中 onChange 的语义不明确
- useCallback 与 useMemo 的使用不完全正确，依赖项有缺失
- 很多 let 可以使用 const，更安全
- Checkbox 中 handleChange 中的逻辑复杂难以理解
- 测试写法有问题，大量写了 setTimeout 的测试永远不会失败

[git 地址](https://github.com/jianxiangxun/checkbox)
