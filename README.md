# egg-examples

在 egg 框架中实现一些基础操作，便于日后在项目中集成

## 已经完成的功能
1. 使用中间件记录整个请求链路
2. 使用 orm-sequelize 操作mysql
    1. 数据库连接中的基础属性设置
    2. 表模型创建
    3. 数据库表同步
    4. 创建表间关系，使用关联查询
        1. 一对一

## 备注
1. 添加vscode -- egg 插件，主要使用以下功能
    1. debug:需要去除 --inspect-brk 才能本地调试
    2. service , controller 代码模板