<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem The police car is moving toward a warehouse at {{ speedSourceA }} m/s, emitting a sound of {{ frequency }}Hz. What frequency does the driver hear reflected from the warehouse?

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
      let check
      console.log('source frequency => ' + this.frequency + ' : ' + parseFloat(this.enterFrequency))
      this.errorFrequency = 100 * Math.abs(this.frequency - parseFloat(this.enterFrequency)) / this.frequency
      console.log('error  ' + this.errorFrequency + ' %')
      // check = this.t2 === parseFloat(this.enterT2) ? 'correct' : 'not-correct'
      check = this.errorFrequency < 1e-2 ? 'correct' : 'not-correct'
      return check
    },
    checkedSpeedLA: function () {
      let check
      console.log('Speed listener => ' + this.speedListenerA + ' : ' + parseFloat(this.enterSpeedLA))
      this.errorSpeedLA = 100 * Math.abs(this.speedListenerA - parseFloat(this.enterSpeedLA)) / 1
      console.log('error  ' + this.errorSpeedLA + ' %')
      // check = this.t2 === parseFloat(this.enterT2) ? 'correct' : 'not-correct'
      check = this.errorSpeedLA < 1e-2 ? 'correct' : 'not-correct'
      return check
    },
    checkedSpeedSA: function () {
      let check
      console.log('Speed car => ' + -1 * this.speedSourceA + ' : ' + parseFloat(this.enterSpeedSA))
      this.errorSpeedSA = 100 * Math.abs(-1 * this.speedSourceA - parseFloat(this.enterSpeedSA)) / this.speedSourceA
      console.log('error  ' + this.errorSpeedSA + ' %')
      // check = this.t2 === parseFloat(this.enterT2) ? 'correct' : 'not-correct'
      check = this.errorSpeedSA < 1e-2 ? 'correct' : 'not-correct'
      return check
    },
    checkedFWall: function () {
      let check
      console.log('Reflected frequency => ' + this.frequencyWall + ' : ' + parseFloat(this.enterFWall))
      this.errorFWall = 100 * Math.abs(this.frequencyWall - parseFloat(this.enterFWall)) / this.frequencyWall
      console.log('error  ' + this.errorFWall + ' %')
      // check = this.t2 === parseFloat(this.enterT2) ? 'correct' : 'not-correct'
      check = this.errorFWall < 1e-2 ? 'correct' : 'not-correct'
      return check
    },
    checkedFrequencyB: function () {
      let check
      console.log('Reflected frequency => ' + this.frequencyWall + ' : ' + parseFloat(this.enterFrequencyB))
      this.errorFrequencyB = 100 * Math.abs(this.frequencyWall - parseFloat(this.enterFrequencyB)) / this.frequencyWall
      console.log('error  ' + this.errorFrequencyB + ' %')
      // check = this.t2 === parseFloat(this.enterT2) ? 'correct' : 'not-correct'
      check = this.errorFrequencyB < 1e-2 ? 'correct' : 'not-correct'
      return check
    },
    checkedSpeedLB: function () {
      let check
      console.log('Speed Listener reflected => ' + this.speedListenerB + ' : ' + parseFloat(this.enterSpeedLB))
      this.errorSpeedLB = 100 * Math.abs(this.speedListenerB - parseFloat(this.enterSpeedLB)) / this.speedListenerB
      console.log('error  ' + this.errorSpeedLB + ' %')
      // check = this.t2 === parseFloat(this.enterT2) ? 'correct' : 'not-correct'
      check = this.errorSpeedLB < 1e-2 ? 'correct' : 'not-correct'
      return check
    },
    checkedSpeedSB: function () {
      let check
      console.log('Speed Source reflected => ' + this.speedSourceB + ' : ' + parseFloat(this.enterSpeedSB))
      this.errorSpeedSB = 100 * Math.abs(this.speedSourceB - parseFloat(this.enterSpeedSB)) / 1
      console.log('error  ' + this.errorSpeedSB + ' %')
      // check = this.t2 === parseFloat(this.enterT2) ? 'correct' : 'not-correct'
      check = this.errorSpeedSB < 1e-2 ? 'correct' : 'not-correct'
      return check
    },
    checkedFCar: function () {
      let check
      console.log('f Car => ' + this.frequencyCar + ' : ' + parseFloat(this.enterFCar))
      this.errorFCar = 100 * Math.abs(this.frequencyCar - parseFloat(this.enterFCar)) / this.frequencyCar
      console.log('error  ' + this.errorFCar + ' %')
      // check = this.t2 === parseFloat(this.enterT2) ? 'correct' : 'not-correct'
      check = this.errorFCar < 1e-2 ? 'correct' : 'not-correct'
      return check
    }
  },
  methods: {
    message: function (name) {
      return
    }
  },
  mixins: [eagle.slide]
}
</script>

<style lang='scss' scoped>
.eg-slide {
  .eg-slide-content {
    max-width: 100%;
    width: 100%;
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
  font-size: 12px;
}
</style>
