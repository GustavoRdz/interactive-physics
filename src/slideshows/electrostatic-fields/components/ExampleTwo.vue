<template lang="pug">
  eg-transition(:enter='enter', :leave='leave')
    .eg-slide-content
      p.problem Consider three point charges located at the corners of a right triangle as shown in the figure, where q<sub>1</sub> = {{ q1 * 1e6 }} μC, q<sub>2</sub> = {{ q2 * 1e6}} μC, q<sub>3</sub> = {{ q3 *1e6 }} μC,and a = {{ a }} m. Find the resultant force exerted on q<sub>3</sub>.

      .center
        img(src='../assets/fig23-7.png' height="200px")
      .center
        p.solution Please do calculations and introduce your results
        p.inline.data q1 (C)
          input.center.data(:class="checkedQ1" v-model.number='enterQ1')
          <span class="error" v-if="errorQ1">[e: {{ errorQ1.toPrecision(3) }}%]</span>
        p.inline.data q2 (C)
          input.center.data(:class="checkedQ2" v-model.number='enterQ2')
          <span class="error" v-if="errorQ2">[e: {{ errorQ2.toPrecision(3) }}%]</span>
        p.inline.data q3 (C)
          input.center.data(:class="checkedQ3" v-model.number='enterQ3')
          <span class="error" v-if="errorQ3">[e: {{ errorQ3.toPrecision(3) }}%]</span>
        p.inline.data r<sub>13</sub> (m)
          input.center.data(:class="checkedR13" v-model='enterR13')
          <span class="error" v-if="errorR13">[e: {{ errorR13.toPrecision(3) }}%]</span>
        p.inline.data r<sub>23</sub> (m)
          input.center.data(:class="checkedR23" v-model='enterR23')
          <span class="error" v-if="errorR23">[e: {{ errorR23.toPrecision(3) }}%]</span>
        p.inline.data F<sub>q3x</sub> (N)
          input.center.data(:class="checkedFq3x" v-model='enterFq3x')
          <span class="error" v-if="errorFq3x">[e: {{ errorFq3x.toPrecision(3) }}%]</span>
        p.inline.data F<sub>q3y</sub> (N)
          input.center.data(:class="checkedFq3y" v-model='enterFq3y')
          <span class="error" v-if="errorFq3y">[e: {{ errorFq3y.toPrecision(3) }}%]</span>
        
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
      enterQ3: '',
      errorQ3: 0,
      enterR13: '',
      errorR13: 0,
      enterR23: '',
      errorR23: 0,
      enterFq3x: '',
      errorFq3x: 0,
      enterFq3y: '',
      errorFq3y: 0,
      enterFq3: '',
      errorFq3: 0,
      ke: 8.9876e9
    }
  },
  computed: {
    q1: function () {
      console.clear()
      let max = 10
      let min = 5
      return Math.floor(Math.random() * (max - min + 1) + min) * 1e-6
    },
    q2: function () {
      let max = 5
      let min = 1
      return -Math.floor(Math.random() * (max - min + 1) + min) * 1e-6
    },
    q3: function () {
      let max = 10
      let min = 2
      return Math.floor(Math.random() * (max - min + 1) + min) * 1e-6
    },
    a: function () {
      let max = 10
      let min = 1
      return Math.floor(Math.random() * (max - min + 1) + min) / 10
    },
    r13: function () {
      return this.a * Math.sqrt(2)
    },
    r23: function () {
      return this.a
    },
    fQ3x: function () {
      let f13 = this.ke * this.q1 * this.q3 / (this.r13 ** 2)
      let f23 = this.ke * Math.abs(this.q2) * this.q3 / (this.r23 ** 2)

      return f13 * Math.cos(Math.PI / 4) - f23
    },
    fQ3y: function () {
      let f13 = this.ke * this.q1 * this.q3 / this.r13 ** 2

      return f13 * Math.sin(Math.PI / 4)
    },
    checkedQ1: function () {
      this.errorQ1 = this.errorRelative('q1 => ', this.q1, parseFloat(this.enterQ1))
      return this.errorQ1 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedQ2: function () {
      this.errorQ2 = this.errorRelative('q2 => ', this.q2, parseFloat(this.enterQ2))
      return this.errorQ2 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedQ3: function () {
      this.errorQ3 = this.errorRelative('q3 => ', this.q3, parseFloat(this.enterQ3))
      return this.errorQ3 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedR13: function () {
      this.errorR13 = this.errorRelative('r13 => ', this.r13, parseFloat(this.enterR13))
      return this.errorR13 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedR23: function () {
      this.errorR23 = this.errorRelative('r23 => ', this.r23, parseFloat(this.enterR23))
      return this.errorR23 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedFq3x: function () {
      this.errorFq3x = this.errorRelative('Fq3x => ', this.fQ3x, parseFloat(this.enterFq3x))
      return this.errorFq3x < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedFq3y: function () {
      this.errorFq3y = this.errorRelative('Fq3y => ', this.fQ3y, parseFloat(this.enterFq3y))
      return this.errorFq3y < 1e-1 ? 'correct' : 'not-correct'
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
