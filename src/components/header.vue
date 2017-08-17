<template>
	<div class="main-header">
    <ul>
      <li><a href='/'>首页</a></li>
      <li><router-link to="fontreference">字体参考</router-link></li>
      <li><router-link to="tomato">计时器</router-link></li>
    </ul>
	</div>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-header {
	width: 100%;
	height: 50px;
	background-color: #42b983
}

a {
  color: #fff;
  margin: auto;
  font-size: 16px;
  height: 100%;
}

li {
  float: left;
  padding: 0 15px;
  position: relative;
  line-height: 50px;
}
</style>
