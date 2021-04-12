<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A wire with mass {{ mass }} g is stretched so that its ends are tied down at points {{ length }} cm apart. The wire vibrates in its fundamental mode with frequency {{ frequency }} Hz and with an amplitude at the antinodes of {{ amplitude }} cm. (a) What is the speed of propagation of transverse waves in the wire? (b) Compute the tension in the wire. (c) Find the maximum transverse velocity and acceleration of particles in the wire.

    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Speed (m/s)
        input.center.data(:class="checkedSpeed" v-model.number='enterSpeed')
        <span class="error" v-if="errorSpeed">[e: {{ errorSpeed.toPrecision(3) }}%]</span>
      p.inline.data Linear density (kg/m)
        input.center.data(:class="checkedDensity" v-model.number='enterDensity')
        <span class="error" v-if="errorDensity">[e: {{ errorDensity.toPrecision(3) }}%]</span>
      p.inline.data Tension (N)
        input.center.data(:class="checkedTension" v-model.number='enterTension')
        <span class="error" v-if="errorTension">[e: {{ errorTension.toPrecision(3) }}%]</span>
      p.inline.data ω (rad/s)
        input.center.data(:class="checkedOmega" v-model.number='enterOmega')
        <span class="error" v-if="errorOmega">[e: {{ errorOmega.toPrecision(3) }}%]</span>
      p.inline.data Transverse velocity (m/s)
        input.center.data(:class="checkedTranSpeed" v-model.number='enterTranSpeed')
        <span class="error" v-if="errorTranSpeed">[e: {{ errorTranSpeed.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterSpeed: '',
      errorSpeed: 0,
      enterDensity: '',
      errorDensity: 0,
      enterTension: '',
      errorTension: 0,
      enterOmega: '',
      errorOmega: 0,
      enterTranSpeed: '',
      errorTranSpeed: 0
    }
  },
  computed: {
    mass: function () {
      console.clear()
      let max = 70
      let min = 30
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    length: function () {
      let max = 100
      let min = 60
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    frequency: function () {
      let max = 100
      let min = 40
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    amplitude: function () {
      let max = 20
      let min = 5
      return Math.floor(Math.random() * (max - min + 1) + min) / 10
    },
    speed: function () {
      return 2 * (this.length / 100) * this.frequency
    },
    density: function () {
      return 1e-3 * this.mass / (this.length / 100)
    },
    tension: function () {
      return this.density * this.speed ** 2
    },
    omega: function () {
      return 2 * Math.PI * this.frequency
    },
    tranSpeed: function () {
      return this.omega * (this.amplitude / 100)
    },
    checkedSpeed: function () {
      this.errorSpeed = this.errorRelative('Speed => ', this.speed, parseFloat(this.enterSpeed))
      return this.errorSpeed < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedDensity: function () {
      this.errorDensity = this.errorRelative('Density => ', this.density, parseFloat(this.enterDensity))
      return this.errorDensity < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedTension: function () {
      this.errorTension = this.errorRelative('tension => ', this.tension, parseFloat(this.enterTension))
      return this.errorTension < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedOmega: function () {
      this.errorOmega = this.errorRelative('Omega => ', this.omega, parseFloat(this.enterOmega))
      return this.errorOmega < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedTranSpeed: function () {
      this.errorTranSpeed = this.errorRelative('Transverse speed => ', this.tranSpeed, parseFloat(this.enterTranSpeed))
      return this.errorTranSpeed < 1e-1 ? 'correct' : 'not-correct'
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
.eg-slide {
  .eg-slide-content {
    width: 100%;
    max-width: 100%;
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
  margin: 0;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 22px;
  color: blue;
  width: 100%;
}
.mate {
  font-family: 'New Times Roman';
  font-style: italic;
  font-size: 30px;
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
