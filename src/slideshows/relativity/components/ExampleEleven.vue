<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A photoelectric tube is weighed in a laboratory, and its mass is found to be {{ m2 }}g. After it is sent in a spaceship whose speed is {{ speed }} c and is analyzed again during the flight. What mass will determine ... <br>a) the people in the laboratory? <br>b) the occupants of the spaceship?
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data v (in c)
        input.center.data(:class="checkedV" v-model.number='enterV')
        <span class="error" v-if="errorV">[e: {{ errorV.toPrecision(2) }}%]</span>
      p.inline.data a) m (g)
        input.center.data(:class="checkedMa" v-model.number='enterMa')
        <span class="error" v-if="errorMa">[e: {{ errorMa.toPrecision(2) }}%]</span>
      p.inline.data b) m (g)
        input.center.data(:class="checkedMb" v-model.number='enterMb')
        <span class="error" v-if="errorMb">[e: {{ errorMb.toPrecision(2) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterMa: '',
      errorMa: 0,
      enterMb: '',
      errorMb: 0,
      enterV: '',
      errorV: 0
    }
  },
  computed: {
    m2: function () {
      console.clear()
      let max = 100
      let min = 20
      return Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min)
    },
    speed: function () {
      let max = 80
      let min = 50
      return (Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min) / 100)
    },
    m1: function () {
      return this.m2 / Math.sqrt(1 - this.speed * this.speed)
    },
    checkedMa: function () {
      this.errorMa = this.errorRelative('mass 1 => ', this.m1, parseFloat(this.enterMa))
      return this.errorMa < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedV: function () {
      this.errorV = this.errorRelative('speed => ', this.speed, parseFloat(this.enterV))
      return this.errorV < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedMb: function () {
      this.errorMb = this.errorRelative('mass 2 => ', this.m2, parseFloat(this.enterMb))
      return this.errorMb < 1e-1 ? 'correct' : 'not-correct'
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
