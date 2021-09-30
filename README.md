# egg-examples

日常在 eggjs 上进行业务开发时，将通用配置或者方法进行沉淀，方便日后使用，提高开发效率

## 更新记录

- 【2021-10-1】 完成 VSCode egg-template-generator 插件开发，方便快速生成 controller,model,service 等代码模板文件
- 【2021-09-11】 重新优化 Model 的写法，实现在使用时候的代码提示
- 【2021-09-11】 修复在使用 Model.init 时候，associate 函数不执行 BUG

## 待办事项

- [ ] 增加标准请求，响应和业务日志
- [ ] 封装常用的工具函数
- [ ] 修复 sequelize 时间戳返回 UTC 格式问题
- [ ] 将 Model 中通用查询进行抽离，做成一个基础类，减少代码冗余
