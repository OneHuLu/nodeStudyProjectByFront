const fs = require("fs");
const path = require("path");

class ReplaceContentPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.emit.tap("ReplaceContentPlugin", (compilation) => {
      Object.keys(compilation.assets).forEach((filename) => {
        if (filename.endsWith(".js")) {
          // 只处理JavaScript文件
          let content = compilation.assets[filename].source();
          content = content.replace(
            /\/img\/(tours|users)/g,
            (match, p1) => {
              // 将匹配到的路径替换为指定的路径
              return this.options.replacePath + "/" + p1;
            }
          );
          
          compilation.assets[filename] = {
            source: () => content,
            size: () => content.length,
          };
        }
      });
    });
  }
}

module.exports = ReplaceContentPlugin;
