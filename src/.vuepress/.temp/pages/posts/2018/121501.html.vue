<template><div><h1 id="vue随笔" tabindex="-1"><a class="header-anchor" href="#vue随笔"><span>vue随笔</span></a></h1>
<p>使用vite构建vue项目：</p>
<p>npm init vite@latest</p>
<hr>
<p>插值语法中可以使用三元表达式，以及JavaScript语句</p>
<p><img src="@source/posts/2018/image-2.png" alt="alt text" loading="lazy">
<br>
<img src="@source/posts/2018/image-3.png" alt="alt text" loading="lazy"></p>
<hr>
<p>vue中动态参数用[]包裹，属性名要小写</p>
<figure><img src="@source/posts/2018/image-4.png" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure>
<hr>
<p>&lt;template&gt;&lt;/template&gt;标签不会被渲染，用于过渡</p>
<hr>
<p>v-for支持输出index索引</p>
<figure><img src="@source/posts/2018/image-6.png" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure>
<p>对于字典，使用name表示key</p>
<figure><img src="@source/posts/2018/image-7.png" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure>
<hr>
<p>导入vue组件</p>
<figure><img src="@source/posts/2018/image-8.png" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure>
<hr>
<p>自定义插槽<br>
<img src="@source/posts/2018/image-9.png" alt="alt text" loading="lazy"></p>
<hr>
<p>具名插槽的用法：<br>
<img src="@source/posts/2018/image-10.png" alt="alt text" loading="lazy">
<img src="@source/posts/2018/image-11.png" alt="alt text" loading="lazy"></p>
<p>作用域插槽使用的一些对应关系：<br>
<img src="@source/posts/2018/image-12.png" alt="alt text" loading="lazy"></p>
<hr>
<p>使用v-model实时传值<br>
<img src="@source/posts/2018/image-13.png" alt="alt text" loading="lazy"></p>
<hr>
<p>v-router路由配置
main.js:<br>
<img src="@source/posts/2018/image-14.png" alt="alt text" loading="lazy">
把app.vue内template内的内容改为<br>
<img src="@source/posts/2018/image-15.png" alt="alt text" loading="lazy"></p>
<hr>
<p>在main.js中配置二级路由<br>
<img src="@source/posts/2018/image-16.png" alt="alt text" loading="lazy"></p>
<hr>
<p>$emit的用法：
子组件：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&#x3C;template></span></span>
<span class="line"><span>  &#x3C;button @click="sendEvent">Click me&#x3C;/button></span></span>
<span class="line"><span>&#x3C;/template></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#x3C;script></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  methods: {</span></span>
<span class="line"><span>    sendEvent() {</span></span>
<span class="line"><span>      this.$emit('custom-event', 'Hello from ChildComponent!');</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>//this.$emit('custom-event', 'Hello from ChildComponent!') 触发了一个名为 custom-event 的事件</span></span>
<span class="line"><span>//，并传递了一个字符串参数 'Hello from ChildComponent!'。</span></span>
<span class="line"><span>&#x3C;/script></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>父组件：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&#x3C;template></span></span>
<span class="line"><span>  &#x3C;div></span></span>
<span class="line"><span>    &#x3C;ChildComponent @custom-event="handleEvent" /></span></span>
<span class="line"><span>  &#x3C;/div></span></span>
<span class="line"><span>&#x3C;/template></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#x3C;script></span></span>
<span class="line"><span>import ChildComponent from './ChildComponent.vue';</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  components: {</span></span>
<span class="line"><span>    ChildComponent</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  methods: {</span></span>
<span class="line"><span>    handleEvent(message) {</span></span>
<span class="line"><span>      console.log(message); // 输出 'Hello from ChildComponent!'</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>//使用 @custom-event="handleEvent" 监听子组件的 custom-event 事件，</span></span>
<span class="line"><span>//并调用 handleEvent 方法处理传递过来的数据</span></span>
<span class="line"><span>&#x3C;/script></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结
$emit(eventName, payload): 用于在子组件中触发一个事件。eventName 是事件的名称，payload 是可选的参数，用于传递数据给父组件。
父组件通过 @event-name=&quot;handlerMethod&quot; 来监听子组件的事件。</p>
<hr>
<p>vue中响应式处理，ref和reactive的区别</p>
<pre><code>// 使用 ref 创建一个响应式的单一值
    const count = ref(0);

    // 使用 reactive 创建一个响应式对象
    const state = reactive({
      count: 0,
      todos: []
    });

    function incrementCount() {
      count.value++; // 对 ref 值进行操作(需要.value)
      state.count++; // 对 reactive 对象的属性进行操作(不需要.value)
    }
</code></pre>
<hr>
<p>组合式api生命周期
生命周期钩子的执行顺序
在Vue 3中，生命周期钩子的执行顺序与Vue 2类似。以组合式API为例：</p>
<ul>
<li>创建阶段:
<ul>
<li>setup() 函数执行</li>
<li>onBeforeMount 钩子触发</li>
<li>onMounted 钩子触发</li>
</ul>
</li>
<li>更新阶段:
<ul>
<li>数据更新</li>
<li>onBeforeUpdate 钩子触发</li>
<li>DOM更新</li>
<li>onUpdated 钩子触发</li>
</ul>
</li>
<li>卸载阶段:
<ul>
<li>onBeforeUnmount 钩子触发</li>
<li>onUnmounted 钩子触发</li>
</ul>
</li>
</ul>
<hr>
<p>store中使用storeToRefs保证响应式
let {message,book,testCount} = storeToRefs(counter);</p>
<hr>
<p>使用vite初始化vue项目
在指定目录下使用npm init vite@latest命令<br>
<img src="@source/posts/2018/image-17.png" alt="alt text" loading="lazy"></p>
<hr>
<p>vue项目中如果需要设置背景图片的话，背景图片要设置在index.html内<br>
<img src="@source/posts/2018/image-18.png" alt="alt text" loading="lazy"></p>
<hr>
<p>vue中需要实时更新的数据（比如登录验证码），在data中返回的地方使用ref（）包裹</p>
<figure><img src="@source/posts/2018/image-19.png" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure>
<hr>
<p>vue中引用外部css文件的方法:</p>
<figure><img src="@source/posts/2018/image-20.png" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure>
<hr>
<p>pinia<br>
pinia写在js文件中，<br>
其中state（）相当于data（）<br>
actions（）相当于method（）<br>
getter（）则相当于compute（）</p>
<figure><img src="@source/posts/2018/image-21.png" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure>
</div></template>


