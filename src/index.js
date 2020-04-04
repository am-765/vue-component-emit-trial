import Vue from 'vue'
import NumberGuess from './components/NumberGuess.vue'

const app = new Vue({
  el: '#app',

  data: {
    message: 'スタートボタンを押してください！',
    tryCountLeft: 0
  },

  components: {
    NumberGuess
  },

  methods: {
    onStart(tryCountLeft) {
      this.message = 'スタート'
      this.tryCountLeft = tryCountLeft
    },

    onCollect(tryCountLeft) {
      this.message = '正解！'
      this.tryCountLeft = tryCountLeft
    },

    onLose(tryCountLeft) {
      this.message = '負け！'
      this.tryCountLeft = tryCountLeft
    },

    onLow(tryCountLeft) {
      this.message = '低い！'
      this.tryCountLeft = tryCountLeft
    },

    onHigh(tryCountLeft) {
      this.message = '高い！'
      this.tryCountLeft = tryCountLeft
    }
  }
})
