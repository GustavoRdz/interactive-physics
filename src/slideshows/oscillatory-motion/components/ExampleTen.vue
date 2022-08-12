<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(v-if = '!language' style="margin: 25px 0px 0px 0px;").problem A cheerleader waves her pom-pom in SHM with an amplitude of {{ amplitude }} cm and a frequency of {{ frequency }} Hz. Find (a) the maximum magnitude of the acceleration and of the velocity; (b) the acceleration and speed when the pom-pom’s coordinate is <span style="font-family: times; font-style: italic; font-weight: bold;">x</span> = {{ position }} cm (c) the time required to move from the equilibrium position directly to a point {{ position2 }} cm away.
    p(v-if = 'language' style="margin: 25px 0px 0px 0px;").problem Una animadora agita su pompón en MAS con una amplitud de {{ amplitude }}cm y una frecuencia de {{ frequency }}Hz. Encuentre (a) la magnitud máxima de la aceleración y de la velocidad; (b) la aceleración y la velocidad cuando la coordenada del pompón es <span style="font-family: times; font-style: italic; font-weight: bold;">x</span> = {{ position }}cm (c) el tiempo necesario para moverse directamente desde la posición de equilibrio hasta un punto a {{ position2 }}cm de distancia.
    .center
      p(v-if = '!language' style="margin: 10px 0px 0px 0px;").solution Do calculations and introduce your results
      p(v-if = 'language' style="margin: 10px 0px 0px 0px;").solution Efectúe los cálculos e introduzca sus resultados
      p.inline.data Amplitude (m)
        input.center.data(:class="checkedAmplitude" v-model.number='enterAmplitude')
        <span class="error" v-if="errorAmplitude">[e: {{ errorAmplitude.toPrecision(3) }}%]</span>
      p.inline.data  Frequency (Hz)
        input.center.data(:class="checkedFrequency" v-model.number='enterFrequency')
        <span class="error" v-if="errorFrequency">[e: {{ errorFrequency.toPrecision(3) }}%]</span>
      p.inline.data Max Acceleration (m/s<sup>2</sup>)
        input.center.data(:class="checkedMaxAcc" v-model.number='enterMaxAcc')
        <span class="error" v-if="errorMaxAcc">[e: {{ errorMaxAcc.toPrecision(3) }}%]</span>
      p.inline.data Max velocity (m/s)
        input.center.data(:class="checkedMaxVel" v-model.number='enterMaxVel')
        <span class="error" v-if="errorMaxVel">[e: {{ errorMaxVel.toPrecision(3) }}%]</span>
      p.inline.data Acceleration (m/s<sup>2</sup>) at x = {{ position }} (m);
        input.center.data(:class="checkedAcc" v-model.number='enterAcc')
        <span class="error" v-if="errorAcc">[e: {{ errorAcc.toPrecision(3) }}%]</span>
      p.inline.data Velocity (m/s)  at x = {{ position }} (m);
        input.center.data(:class="checkedVel" v-model.number='enterVel')
        <span class="error" v-if="errorVel">[e: {{ errorVel.toPrecision(3) }}%]</span>
      p.inline.data Time (s)
        input.center.data(:class="checkedTime" v-model.number='enterTime')
        <span class="error" v-if="errorTime">[e: {{ errorTime.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  props: {
    language: Boolean
  },
  data: function () {
    return {
      enterAmplitude: '',
      errorAmplitude: 0,
      enterFrequency: '',
      errorFrequency: 0,
      enterMaxAcc: '',
      errorMaxAcc: 0,
      enterMaxVel: '',
      errorMaxVel: 0,
      enterAcc: '',
      errorAcc: 0,
      enterVel: '',
      errorVel: 0,
      enterTime: '',
      errorTime: 0
    }
  },
  computed: {
    amplitude: function () {
      console.clear()
      let max = 2000
      let min = 1500
      return Math.floor(Math.random() * (max - min + 1) + min) / 100
    },
    frequency: function () {
      let max = 2000
      let min = 500
      return Math.floor(Math.random() * (max - min + 1) + min) / 1000
    },
    position: function () {
      let max = 1500
      let min = 500
      return Math.floor(Math.random() * (max - min + 1) + min) / 100
    },
    position2: function () {
      let max = 1500
      let min = 500
      return Math.floor(Math.random() * (max - min + 1) + min) / 100
    },
    angular: function () {
      return 2 * Math.PI * this.frequency
    },
    maxAcc: function () {
      return Math.pow(this.angular, 2) * this.amplitude / 100
    },
    maxVel: function () {
      return this.angular * this.amplitude / 100
    },
    acc: function () {
      return Math.pow(this.angular, 2) * this.position / 100
    },
    vel: function () {
      return this.angular * Math.sqrt(Math.pow((this.amplitude / 100), 2) - Math.pow((this.position / 100), 2))
    },
    time: function () {
      return Math.acos(this.position2 / this.amplitude) / this.angular
    },
    checkedAmplitude: function () {
      this.errorAmplitude = this.errorRelative('Amplitude => ', this.amplitude / 100, parseFloat(this.enterAmplitude))
      return this.errorAmplitude < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedFrequency: function () {
      this.errorFrequency = this.errorRelative('Frequency => ', this.frequency, parseFloat(this.enterFrequency))
      return this.errorFrequency < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedMaxAcc: function () {
      this.errorMaxAcc = this.errorRelative('Max acc => ', this.maxAcc, parseFloat(this.enterMaxAcc))
      return this.errorMaxAcc < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedMaxVel: function () {
      this.errorMaxVel = this.errorRelative('Max vel => ', this.maxVel, parseFloat(this.enterMaxVel))
      return this.errorMaxVel < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedAcc: function () {
      this.errorAcc = this.errorRelative(`Acc  at ${this.position} => `, this.acc, parseFloat(this.enterAcc))
      return this.errorAcc < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedVel: function () {
      this.errorVel = this.errorRelative(`Vel  at ${this.position} => `, this.vel, parseFloat(this.enterVel))
      return this.errorVel < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedTime: function () {
      this.errorTime = this.errorRelative('Time => ', this.time, parseFloat(this.enterTime))
      return this.errorTime < 1e-1 ? 'correct' : 'not-correct'
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
