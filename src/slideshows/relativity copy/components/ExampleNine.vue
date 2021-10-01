<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem Two people carry out a test and find that, from the start of a fire until the alarm system was activated, {{ t2.toFixed(1) }} seconds elapsed, although an observer who was vigilant from a airship assures that the time was {{ t1.toFixed(1) }} sec. How fast was the observer airship moving?
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data T<sub>1</sub> (s)
        input.center.data(:class="checkedT1" v-model.number='enterT1')
        <span class="error" v-if="errorT1">[e: {{ errorT1.toPrecision(2) }}%]</span>
      p.inline.data T<sub>2</sub> (s)
        input.center.data(:class="checkedT2" v-model.number='enterT2')
        <span class="error" v-if="errorT2">[e: {{ errorT2.toPrecision(2) }}%]</span>
      p.inline.data v (in c)
        input.center.data(:class="checkedV" v-model.number='enterV')
        <span class="error" v-if="errorV">[e: {{ errorV.toPrecision(2) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterT1: '',
      errorT1: 0,
      enterT2: '',
      errorT2: 0,
      enterV: '',
      errorV: 0
    }
  },
  computed: {
    t1: function () {
      console.clear()
      let max = 50
      let min = 25
      return Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min)
    },
    t2: function () {
      let max = 20
      let min = 10
      return Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min)
    },
    speed: function () {
      return Math.round(100 * Math.sqrt(1 - Math.pow(this.t2, 2) / Math.pow(this.t1, 2))) / 100
    },
    checkedT1: function () {
      this.errorT1 = this.errorRelative('time 1 => ', this.t1, parseFloat(this.enterT1))
      return this.errorT1 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedV: function () {
      this.errorV = this.errorRelative('speed => ', this.speed, parseFloat(this.enterV))
      return this.errorV < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedT2: function () {
      this.errorT2 = this.errorRelative('time 2 => ', this.t2, parseFloat(this.enterT2))
      return this.errorT2 < 1e-1 ? 'correct' : 'not-correct'
    }
  },
  methods: {
    message: function (name) {
      return
    },
    errorRelative: function (comment, A, x) {
      let relativeError
      relativeError = 100 * Math.abs((A - x) / (A + Number.MIN_VALUE))
      console.log(comment + A + ' : ' + x + ' ==> ' + 'error  ' + relativeError + ' %')
      return relativeError
    }
  },
  mixins: [eagle.slide]
}
</script>

<style lang='scss' scoped>
.data {
  display: inline-block;
  width: 100px;
  height: 30px;
  margin: 5px 3px 5px 3px;
  font-size: 20px;
}
.problem {
  margin: 0;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 25px;
  color: blue;
  width: 100%;
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
.error {
  font-size: 14px;
}
</style>
