# Admin API

## Installing

安装依赖

```bash
npm install
```

### 响应状态码规范

```angular2html
{
    statusCode: number;
    error: number(0|1);
    message: string;
    data: object|array|null
}
```

### statusCode 返回HTTP状态码

```
200-OK: 请求成功。
201-Created: 已创建。成功请求并创建了新的资源。
301-MovedPermanently: 永久移动, 请求的资源已被永久的移动到新URI。
401-Unauthorized: 请求未经授权，请求要求用户的身份认证。
403-Forbidden: 服务器拒绝访问。验证身份通过了，但是资源没有权限进行操作。
404-NotFound: 请求资源（网页等）不存在。
408-RequestTimeOut: 服务器等待客户端发送的请求时间过长，超时
500-InternalServerError: 内部服务器错误。

Useful 本项目用到的状态码: 
200
401
403
500
```
