<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem El coche de policía se dirige a un almacén a  {{ speedSourceA }} m/s y emite un sonido de {{ frequency }} Hz. ¿Qué frecuencia oye el conductor reflejada en el almacén?

    .center
      p.solution Please do calculations and introduce your results
      p.inline.data f<sub>S</sub> (Hz)
        input.center.data(:class="checkedFrequency" v-model.number='enterFrequency')
        <span class="error" v-if="errorFrequency">[e: {{ errorFrequency.toPrecision(3) }}%]</span>
      p.inline.data v<sub>L</sub> (m/s)
        input.center.data(:class="checkedSpeedLA" v-model.number='enterSpeedLA')
        <span class="error" v-if="errorSpeedLA">[e: {{ errorSpeedLA.toPrecision(3) }}%]</span>
      p.inline.data v<sub>S</sub> (m/s)
        input.center.data(:class="checkedSpeedSA" v-model.number='enterSpeedSA')
        <span class="error" v-if="errorSpeedSA">[e: {{ errorSpeedSA.toPrecision(3) }}%]</span>
      p.inline.data f<sub>@wall</sub> (Hz)
        input.center.data(:class="checkedFWall" v-model.number='enterFWall')
        <span class="error" v-if="errorFWall">[e: {{ errorFWall.toPrecision(3) }}%]</span>
    .center
      p.inline.data f<sub>S</sub> (Hz)
        input.center.data(:class="checkedFrequencyB" v-model='enterFrequencyB')
        <span class="error" v-if="errorFrequencyB">[e: {{ errorFrequencyB.toPrecision(3) }}%]</span>
      p.inline.data v<sub>L</sub> (m/s)
        input.center.data(:class="checkedSpeedLB" v-model='enterSpeedLB')
        <span class="error" v-if="errorSpeedSB">[e: {{ errorSpeedSB.toPrecision(3) }}%]</span>
      p.inline.data v<sub>S</sub> (m/s)
        input.center.data(:class="checkedSpeedSB" v-model='enterSpeedSB')
        <span class="error" v-if="errorSpeedSB">[e: {{ errorSpeedSB.toPrecision(3) }}%]</span>
      p.inline.data f<sub>@car</sub> (Hz)
        input.center.data(:class="checkedFCar" v-model='enterFCar')
        <span class="error" v-if="errorFCar">[e: {{ errorFCar.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterFrequency: '',
      errorFrequency: 0,
      enterSpeedLA: '',
      errorSpeedLA: 0,
      enterSpeedSA: '',
      errorSpeedSA: 0,
      enterFWall: '',
      errorFWall: 0,
      enterFrequencyB: '',
      errorFrequencyB: 0,
      enterSpeedLB: '',
      errorSpeedLB: 0,
      enterSpeedSB: '',
      errorSpeedSB: 0,
      enterFCar: '',
      errorFCar: 0,
      speed: 340,
      speedListenerA: 0,
      speedSourceB: 0
    }
  },
  computed: {
    speedSourceA: function () {
      console.clear()
      let max = 50
      let min = 20
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    frequency: function () {
      let max = 800
      let min = 400
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    frequencyWall: function () {
      return this.frequency * this.speed / (this.speed - this.speedSourceA)
    },
    speedListenerB: function () {
      return this.speedSourceA
    },
    frequencyCar: function () {
      return this.frequencyWall * (this.speed + this.speedSourceA) / (this.speed + this.speedSourceB)
    },
    checkedFrequency: function () {
      this.errorFrequency = this.errorRelative('F source => ', this.frequency, parseFloat(this.enterFrequency))
      return this.errorFrequency < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedSpeedLA: function () {
      this.errorSpeedLA = this.errorRelative('Speed listener => ', this.speedListenerA, parseFloat(this.enterSpeedLA))
      return this.errorSpeedLA < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedSpeedSA: function () {
      this.errorSpeedSA = this.errorRelative('Car speed => ', -1 * this.speedSourceA, parseFloat(this.enterSpeedSA))
      return this.errorSpeedSA < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedFWall: function () {
      this.errorFWall = this.errorRelative('Reflected frequency => ', this.frequencyWall, parseFloat(this.enterFWall))
      return this.errorFWall < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedFrequencyB: function () {
      this.errorFrequencyB = this.errorRelative('reflected frequency => ', this.frequencyWall, parseFloat(this.enterFrequencyB))
      return this.errorFrequencyB < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedSpeedLB: function () {
      this.errorSpeedLB = this.errorRelative('Speed Listener reflected => ', this.speedListenerB, parseFloat(this.enterSpeedLB))
      return this.errorSpeedLB < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedSpeedSB: function () {
      this.errorSpeedSB = this.errorRelative('Speed Source reflected => ', this.speedSourceB, parseFloat(this.enterSpeedSB))
      return this.errorSpeedSB < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedFCar: function () {
      this.errorFCar = this.errorRelative('F car => ', this.frequencyCar, parseFloat(this.enterFCar))
      return this.errorFCar < 1e-1 ? 'correct' : 'not-correct'
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
