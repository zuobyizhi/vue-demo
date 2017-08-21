<template>
	<div class="main-header">
    <ul>
      <li :class="{active: Number(curTab) === 1}" @click='curTabChange(1)'>
        <router-link to="/">首页</router-link>
      </li>
      <li :class="{active: Number(curTab) === 2}" @click='curTabChange(2)'>
        <router-link to="fontreference">字体参考</router-link>
      </li>
      <li :class="{active: Number(curTab) === 3}" @click='curTabChange(3)'>
        <router-link to="tomato">计时器</router-link>
      </li>
    </ul>
	</div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      curTab: this.$store.state.curTab || 1
      // curTab: window.localStorage.getItem('curTab') || 1
    }
  },
  // mounted () {
  //  this.curTab = window.localStorage.getItem('curTab')
  // },
  methods: {
    curTabChange (i) {
      this.curTab = i
      this.$store.state.curTab = this.curTab
      window.localStorage.setItem('curTab', this.curTab)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-header {
	width: 100%;
	height: 50px;
	background-color: #42b983
}
.active {
  background-color: #32a973
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

.curtab {
	background-color: #32a973
}
</style>
