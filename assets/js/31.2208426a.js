(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{407:function(_,e,v){"use strict";v.r(e);var a=v(44),t=Object(a.a)({},(function(){var _=this,e=_.$createElement,v=_._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"内置变量"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#内置变量"}},[_._v("#")]),_._v(" 内置变量")]),_._v(" "),v("p",[_._v("在书写 nginx.conf 文件的时候不可避免地需要用到一些变量，如"),v("code",[_._v("$remote_addr")]),_._v("可以用来获取客户端 IP 地址。")]),_._v(" "),v("p",[_._v("本模块增加了多个可用的变量。")]),_._v(" "),v("h2",{attrs:{id:"waf-log"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#waf-log"}},[_._v("#")]),_._v(" "),v("code",[_._v("$waf_log")])]),_._v(" "),v("p",[_._v("如果本次请求中防火墙进行了检查则不为空字符串，反之为空字符串。本变量主要用于 "),v("code",[_._v("access_log")]),_._v(" 指令，详见 "),v("RouterLink",{attrs:{to:"/zh-cn/advance/log.html#自定义日志格式"}},[_._v("自定义日志格式")]),_._v("。")],1),_._v(" "),v("h2",{attrs:{id:"waf-blocking-log"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#waf-blocking-log"}},[_._v("#")]),_._v(" "),v("code",[_._v("$waf_blocking_log")])]),_._v(" "),v("p",[_._v("如果本次请求本被模块拦截则不为空字符串，反之则为空字符串。本变量主要用于 "),v("code",[_._v("access_log")]),_._v(" 指令，详见 "),v("RouterLink",{attrs:{to:"/zh-cn/advance/log.html#自定义日志格式"}},[_._v("自定义日志格式")]),_._v("。")],1),_._v(" "),v("h2",{attrs:{id:"waf-blocked"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#waf-blocked"}},[_._v("#")]),_._v(" "),v("code",[_._v("$waf_blocked")])]),_._v(" "),v("p",[_._v("表示本次请求是否被本模块拦截，如果拦截了则其的值为"),v("code",[_._v("'true'")]),_._v(",反之则为"),v("code",[_._v("'false'")]),_._v("。")]),_._v(" "),v("h2",{attrs:{id:"waf-spend"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#waf-spend"}},[_._v("#")]),_._v(" "),v("code",[_._v("$waf_spend")])]),_._v(" "),v("p",[_._v("表示本次检查花费了多少时间（毫秒），保留 5 位小数，舍入规则取决于具体 C 标准库的实现。")]),_._v(" "),v("h2",{attrs:{id:"waf-rule-type"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#waf-rule-type"}},[_._v("#")]),_._v(" "),v("code",[_._v("$waf_rule_type")])]),_._v(" "),v("p",[_._v("如果本次请求命中黑白名单规则，则其值为触发的规则类型。下面是可能的取值。若没有命中黑白名单规则则其值为"),v("code",[_._v("''")]),_._v("。")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("'CC-DENY'")])]),_._v(" "),v("li",[v("code",[_._v("'WHITE-IPV4'")])]),_._v(" "),v("li",[v("code",[_._v("'WHITE-IPV6'")])]),_._v(" "),v("li",[v("code",[_._v("'BLACK-IPV4'")])]),_._v(" "),v("li",[v("code",[_._v("'BLACK-IPV6'")])]),_._v(" "),v("li",[v("code",[_._v("'WHITE-URL'")])]),_._v(" "),v("li",[v("code",[_._v("'BLACK-URL'")])]),_._v(" "),v("li",[v("code",[_._v("'BLACK-ARGS'")])]),_._v(" "),v("li",[v("code",[_._v("'BLACK-USER-AGENT'")])]),_._v(" "),v("li",[v("code",[_._v("'WHITE-REFERER'")])]),_._v(" "),v("li",[v("code",[_._v("'BLACK-REFERER'")])]),_._v(" "),v("li",[v("code",[_._v("'BLACK-COOKIE'")])]),_._v(" "),v("li",[v("code",[_._v("'BLACK-POST'")])]),_._v(" "),v("li",[v("code",[_._v("'UNDER-ATTACK'")])])]),_._v(" "),v("h2",{attrs:{id:"waf-rule-details"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#waf-rule-details"}},[_._v("#")]),_._v(" "),v("code",[_._v("$waf_rule_details")])]),_._v(" "),v("p",[_._v("如果本次请求被本模块拦截，则其值为触发的具体的规则的内容。若没有生效则其值为"),v("code",[_._v("''")]),_._v("。")])])}),[],!1,null,null,null);e.default=t.exports}}]);