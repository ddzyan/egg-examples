# 因为要搭建监测平台使用的是alinode,对标的nodejs版本是node.js v12.
FROM registry.cn-hangzhou.aliyuncs.com/aliyun-node/alinode:5.15.0-alpine

LABEL maintainer="dingdongzhao<ddzyan@163.com>"

# 这个是容器中的文件目录
RUN mkdir -p /usr/src/node-egg/egg-examples

# 设置工作目录
WORKDIR /usr/src/node-egg/egg-examples

# 拷贝package.json文件到工作目录
COPY package.json /usr/src/node-egg/egg-examples/package.json

# npm使用淘宝的镜像源
RUN npm i --production --registry=https://registry.npm.taobao.org

# 拷贝所有源代码到工作目
COPY . /usr/src/node-egg/egg-examples

# 暴露容器端口
EXPOSE 7001

CMD npm start