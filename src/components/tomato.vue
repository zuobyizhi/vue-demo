<template>
  <div class="hello">
		<div class="btns">
			内容：
			<input class="inp" v-model="msg"/>
			倒计时：
			<input class="inp" v-model="time"/>
      <button @click="addTimer">确认</button>
		</div>
		<div class="btns" style="color: red;" v-if="errMsg !== ''">
      <label>{{errMsg}}</label>
		</div>
		<div class="btns">
      <table class="table">
        <thead>
          <tr>
            <th style="width: 80px">内容</th>
            <th style="width: 80px">倒计时</th>
            <th style="width: 80px">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in timer">
            <td>{{item.msg}}</td>
            <td>{{item.time}}</td>
            <td>
              <button v-show='!item.work' @click="setTimerWork(index, true)">启动</button>
              <button v-show='item.work' @click="setTimerWork(index, false)">暂停</button>
              <button class="deleteBtn" @click="deleteTimer(index)">删除</button>
            </td>
          </tr>
        </tbody>
      </table>
		</div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      timer: [],
      msg: '',
      errMsg: '',
      time: ''
    }
  },
  methods: {
    addTimer () {
      function isNumber (obj) {
        return Number(obj) === +obj
      }
      if (!isNumber(this.time)) {
        this.errMsg = '倒计时必须为数字'
        return
      }
      if (this.msg.trim() === '' || this.time.trim() === '') {
        this.errMsg = '内容和倒计时必须非空'
        return
      }
      this.timer.push({msg: this.msg.trim(), time: this.time.trim(), work: false})
      this.msg = ''
      this.time = ''
      this.errMsg = ''
      window.localStorage.setItem('timer', JSON.stringify(this.timer))
    },
    setTimerWork (i, bWork) {
      this.timer[i].work = bWork
      window.localStorage.setItem('timer', JSON.stringify(this.timer))
    },
    deleteTimer (i) {
      let id = this.$layer.confirm('确认删除？', () => {
        this.timer.splice(i, 1)
        this.$layer.msg('删除成功', {})
        this.$layer.close(id)
        window.localStorage.setItem('timer', JSON.stringify(this.timer))
      })
    }
  },
  mounted () {
    let self = this
    let fn = function () {
      for (let i = 0; i < self.timer.length; ++i) {
        if (self.timer[i].work) {
          if (Number(self.timer[i].time) > 0) {
            self.timer[i].time -= 1
            window.localStorage.setItem('timer', JSON.stringify(self.timer))
          }
        }
      }
    }
    setInterval(fn, 1000)

    let arr = JSON.parse(window.localStorage.getItem('timer'))
    if (arr instanceof Array && arr.length > 0) {
      this.timer = arr
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btns{
	margin: 18px;
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
