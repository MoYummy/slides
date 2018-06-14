[//]: <> (end)

Vue.js
======
The Progressive JavaScript Framework

[//]: <> (center)

[//]: <> (horizontal)

Overview
------
---
+ What is Vue
+ Who is using Vue
+ Why Vue
+ Vue conventions

[//]: <> (horizontal)

What is Vue
------
---
+ Micro Lib?
+ Full Framework?

[//]: <> (vertical)

### Micro Lib vs. Full Framework
---
<img src="res/vuejs/progressive.png" height="70%" width="70%" />

[//]: <> (vertical)

### Existing libraries / frameworks
---
<img src="res/vuejs/frameworks.png" height="70%" width="70%" />
<div class="fragment">&#63;</div>

[//]: <> (vertical)

### Progressive framework
---
<img src="res/vuejs/frameworks-vue.png" height="70%" width="70%" />

[//]: <> (vertical)

### Rendering entire DOM
---
<img src="res/vuejs/vue-entire.png" height="70%" width="70%" />

[//]: <> (vertical)

### Rendering widget
---
<img src="res/vuejs/vue-widget.png" height="70%" width="70%">

[//]: <> (vertical)

### Rendering widget
---
<iframe height='370' scrolling='no' title='vue-assistive-touch' src='//codepen.io/MoYummy/embed/rKemLL/?height=370&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/MoYummy/pen/rKemLL/'>vue-assistive-touch</a> by MoYummy (<a href='https://codepen.io/MoYummy'>@MoYummy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[//]: <> (vertical)

### Standalone store
---
<iframe height='370' scrolling='no' title='vuex-standalone' src='//codepen.io/MoYummy/embed/BVzpEQ/?height=370&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/MoYummy/pen/BVzpEQ/'>vuex-standalone</a> by MoYummy (<a href='https://codepen.io/MoYummy'>@MoYummy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[//]: <> (vertical)

What is Vue
------
---
+ A progressive framework for building user interfaces
  * core - view layer only (data binding)
  * modern tooling and supporting libraries
+ Catering to need and scope

[//]: <> (horizontal)

Who is using Vue
------
---
<iframe height='370' scrolling='no' title='github-frontend-framwork' src='//codepen.io/MoYummy/embed/yEagvM/?height=370&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/MoYummy/pen/yEagvM/'>github-frontend-framwork</a> by MoYummy (<a href='https://codepen.io/MoYummy'>@MoYummy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[//]: <> (vertical)

Who is using Vue
------
---
[Full list](https://github.com/vuejs/awesome-vue#appswebsites)

|Tencent|Alibaba|Meituan|Eleme|
|:-:|:-:|:-:|:-:|
|Gitlab|Nintendo|Adobe|IBM|
|Laracasts|Line|

[//]: <> (horizontal)

Why Vue
------
---
+ vue-devtools
+ vue-cli
+ Tutorials / learning curve
+ Community / libraries

[//]: <> (vertical)

### DevTools
---
<img src="res/vuejs/devtools-comp.png" height="70%" width="70%" />

[//]: <> (vertical)

### DevTools
---
<img src="res/vuejs/devtools-store.png" height="70%" width="70%" />

[//]: <> (vertical)

### .vue = .html + .js + .css
---
~~~
<template>
  <div class="hello-vue">Hello Vue</div>
</template>

<script>
export default {
  name: 'HelloVue'
}
</script>

<style scoped>
.hello-vue {
  height: 3em;
}
</style>
~~~

[//]: <> (vertical)

### vue-cli
---
~~~
# npm install -g @vue/cli
# vue create my-project
Vue CLI v3.0.0-beta.15
? Please pick a preset: Manually select features
? Check the features needed for your project:
 ◉ Babel
 ◯ TypeScript
 ◉ Progressive Web App (PWA) Support
 ◉ Router
 ◉ Vuex
 ◉ CSS Pre-processors
 ◉ Linter / Formatter
 ◉ Unit Testing
❯◉ E2E Testing
? Check the features needed for your project: Babel, PWA, Router, Vuex, CSS Pre-processors, Linter, Unit, E2E
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): SCSS/SASS
? Pick a linter / formatter config: Standard
? Pick additional lint features: Lint on save
? Pick a unit testing solution: Mocha
? Pick a E2E testing solution: Nightwatch
? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? In dedicated config files
~~~

[//]: <> (vertical)

### Tutorials
---
+ Official
  * https://vuejs.org/v2/guide/
  * https://vuejs.org/v2/cookbook/
  * https://vuejs.org/v2/examples/
  * https://github.com/vuejs/vue-router-demos
  * https://www.vuemastery.com/courses/intro-to-vue-js/vue-instance/

[//]: <> (vertical)

### Libraries
---
+ Community
  * https://forum.vuejs.org/
  * https://github.com/vuejs/awesome-vue
  * https://vuejsexamples.com/
  * https://madewithvuejs.com/

[//]: <> (horizontal)

Vue Conventions
------
---
+ Bottom-up (leaf components rendered first)
+ HTML tags & components: linking parent and child components
+ Props: parent-to-child communication
+ Events: child-to-parent communication

[//]: <> (vertical)

### Top down
---
+ Slots / custom rendering for top-down
+ Not recommended but for scenarios:
  * optimization for SEO, TTFB, TTF-frame/rendering

[//]: <> (vertical)

### Top down for optimization
---
+ User can see content when `html` is downloaded
+ `Vue` will be loaded with hierarchy 

<iframe height='370' scrolling='no' title='vue-top-down-demo' src='//codepen.io/MoYummy/embed/zazPxy/?height=370&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/MoYummy/pen/zazPxy/'>vue-top-down-demo</a> by MoYummy (<a href='https://codepen.io/MoYummy'>@MoYummy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[//]: <> (vertical)

Computed
------
---
+ `computed` is reactive yet has cache

[//]: <> (horizontal)

# Q & A

[//]: <> (center)