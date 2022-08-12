<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(v-if = '!language' style="margin: 25px 0px 0px 0px;").problem An object is undergoing Simple Harmonic Motion (SHM) with period {{ period }} s and amplitude {{ amplitude }} cm. At <span style="font-family: times; font-style: italic; font-weight: bold;">t</span> = 0s the object is at <span style="font-family: times; font-style: italic; font-weight: bold;">x</span> = {{ amplitude }} cm and is instantaneously at rest. Calculate the time it takes the object to go (a) from <span style="font-family: times; font-style: italic; font-weight: bold;">x</span> = {{ amplitude }} cm to <span style="font-family: times; font-style: italic; font-weight: bold;">x</span> = {{ amplitude / 2 }} cm and (b) from <span style="font-family: times; font-style: italic; font-weight: bold;">x</span> = {{ amplitude / 2 }} cm to <span style="font-family: times; font-style: italic; font-weight: bold;">x</span> = 0 cm.
    p(v-if = 'language' style="margin: 25px 0px 0px 0px;").problem Un objeto experimenta un movimiento armónico simple (MAS) con un período de {{ period }} s y una amplitud de {{ amplitude }} cm. En <span style="font-family: times; font-style: italic; font-weight: bold;">t</span> = 0s el objeto está en <span style="font-family: times; font-style: italic; font-weight: bold;">x</span> = {{ amplitude }} cm y está instantáneamente en reposo. Calcula el tiempo que tarda el objeto en ir (a) de <span style="font-family: times; font-style: italic; font-weight: bold;">x</span> =  {{ amplitude }} cm a <span style="font-family: times; font-style: italic; font-weight: bold;">x</span> = {{ amplitude / 2 }} cm y (b) de <span style="font-family: times; font-style: italic; font-weight: bold;">x</span> = {{ amplitude / 2 }} cm a <span style="font-family: times; font-style: italic; font-weight: bold;">x</span> = 0 cm.
    .center
      p(v-if = '!language' style="margin: 10px 0px 0px 0px;").solution Do calculations and introduce your results
      p(v-if = 'language' style="margin: 10px 0px 0px 0px;").solution Efectúe los cálculos e introduzca sus resultados
      p.inline.data Period (s)
        input.center.data(:class="checkedPeriod" v-model.number='enterPeriod')
        <span class="error" v-if="errorPeriod">[e: {{ errorPeriod.toPrecision(3) }}%]</span>
      p.inline.data Amplitude (m)
        input.center.data(:class="checkedAmplitude" v-model.number='enterAmplitude')
        <span class="error" v-if="errorAmplitude">[e: {{ errorAmplitude.toPrecision(3) }}%]</span>
      p.inline.data Angular frequency (rad/s)
        input.center.data(:class="checkedAngular" v-model.number='enterAngular')
        <span class="error" v-if="errorAngular">[e: {{ errorAngular.toPrecision(3) }}%]</span>
      p.inline.data (a) time (s)
        input.center.data(:class="checkedHalf" v-model.number='enterHalf')
        <span class="error" v-if="errorHalf">[e: {{ errorHalf.toPrecision(3) }}%]</span>
      p.inline.data (b) time (s)
        input.center.data(:class="checkedSecondHalf" v-model='enterSecondHalf')
        <span class="error" v-if="errorSecondHalf">[e: {{ errorSecondHalf.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  props: {
    language: Boolean
  },
  data: function () {
    return {
      enterPeriod: '',
      errorPeriod: 0,
      enterAmplitude: '',
      errorAmplitude: 0,
      enterAngular: '',
      errorAngular: 0,
      enterHalf: '',
      errorHalf: 0,
      enterSecondHalf: '',
      errorSecondHalf: 0
    }
  },
  computed: {
    period: function () {
      console.clear()
      let max = 40
      let min = 20
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    amplitude: function () {
      let max = 40
      let min = 20
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    angular: function () {
      return 2 * Math.PI / this.period
    },
    half: function () {
      return this.period / 6
    },
    secondHalf: function () {
      return (this.period / 4) - this.half
    },
    checkedPeriod: function () {
      this.errorPeriod = this.errorRelative('Period => ', this.period, parseFloat(this.enterPeriod))
      return this.errorPeriod < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedAmplitude: function () {
      this.errorAmplitude = this.errorRelative('Amplitude => ', this.amplitude / 100, parseFloat(this.enterAmplitude))
      return this.errorAmplitude < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedAngular: function () {
      this.errorAngular = this.errorRelative('Omega => ', this.angular, parseFloat(this.enterAngular))
      return this.errorAngular < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedHalf: function () {
      this.errorHalf = this.errorRelative('a) time  => ', this.half, parseFloat(this.enterHalf))
      return this.errorHalf < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedSecondHalf: function () {
      this.errorSecondHalf = this.errorRelative('b) time => ', this.secondHalf, parseFloat(this.enterSecondHalf))
      return this.errorSecondHalf < 1e-1 ? 'correct' : 'not-correct'
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
