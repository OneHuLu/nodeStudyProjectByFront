##### 引用问题

- react 中 webpack 做了以下处理，导致无法访问 src 外的资源

```
webpack.config.js [ModuleScopePlugin]
//禁止用户从src/(或node_modules/)外部导入文件。
//这通常会引起混淆，因为我们只使用babel处理src/中的文件。
//为了解决这个问题，我们阻止你从src/导入文件——如果你愿意的话，
//请将这些文件链接到node_modules/中，然后让模块解析生效。
//确保源文件已编译，因为它们不会以任何方式被处理。

```

- 解决方式

```
需要修改webpack.config.js文件，注释掉ModuleScopePlugin命令，这样就可以允许导入src/目录之外的文件。
```

- 结果

```
未进行处理，保持访问的资源只能在src下
```
