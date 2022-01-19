<template lang="pug">
  eg-transition(:enter='enter', :leave='leave')
    .eg-slide-content
      p.problem Consider three point charges located at the corners of a right triangle as shown in the figure, where q<sub>1</sub> = {{ q1 }} μC, q<sub>2</sub> = {{ q2 }} μC, q<sub>3</sub> = {{ q3 }} μC,and a = {{ a }} m. Find the resultant force exerted on q<sub>3</sub>.

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
        p.inline.data F<sub>q1</sub> (N)
          input.center.data(:class="checkedFq1" v-model='enterFq1')
          <span class="error" v-if="errorFq1">[e: {{ errorFq1.toPrecision(3) }}%]</span>
        p.inline.data F<sub>q2</sub> (N)
          input.center.data(:class="checkedFq2" v-model='enterFq2')
          <span class="error" v-if="errorFq2">[e: {{ errorFq2.toPrecision(3) }}%]</span>
        p.inline.data F<sub>q3</sub> (N)
          input.center.data(:class="checkedFq3" v-model='enterFq3')
          <span class="error" v-if="errorFq3">[e: {{ errorFq3.toPrecision(3) }}%]</span>
        
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
      enterFq1: '',
      errorFq1: 0,
      enterFq2: '',
      errorFq2: 0,
      enterFq3: '',
      errorFq3: 0,
      enterFr: '',
      errorFr: 0,
      enterT: '',
      errorT: 0
    }
  },
  computed: {
    q1: function () {
      console.clear()
      let max = 10
      let min = 5
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    q2: function () {
      let max = 5
      let min = 0
      return -Math.floor(Math.random() * (max - min + 1) + min)
    },
    q3: function () {
      let max = 10
      let min = 2
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    a: function () {
      let max = 10
      let min = 1
      return Math.floor(Math.random() * (max - min + 1) + min) / 10
    },
    elastic: function () {
      return this.force / this.displacement
    },
    frequency: function () {
      return this.angular / (2 * Math.PI)
    },
    angular: function () {
      return Math.sqrt(this.elastic / this.mass)
    },
    period: function () {
      return 1 / this.frequency
    },
    checkedF: function () {
      this.errorF = this.errorRelative('Force => ', this.force, parseFloat(this.enterF))
      return this.errorF < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedD: function () {
      this.errorD = this.errorRelative('Displacement => ', this.displacement, parseFloat(this.enterD))
      return this.errorD < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedM: function () {
      this.errorM = this.errorRelative('Mass => ', this.mass, parseFloat(this.enterM))
      return this.errorM < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedPullD: function () {
      this.errorPullD = this.errorRelative('Pull distance => ', this.pullDistance, parseFloat(this.enterPullD))
      return this.errorPullD < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedK: function () {
      this.errorK = this.errorRelative('elastic K => ', this.elastic, parseFloat(this.enterK))
      return this.errorK < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedOmega: function () {
      this.errorOmega = this.errorRelative('Angular freq => ', this.angular, parseFloat(this.enterOmega))
      return this.errorOmega < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedFr: function () {
      this.errorFr = this.errorRelative('frequency => ', this.frequency, parseFloat(this.enterFr))
      return this.errorFr < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedT: function () {
      this.errorT = this.errorRelative('Period => ', this.period, parseFloat(this.enterT))
      return this.errorT < 1e-1 ? 'correct' : 'not-correct'
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
