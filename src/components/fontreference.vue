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
		<div class="btns">
			大小：
			<input class="fontSize" v-model="fontSize"/>
		</div>
		<div class="btns">
			字体颜色：
			<input v-model="activeColor"/>
		</div>
		<div class="btns">
			背景颜色：
			<input v-model="bgColor"/>
		</div>
		<div class="btns">
			粗度：
			<button @click="weightClass='normal'">normal</button>
			<button @click="weightClass='bold'">bold</button>
			<button @click="weightClass='bolder'">bolder</button>
			<button @click="weightClass='lighter'">lighter</button>
		</div>
    <h1 v-bind:class="[fontClass]" 
			v-bind:style="{ color: activeColor, fontSize: fontSize + 'px', fontWeight: weightClass, backgroundColor: bgColor }">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      fontSize: '40',
      activeColor: '#000',
      bgColor: '#fff',
      weightClass: 'normal',
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
	margin: 18px;
}
.inp{
	margin: 8px;
}

input {
	margin: 8px;
  height: 26px;
  border-color: #d2d2d2;
  border-width: 1px;
  border-style: solid;
  outline: none;
}
input:focus {
  border-color: #34a97e;
}
input:active {
  border-color: #34a97e;
}

button {
  margin: 5px;
  padding: 10px 20px 10px 20px;
  color: #fff;
  background-color: #42b983;
  border-radius: 3px;
  outline: none;
}
button:hover {
  background-color: #34a97e;
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
