<template>
  <div class="hello">
		<div class="btns">
			内容：
			<input class="inp" v-model="msg"/>
			倒计时：
			<input class="inp" v-model="time"/>
      <button @click="addTimer">确认</button>
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
      timer: [{msg: '计时器1', time: 111, work: false}, {msg: '计时器2', time: 222, work: false}],
      msg: '',
      time: ''
    }
  },
  methods: {
    addTimer () {
      if (this.msg === '' || this.time === '') {
        return
      }
      this.timer.push({msg: this.msg, time: this.time, work: false})
      this.msg = ''
      this.time = ''
    },
    setTimerWork (i, bWork) {
      this.timer[i].work = bWork
    },
    deleteTimer (i) {
      this.timer.splice(i, 1)
    },
    upTimer () {
      let fn = function () {
        for (let i = 0; i < this.timer.length; ++i) {
          if (this.timer[i].work) {
            if (Number(this.timer[i].time) > 0) {
              this.timer[i].time -= 1
            }
          }
        }
      }
      setInterval(fn, 1000)
    }
  },
  mounted () {
    let self = this
    let fn = function () {
      for (let i = 0; i < self.timer.length; ++i) {
        if (self.timer[i].work) {
          if (Number(self.timer[i].time) > 0) {
            self.timer[i].time -= 1
          }
        }
      }
    }
    setInterval(fn, 1000)

    self.timer.push({msg: '计时器3', time: 333, work: false})
    self.timer.push({msg: '计时器4', time: 444, work: false})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btns{
	margin: 18px;
}
.deleteBtn {
  background-color: #d73925;
}
.deleteBtn:hover {
  background-color: #ac2925;
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
.table{
  width: 100%;
  max-width: 100%;
}

th {
  background-color: #34a97e;
  border-color: #ddd;
  border-width: 1px;
  padding: 8px;
  color: #fff;
  font-weight: normal;
}

td {
  background-color: #fdfdfd;
  border-color: #ddd;
  border-width: 1px;
  padding: 8px;
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
