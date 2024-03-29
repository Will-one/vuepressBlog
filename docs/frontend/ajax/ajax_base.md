---
title: '基础概念'
categories:
- frontend
tags:
- ajax
---

## P3-P7 基础概念
### XML
* 可扩展标记语言
* 用来传输和储存数据

### JSON
[JS 笔记 JSON 章节](../javascript/)

### AJAX 优缺点
优点
> 无需刷新页面与服务器通信
>
> 允许根据用户事件来更新部分页面内容

缺点
> 没有浏览历史，不能回退
> 
> 存在跨域问题（同源）
> 
> SEO（search engine optimization搜索引擎优化）不友好

## TCP
TCP/IP 协议是传输层的一个面向连接的安全可靠的一个传输协议

### 三次握手
三次握手的机制是为了保证能建立一个安全可靠的连接。
1. 第一次握手是由客户端发起，客户端会向服务端发送一个报文，在报文里面：SYN标志位置为1，表示发起新的连接。
2. 当服务端收到这个报文之后就知道客户端要和我建立一个新的连接，于是服务端就向客户端发送一个确认消息包，在这个消息包里面：ack标志位置为1，表示确认客户端发起的第一次连接请求。以上两次握手之后，对于客户端而言：已经明确了我既能给服务端成功发消息，也能成功收到服务端的响应。但是对于服务端而言：两次握手是不够的，因为到目前为止，服务端只知道一件事，客户端发给我的消息我能收到，但是我响应给客户端的消息，客户端能不能收到我是不知道的。所以，还需要进行第三次握手。
3. 第三次握手就是当客户端收到服务端发送的确认响应报文之后，还要继续去给服务端进行回应，也是一个ack标志位置1的确认消息。

通过以上三次连接，不管是客户端还是服务端，都知道我既能给对方发送消息，也能收到对方的响应。那么，这个连接就被安全的建了

### 四次挥手
四次握手机制也是由客户端去发起。 
1. 客户端会发送一个报文，在报文里面FIN位标志位置一。
2. 当服务端收到这个报文之后，我就知道了客户端想要和我断开连接，但是此时服务端不一定能做好准备，因为当客户端发起断开连接的这个消息的时候，对于服务端而言，他和还有可能有未发送完的消息，他还要继续发送，所以呢，此时对于服务端而言，我只能进行一个消息确认，就是我先告诉服务端，我知道你要给我断开连接了，但是我这里边还可能没有做好准备，你需要等我一下，等会儿我会告诉你。
3. 于是呢，发完这个消息确认包之后，可能稍过片刻它就会继续发送一个断开连接的一个报文啊，也是一个FIN位置1的报文也是由服务端发给客户端的啊，这个报文表示服务端已经做好了断开连接的准备，
4. 那么当这个报文发给客户端的时候，客户端同样要给服务端继续发送一个消息确认的报文一共有四次。

通过这四次的相互沟通和连接，我就知道了，不管是服务端还是客户端都已经做好了断开连接的。

## HTTP
HTTP（hypertext transport protocol）协议【超文本传输协议】，协议详细规定了浏览器和万维网服务器之间互相通信的规则

### 请求报文
重点是格式与参数
```
行(方法+URL+HTTP版本): POST /URL HTTP/1.1
头:  host: willone.com
     Cookie: name=willone
     Content-type: application/x-www-form-urlencoded
     User-agent: chrome 12
空行
请求体(GET体为空，POST可以不为空)： username=admin&password=admin
```

### 响应报文
```
行： HTTP/1.1 200 OK
头:  Content-Type: text/html;charset=uft-8
     Content-Type: 2048
     Content-encoding: gzip

空行:
体: <html>
        <head>
        </head>
        <body>
            <h1>willone</h1>
        </body>
    </html>
```

## http 方法
get post put delete

用来定义对于资源采取什么样的操作，有各自的语义

GET 获取数据：获取资源（文件）

POST 创建数据：注册

PUT 更新数据：修改个人信息，修改密码

DELETE 删除数据：删除一条评论

### RESTful 接口设计
一种接口设计风格，充分利用HTTP方法的语义

1. 不使用RESTful接口设计风格
```
https://www.willone.com/api/http/getUser?id=1

https://www.willone.com/api/http/addUser

https://www.willone.com/api/http/modifyUser

https://www.willone.com/api/http/deleteUser
```

2. 使用RESTful接口设计风格
```
方法：GET
接口：https://www.willone.com/api/http/user?id=1

方法：POST
接口：https://www.willone.com/api/http/user

方法：PUT
接口：https://www.willone.com/api/http/user

方法：DELETE
接口：https://www.willone.com/api/http/user
```

## GET 和 POST 方法的对比
1. 语义
    * GET：获取数据
    * POST：创建数据

2. 发送数据
    * GET通过地址在请求头中携带数据
    * POST即可以通过地址在请求头中携带数据，也可以通过请求体携带数据

3. 缓存
    * GET可以被缓存，POST不会被缓存

        因为get请求携带的参数是通过地址中的query或者param参数携带，而浏览器通常是会缓存请求的地址的

4. 安全性
    * 发送密码或者其他敏感信息时不要使用get，主要是避免直接被他人窥屏或通过历史记录找到你的密码

### 状态码
1. HTTP状态码是什么
    定义服务器对请求的处理结果，是服务器返回的

2. HTTP状态码的语义
    * 100~199 ：代表请求已被接受，需要继续处理
        * 例如使用websocket时，会出现
    * 200~299 ：成功
    * 300~399 ：重定向
        * 301 ：永久重定向（Moved Permanently）。
            重定向的位置会被浏览器缓存下来。再次访问的时候可以看到301请求的size一栏是（disk cache）
        * 302 ：临时重定向

        * 304 ：Not Modified

    * 400~409 ：请求错误
        * 404 Not Found

    * 500~599 ：服务器错误
        * 500 ：服务器内部错误（Internal Server Error）

## HTTP VS HTTPS
http特点
1. 无状态：协议对客户端没有状态存储，对事物处理没有“记忆”能力，比如访问一个网站需要反复进行登录操作
2. 无连接：HTTP/1.1之前，由于无状态特点，每次请求需要通过TCP三次握手四次挥手，和服务器重新建立连接。比如某个客户机在短时间多次请求同一个资源，服务器并不能区别是否已经响应过用户的请求，所以每次需要重新响应请求，需要耗费不必要的时间和流量。
3. 基于请求和响应：基本的特性，由客户端发起请求，服务端响应
4. 简单快速、灵活
5. 通信使用明文、请求和响应不会对通信方进行确认、无法保护数据的完整性

## HTTPS特点
基于HTTP协议，通过SSL或TLS提供加密处理数据、验证对方身份以及数据完整性保护

通过抓包可以看到数据不是明文传输，而且HTTPS有如下特点：
* 内容加密：采用混合加密技术，中间者无法直接查看明文内容
* 验证身份：通过证书认证客户端访问的是自己的服务器
* 保护数据完整性：防止传输的内容被中间人冒充或者篡改

::: tip
混合加密：结合非对称加密和对称加密技术。客户端使用对称加密生成密钥对传输数据进行加密，然后使用非对称加密的公钥再对秘钥进行加密，所以网络上传输的数据是被秘钥加密的密文和用公钥加密后的秘密秘钥，因此即使被黑客截取，由于没有私钥，无法获取到加密明文的秘钥，便无法获取到明文数据。
数字摘要：通过单向hash函数对原文进行哈希，将需加密的明文“摘要”成一串固定长度(如128bit)的密文，不同的明文摘要成的密文其结果总是不相同，同样的明文其摘要必定一致，并且即使知道了摘要也不能反推出明文。
数字签名技术：数字签名建立在公钥加密体制基础上，是公钥加密技术的另一类应用。它把公钥加密技术和数字摘要结合起来，形成了实用的数字签名技术。
:::
