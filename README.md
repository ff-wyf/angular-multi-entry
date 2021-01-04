### 利用webpack entry配置多入口

- 添加webpack配置依赖
  - angular需要安装依赖实现自定义的webpack配置
  ```
    npm install @angular-builders/custom-webpack --save-dev
    npm install @angular-devkit/build-angular --save-dev
    npm install html-webpack-plugin --save-dev
  ```
- 修改angular.json中的配置
  - 修改architect-build-builder
  ```
    "architect": {
      "build": {
        "builder": "@angular-builders/custom-webpack:browser"
      }
    }
  ```
  - 添加archtect-build-options
  ```
    "architect": {
        "build": {
          "builder": "@angular-builders/custom-webpack:browser",
          "options": {
            "customWebpackConfig": {
              "path": "./webpack.config.js"
            }
          }
        }
  }
  ```
  - 修改serve-builder
  ```
  "serve": {
    "builder": "@angular-builders/custom-webpack:dev-server"
  }
  ```
- 添加webpack.config.js