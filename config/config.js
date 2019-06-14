module.exports = require(`./${process.env.NODE_ENV}Config.js`);
                             // process.env 中并不存在NODE_ENV这个东西，NODE_ENV只是用户自定义的一个变量
// 当我们在服务启动时配置NODE_ENV ，或在代码中给process.env.NODE_ENV赋值，js便能通过process.env.NODE_ENV获取信息
// 详见 https://www.cnblogs.com/liyongquan/p/10103076.html


// 可通过rc模块，管理配置相关  详见:https://www.jb51.net/article/153896.htm
