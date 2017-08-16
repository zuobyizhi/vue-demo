<template>
  <div class="hello">
		<input class="inp" v-model="msg"/>
		<div class="btns">
			字体：
			<button @click="fontClass='songti'">宋体</button>
			<button @click="fontClass='yahei'">雅黑</button>
			<button @click="fontClass='heiti'">黑体</button>
			<button @click="fontClass='Monaco'">Monaco</button>
		</div>
    <h1 v-bind:class="[fontClass]">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      fontClass: 'songti'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.songti {
	font-family: "宋体"
}
.yahei {
	font-family: "Microsoft YaHei"
}
.heiti {
	font-family: "黑体"
}
.Monaco {
	font-family: "Monaco"
}
.btns{
	margin: 8px;
}
.inp{
	margin: 8px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
