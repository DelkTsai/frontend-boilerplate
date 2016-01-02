##搜索的项目现在已经基本完成了项目环境的搭建，以及目录的搭建

目前执行单元测试的命名是：
mocha --compilers js:babel-core/register  --recursive


### 项目目录

```
app
 --packages.json
 --README.md
 --src
    --index.html
    --Index.js
    --config.js
    --scripts
        --action
        --constants
        --store
        --reducers
        --containers
        --components
    --styles
    --images
 --.gitignore
 --gulpfile.js
```