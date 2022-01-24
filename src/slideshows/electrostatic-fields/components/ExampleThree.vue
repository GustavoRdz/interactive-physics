<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem Three point charges lie along the x axis as shown below. The positive charge q<sub>1</sub> = {{ Math.round(100 * q1 * 1e6) / 100 }} μC is at a = {{ a }} m, the positive charge q<sub>2</sub> = {{ Math.round(100 * q2 * 1e6) /100 }} μC is at the origin, and the net force acting on q<sub>3</sub> is zero. What is the x coordinate of q3?
    .center
        img(src='../assets/fig23-8.png' height="200px")

    .center
      p.solution Please do calculations and introduce your results
      p.inline.data q<sub>1</sub> (C)
        input.center.data(:class="checkedQ1" v-model.number='enterQ1')
        <span class="error" v-if="errorQ1">[e: {{ errorQ1.toPrecision(3) }}%]</span>
      p.inline.data q<sub>2</sub> (C)
        input.center.data(:class="checkedQ2" v-model.number='enterQ2')
        <span class="error" v-if="errorQ2">[e: {{ errorQ2.toPrecision(3) }}%]</span>
      p.inline.data a (m)
        input.center.data(:class="checkedA" v-model.number='enterA')
        <span class="error" v-if="errorA">[e: {{ errorA.toPrecision(3) }}%]</span>
      p.inline.data x (m)
        input.center.data(:class="checkedX" v-model.number='enterX')
        <span class="error" v-if="errorX">[e: {{ errorX.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterQ1: '',
      errorQ1: 0,
      enterQ2: '',
      errorQ2: 0,
      enterA: '',
      errorA: 0,
      enterX: '',
      errorX: 0
    }
  },
  computed: {
    q1: function () {
      console.clear()
      let max = 15
      let min = 5
      return 1e-6 * Math.round(10 * Math.random() * (max - min + 1) + min) / 10
    },
    q2: function () {
      console.clear()
      let max = 15
      let min = 5
      return 1e-6 * Math.round(10 * Math.random() * (max - min + 1) + min) / 10
    },
    a: function () {
      let max = 3
      let min = 2
      return Math.round(Math.random() * (max - min + 1) + min) / 10
    },
    x: function () {
      console.log('x1+: ', this.a * (-this.q2 + Math.sqrt(this.q1 * this.q2)) / (this.q1 - this.q2))
      console.log('x2-: ', this.a * (-this.q2 - Math.sqrt(this.q1 * this.q2)) / (this.q1 - this.q2))
      return this.a * (-this.q2 + Math.sqrt(this.q1 * this.q2)) / (this.q1 - this.q2)
    },
    checkedQ1: function () {
      this.errorQ1 = this.errorRelative('q1 => ', this.q1, parseFloat(this.enterQ1))
      return this.errorQ1 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedQ2: function () {
      this.errorQ2 = this.errorRelative('q2 => ', this.q2, parseFloat(this.enterQ2))
      return this.errorQ2 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedA: function () {
      this.errorA = this.errorRelative('a => ', this.a, parseFloat(this.enterA))
      return this.errorA < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedX: function () {
      this.errorX = this.errorRelative('x => ', this.x, parseFloat(this.enterX))
      return this.errorX < 1e-1 ? 'correct' : 'not-correct'
    }
  },
  methods: {
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
