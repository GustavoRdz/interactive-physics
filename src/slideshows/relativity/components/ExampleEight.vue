<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem From a beach, a group of people observe that a sportsman kept skiing during {{ t1.toFixed(3) }}min at a speed of {{ speed.toFixed(3) }}c. How long does the pilot of the boat think he was helping you the skier?
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data v (in c)
        input.center.data(:class="checkedV" v-model.number='enterV')
      p.inline.data T<sub>1</sub> (min)
        input.center.data(:class="checkedT1" v-model.number='enterT1')
      p.inline.data T<sub>2</sub> (min)
        input.center.data(:class="checkedT2" v-model.number='enterT2')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterT1: '',
      enterT2: '',
      enterV: ''
    }
  },
  computed: {
    t1: function () {
      let max = 30
      let min = 10
      return Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min)
    },
    speed: function () {
      let max = 80
      let min = 50
      return (Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min) / 100)
    },
    t2: function () {
      return Math.round(1000 * this.t1 * Math.sqrt(1 - this.speed * this.speed)) / 1000
    },
    checkedT1: function () {
      let check
      console.log('T1 => ' + this.t1 + ' : ' + parseFloat(this.enterT1))
      check = this.t1 === parseFloat(this.enterT1) ? 'correct' : 'not-correct'
      return check
    },
    checkedV: function () {
      let check
      console.log('V => ' + this.speed + ' : ' + parseFloat(this.enterV))
      check = this.speed === parseFloat(this.enterV) ? 'correct' : 'not-correct'
      return check
    },
    checkedT2: function () {
      let check
      console.log('T2 => ' + this.t2 + ' : ' + parseFloat(this.enterT2))
      check = this.t2 === parseFloat(this.enterT2) ? 'correct' : 'not-correct'
      return check
    }
  },
  methods: {
    message: function (name) {
      return
    }
  },
  mixins: [eagle.slide]
}
</script>

<style lang='scss' scoped>
.eg-slide {
  .eg-slide-content {
    // FIGURE AND CAPTIONS
    .figure {
      p {
        font-size: 0.7em;
        margin-top: 2em;
        margin-bottom: 0;
        color: #555;
      }
      width: 80%;
      margin-left: 10%;
    }
  }
}

.data {
  display: inline-block;
  width: 100px;
  height: 30px;
  margin: 5px 3px 5px 3px;
  font-size: 20px;
}

.problem {
  margin: 15px 20px 15px 20px;
  font-size: 30px;
  color: blue;
  width: 95%;
}

.solution {
  margin: 15px 5px 5px 5px;
  font-size: 20px;
  color: red;
  width: 100%;
}

.not-correct {
  background: #fa4408;
}
.correct {
  background: #80c080;
}
</style>
