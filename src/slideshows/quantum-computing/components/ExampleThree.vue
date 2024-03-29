<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(v-if = '!language' style="margin: 25px 0px 0px 0px;").problem We give the glider of the last Exercise an initial displacement <span style="font-family: times; font-style: italic; font-weight: bold;">x</span><span style="font-family: times; font-weight: bold;"><sub>0</sub></span> = {{ initialDisplacement }} m and an initial velocity <span style="font-family: times; font-style: italic; font-weight: bold;">v</span><span style="font-family: times; font-weight: bold;"><sub>0</sub></span> = {{ initialSpeed }} m/s. Find the period, amplitude, and phase angle of the resulting motion.<br><span style="font-size: 20px; color: green;">Use &omega; = {{ angular }} rad/s</span>
    p(v-if = 'language' style="margin: 25px 0px 0px 0px;").problem Le damos al planeador del ejercicio anterior un desplazamiento inicial <span style="font-family: times; font-style: italic; font-weight: bold;">x</span><span style="font-family: times; font-weight: bold;"><sub>0</sub></span> = {{ initialDisplacement }} m y una velocidad inicial <span style="font-family: times; font-style: italic; font-weight: bold;">v</span><span style="font-family: times; font-weight: bold;"><sub>0</sub></span> = {{ initialSpeed }} m/s. Encuentre el período, la amplitud y el ángulo de fase del movimiento resultante. <br><span style="font-size: 20px; color: green;">Use &omega; = {{ angular }} rad/s</span>

    .center
      p(v-if = '!language' style="margin: 10px 0px 0px 0px;").solution Do calculations and introduce your results
      p(v-if = 'language' style="margin: 10px 0px 0px 0px;").solution Efectúe los cálculos e introduzca sus resultados
      p.inline.data Initial displacement (m)
        input.center.data(:class="checkedInitDisp" v-model.number='enterInitDisp')
        <span class="error" v-if="errorInitDisp">[e: {{ errorInitDisp.toPrecision(3) }}%]</span>
      p.inline.data Initial speed (m/s)
        input.center.data(:class="checkedInitSpeed" v-model.number='enterInitSpeed')
        <span class="error" v-if="errorInitSpeed">[e: {{ errorInitSpeed.toPrecision(3) }}%]</span>
      p.inline.data Angular frequency (rad/s)
        input.center.data(:class="checkedAngularFreq" v-model.number='enterAngularFreq')
        <span class="error" v-if="errorAngularFreq">[e: {{ errorAngularFreq.toPrecision(3) }}%]</span>
      p.inline.data Period (s)
        input.center.data(:class="checkedPeriod" v-model.number='enterPeriod')
        <span class="error" v-if="errorPeriod">[e: {{ errorPeriod.toPrecision(3) }}%]</span>
      p.inline.data Amplitude (m)
        input.center.data(:class="checkedAmplitude" v-model='enterAmplitude')
        <span class="error" v-if="errorAmplitude">[e: {{ errorAmplitude.toPrecision(3) }}%]</span>
      p.inline.data Phase angle (rad)
        input.center.data(:class="checkedPhase" v-model='enterPhase')
        <span class="error" v-if="errorPhase">[e: {{ errorPhase.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  props: {
    language: Boolean
  },
  data: function () {
    return {
      enterInitDisp: '',
      errorInitDisp: 0,
      enterInitSpeed: '',
      errorInitSpeed: 0,
      enterAngularFreq: '',
      errorAngularFreq: 0,
      enterPeriod: '',
      errorPeriod: 0,
      enterAmplitude: '',
      errorAmplitude: 0,
      enterPhase: '',
      errorPhase: 0
    }
  },
  computed: {
    initialDisplacement: function () {
      console.clear()
      let max = 5
      let min = 1
      return Math.round(10 * Math.random() * (max - min + 1) + min) / 1000
    },
    initialSpeed: function () {
      let max = 5
      let min = 1
      return Math.round(Math.random() * (max - min + 1) + min) / 10
    },
    angular: function () {
      let max = 50
      let min = 20
      return Math.round(1000 * (Math.random() * (max - min + 1) + min)) / 1000
    },
    period: function () {
      return 2 * Math.PI / this.angular
    },
    amplitude: function () {
      return Math.sqrt(Math.pow(this.initialDisplacement, 2) + Math.pow(this.initialSpeed / this.angular, 2))
    },
    phase: function () {
      return Math.atan2(-this.initialSpeed, this.angular * this.initialDisplacement)
    },
    checkedInitDisp: function () {
      this.errorInitDisp = this.errorRelative('Init displacement => ', this.initialDisplacement, parseFloat(this.enterInitDisp))
      return this.errorInitDisp < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedInitSpeed: function () {
      this.errorInitSpeed = this.errorRelative('Init speed => ', this.initialSpeed, parseFloat(this.enterInitSpeed))
      return this.errorInitSpeed < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedAngularFreq: function () {
      this.errorAngularFreq = this.errorRelative('Angular freq => ', this.angular, parseFloat(this.enterAngularFreq))
      return this.errorAngularFreq < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedPeriod: function () {
      this.errorPeriod = this.errorRelative('Period => ', this.period, parseFloat(this.enterPeriod))
      return this.errorPeriod < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedAmplitude: function () {
      this.errorAmplitude = this.errorRelative('Amplitud => ', this.amplitude, parseFloat(this.enterAmplitude))
      return this.errorAmplitude < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedPhase: function () {
      this.errorPhase = this.errorRelative('Phase => ', this.phase, parseFloat(this.enterPhase))
      return this.errorPhase < 1e-1 ? 'correct' : 'not-correct'
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
