(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{632:function(l,v,_){"use strict";_.r(v);var i=_(10),e=Object(i.a)({},(function(){var l=this,v=l.$createElement,_=l._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"title"}),_("p",[l._v("jQuery文档")])]),_("ol",[_("li",[l._v("了解jQuery\n"),_("ol",[_("li",[l._v("是什么：\n"),_("ol",[_("li",[l._v("一个JS函数库：write less, do more")]),l._v(" "),_("li",[l._v("封装简化DOM操作（CRUD）、ajax")])])]),l._v(" "),_("li",[l._v("为什么用它：\n"),_("ol",[_("li",[l._v("强大的选择器：方便快速查找DOM元素")]),l._v(" "),_("li",[l._v("隐式遍历（迭代）：一次操作多个元素")]),l._v(" "),_("li",[l._v("读写合一：读数据、写数据用的是一个函数")]),l._v(" "),_("li",[l._v("事件处理")]),l._v(" "),_("li",[l._v("链式调用")]),l._v(" "),_("li",[l._v("DOM操作（CUD）")]),l._v(" "),_("li",[l._v("样式操作")])])]),l._v(" "),_("li",[l._v("如何使用：\n"),_("ol",[_("li",[l._v("引入jQuery库\n"),_("ol",[_("li",[l._v("本地引入与CDN远程引入")]),l._v(" "),_("li",[l._v("测试版本与min生产版本")])])]),l._v(" "),_("li",[l._v("使用jQuery\n"),_("ol",[_("li",[l._v("使用jQuery函数：$/jQuery")]),l._v(" "),_("li",[l._v("使用jQuery对象：$xxx（执行$()得到的对象）")])])])])])])]),l._v(" "),_("li",[l._v("jQuery的2把利器\n"),_("ol",[_("li",[l._v("jQuery函数：$/jQuery\n"),_("ol",[_("li",[l._v("jQuery向外暴露的就是jQuery函数，也就是$，可以直接使用")]),l._v(" "),_("li",[l._v("当成一般函数使用：$(param)\n"),_("ol",[_("li",[l._v("param是function：相当于window.onload = function（文档加载完成后的监听）")]),l._v(" "),_("li",[l._v("param是选择器字符串：查找所有匹配的DOM元素，返回包含所有DOM元素的jQuery对象")]),l._v(" "),_("li",[l._v("param是DOM元素：将DOM元素对象包装为jQuery对象返回 $(this)")]),l._v(" "),_("li",[l._v("param是标签字符串：创建标签DOM对象并包装为jQuery对象返回，可以使用appendTo插入")])])]),l._v(" "),_("li",[l._v("当成对象使用：$.xxx()\n"),_("ol",[_("li",[l._v("$.each(obj/arr, function(key, value){})")]),l._v(" "),_("li",[l._v("$.trim(str)")])])])])]),l._v(" "),_("li",[l._v("jQuery对象：执行$()返回的就是jQuery对象\n"),_("ol",[_("li",[l._v("基本行为：\n"),_("ol",[_("li",[l._v("length/size()：得到DOM元素的个数")]),l._v(" "),_("li",[l._v("[index]：得到指定下标对应的DOM元素")]),l._v(" "),_("li",[l._v("each(fucntion(index, domEle){})：遍历所有DOM元素")]),l._v(" "),_("li",[l._v("index()：得到当前DOM元素在所有兄弟元素中的下标")])])])])])])]),l._v(" "),_("li",[l._v("选择器\n"),_("ol",[_("li",[l._v("介绍\n"),_("ol",[_("li",[l._v("有特定语法规则（css选择器）的字符创")]),l._v(" "),_("li",[l._v("用来查找某个/些DOM元素：$('selector')")])])]),l._v(" "),_("li",[l._v("分类\n"),_("ol",[_("li",[l._v("基本\n"),_("ol",[_("li",[l._v("#id")]),l._v(" "),_("li",[l._v("tagname 、*")]),l._v(" "),_("li",[l._v(".class")]),l._v(" "),_("li",[l._v("selector1,selector2,selector3：并集")]),l._v(" "),_("li",[l._v("selector1selector2selector3：并集")])])]),l._v(" "),_("li",[l._v("层次\n"),_("ol",[_("li",[l._v("selector1 > selector2：子元素")]),l._v(" "),_("li",[l._v("selector1  selector2：后代元素")])])]),l._v(" "),_("li",[l._v("过滤：在原有匹配结构中筛选出来一些\n"),_("ol",[_("li",[l._v(":first")]),l._v(" "),_("li",[l._v(":last")]),l._v(" "),_("li",[l._v(":eq(index)")]),l._v(" "),_("li",[l._v(":lt")]),l._v(" "),_("li",[l._v(":gt")]),l._v(" "),_("li",[l._v(":odd")]),l._v(" "),_("li",[l._v(":even")]),l._v(" "),_("li",[l._v(":not('selector')")]),l._v(" "),_("li",[l._v(":hidden")]),l._v(" "),_("li",[l._v(":visible")]),l._v(" "),_("li",[l._v("[attrName]")]),l._v(" "),_("li",[l._v("[attrName=value]")])])]),l._v(" "),_("li",[l._v("表单\n"),_("ol",[_("li",[l._v(":input")]),l._v(" "),_("li",[l._v(":text")]),l._v(" "),_("li",[l._v(":checkbox")]),l._v(" "),_("li",[l._v(":radio")]),l._v(" "),_("li",[l._v(":checked")]),l._v(" "),_("li",[l._v(":selected")])])])])])])]),l._v(" "),_("li",[l._v("属性：操作标签的属性，标签体文本\n"),_("ol",[_("li",[l._v("attr(name) / attr(name, value)：读写非Boolean值的标签属性")]),l._v(" "),_("li",[l._v("prop(name) / prop(name, value)：读写Boolean值的标签属性")]),l._v(" "),_("li",[l._v("removeAttr(name) / removeProp(name)：删除属性")]),l._v(" "),_("li",[l._v("addClass(classValue)：添加class")]),l._v(" "),_("li",[l._v("removeClass(classValue)：移除指定的class")]),l._v(" "),_("li",[l._v("val() / val(value)：读写标签的value")]),l._v(" "),_("li",[l._v("html() / html(htmlString)：读写标签体文本")])])])])])}),[],!1,null,null,null);v.default=e.exports}}]);