# ngx_waf

用于 nginx 的防火墙模块。

**本模块目前还在测试，稳定性可能不佳。**

## 功能

+ CC 防御，超出限制后自动拉黑一段时间。
+ IPV4 黑白名单，支持 CIDR 表示法。
+ URL 黑白名单
+ GET 参数黑名单
+ UserAgent 黑名单
+ Referer 黑白名单。

## 安装

### On Unix Like

#### 下载 nginx 源码

nginx 添加新的模块必须要重新编译，所以先[下载 nginx 源码](http://nginx.org/en/download.html)。

#### 下载 ngx-waf 源码

```bash
cd /usr/local/src
git clone https://github.com/ADD-SP/ngx_waf.git
cd ngx_waf
git clone -b v2.1.0 https://github.com/troydhanson/uthash.git
```

#### 编译 nginx

进入 nginx 源代码目录

```bash
./configure xxxxxx --add-module=/usr/local/src/ngx_waf
make && make install
```
> xxxxxx 为其它的编译参数，一般来说是将 xxxxxx 替换为`nginx -V`显示的编译参数。

#### 修改 nginx.conf

在需要启用模块的 server 块添加两行，例如

```text
http {
    ...
    server {
        ...
        ngx_waf on;
        ngx_waf_rule_path /usr/local/src/rules/;
        ngx_waf_cc_deny on;
        ngx_waf_cc_deny_limit 5 1;
        ...
    }
    ...
}

```

> ngx_waf 表示是否启用模块。

> ngx_waf_rule_path 表示规则文件所在的文件夹，且必须以`/`结尾。

> ngx_waf_cc_deny 表示是否启用 CC 防御。

> ngx_waf_cc_deny_limit 包含两个参数，第一个参数表示每分钟的最多请求次数（大于零），第二个参数表示第一个参数的限制后拉黑 IP 多少分钟（大于零）。

#### 测试

```text
https://example.com/www.bak
```

如果返回 403 则表示安装成功。

## 规则文件说明

规则中的正则表达式均遵循[PCRE 标准](http://www.pcre.org/current/doc/html/pcre2syntax.html)。

规则生效顺序（靠上的优先生效）

1. IP 白名单
2. URL 白名单
3. Referer 白名单
4. IP 黑名单
5. CC 防御
6. URL 黑名单
7. 参数黑名单
8. Referer 黑名单
9. UserAgent 黑名单

### rules/ipv4

IPV4 黑名单

每条规则独占一行。每行只能是一个 IPV4 地址或者一个 CIDR 地址块。拦截匹配到的 IP。

### rules/url

URL 黑名单

每条规则独占一行。每行一个正则表达式，当 URL 被任意一个规则匹配到就返回 403。

### rules/args

GET 参数黑名单

每条规则独占一行。每行一个正则表达式，当 GET 参数（如test=0&test1=）被任意一个规则匹配到就返回 403。

### rules/referer

Referer 黑名单

每条规则独占一行。每行一个正则表达式，当 referer 被任意一个规则匹配到就返回 403。

### rules/user-agent

UserAgent 黑名单

每条规则独占一行。每行一个正则表达式，当 user-agent 被任意一个规则匹配到就返回 403。

### rules/white-ipv4

IPV4 白名单，写法同`ipv4`。

### rules/white-url

URL 白名单。写法同`url`。

### rules/white-referer

Referer 白名单。写法同`referer`。

## 日志

日志存储在 error.log 中。格式如下

```text
2020/01/02 03:04:05 [alert] 1526#0: *2 ngx_waf: URL, client: 0.0.0.0, server: www.example.com, request: "GET /www.bak HTTP/1.1", host: "www.example.com"
```

## 感谢

+ [uthash](https://github.com/troydhanson/uthash): 本项目使用了版本为 v2.1.0 的 uthash 的源代码。uthash 源代码以及开源许可位于`inc/uthash/`。
+ [ngx_lua_waf](https://github.com/loveshell/ngx_lua_waf): 本模块的默认规则大多来自于此
+ [nginx-book](https://github.com/taobao/nginx-book): 感谢作者提供的教程
+ [nginx-development-guide](https://github.com/baishancloud/nginx-development-guide): 感谢作者提供的教程