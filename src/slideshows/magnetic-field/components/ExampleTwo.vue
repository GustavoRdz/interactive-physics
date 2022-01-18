<template lang="pug">
  eg-transition(:enter='enter', :leave='leave')
    .eg-slide-content
      p.problem A spring is mounted horizontally, with its left end fixed. A spring balance attached to the free end and pulled toward the right indicates that the stretching force is proportional to the displacement, and a force of {{ force }} N causes a displacement of {{ displacement }} m. We replace the spring balance with a {{ mass }}-kg glider, pull it {{ pullDistance }} m to the right along a frictionless air track, and release it from rest. (a) Find the force constant k of the spring. (b) Find the angular frequency &omega;, frequency <strong>f</strong>, and period <strong>T</strong> of the resulting oscillation.
      .center
        p.solution Please do calculations and introduce your results
        p.inline.data Force (N)
          input.center.data(:class="checkedF" v-model.number='enterF')
          <span class="error" v-if="errorF">[e: {{ errorF.toPrecision(3) }}%]</span>
        p.inline.data Displacement (m)
          input.center.data(:class="checkedD" v-model.number='enterD')
          <span class="error" v-if="errorD">[e: {{ errorD.toPrecision(3) }}%]</span>
        p.inline.data Mass (Kg)
          input.center.data(:class="checkedM" v-model.number='enterM')
          <span class="error" v-if="errorM">[e: {{ errorM.toPrecision(3) }}%]</span>
        p.inline.data Pull distance (m)
          input.center.data(:class="checkedPullD" v-model='enterPullD')
          <span class="error" v-if="errorPullD">[e: {{ errorPullD.toPrecision(3) }}%]</span>
        p.inline.data Elastic constant (N/m)
          input.center.data(:class="checkedK" v-model='enterK')
          <span class="error" v-if="errorK">[e: {{ errorK.toPrecision(3) }}%]</span>
        p.inline.data Angular frequency (rad/s)
          input.center.data(:class="checkedOmega" v-model='enterOmega')
          <span class="error" v-if="errorOmega">[e: {{ errorOmega.toPrecision(3) }}%]</span>
        p.inline.data Frequency (Hz)
          input.center.data(:class="checkedFr" v-model='enterFr')
          <span class="error" v-if="errorFr">[e: {{ errorFr.toPrecision(3) }}%]</span>
        p.inline.data Period (s)
          input.center.data(:class="checkedT" v-model='enterT')
          <span class="error" v-if="errorT">[e: {{ errorT.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterF: '',
      errorF: 0,
      enterD: '',
      errorD: 0,
      enterM: '',
      errorM: 0,
      enterPullD: '',
      errorPullD: 0,
      enterK: '',
      errorK: 0,
      enterOmega: '',
      errorOmega: 0,
      enterFr: '',
      errorFr: 0,
      enterT: '',
      errorT: 0
    }
  },
  computed: {
    force: function () {
      console.clear()
      let max = 10
      let min = 5
      return Math.floor(100 * (Math.random() * (max - min + 1) + min)) / 100
    },
    displacement: function () {
      let max = 10
      let min = 2
      return Math.floor(10 * (Math.random() * (max - min + 1) + min)) / 1000
    },
    mass: function () {
      let max = 8
      let min = 2
      return Math.floor(100 * Math.random() * (max - min + 1) + min) / 1000
    },
    pullDistance: function () {
      let max = 8
      let min = 2
      return Math.floor(10 * Math.random() * (max - min + 1) + min) / 1000
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
