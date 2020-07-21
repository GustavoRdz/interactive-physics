<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A surveyor uses a steel tape that is exactly {{ tapeLength }}.000 m long at a temperature of {{ calibrationTemperature }}&#x00B0;C. The marking on the tape are calibrated for this temperature.
    p.problem (a) What is the length of the tape when the temperature is {{ measurementTemperature }}&#x00B0;C?
    p.problem (b) When it is {{ measurementTemperature }}&#x00B0;C, the surveyor uses the tape to measure a distance. The value that she reads off the tape is {{ measurement }} m. What is the actual distance?
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data &#x394;T (&#x00B0;C)
        input.center.data(:class="checkedUserDT" v-model.number='userDT')
      p.inline.data &#x394;L (m)
        input.center.data(:class="checkedUserDL" v-model.number='userDL')
      p.inline.data (a) L (m)
        input.center.data(:class="checkedUserL" v-model.number='userL')
      p.inline.data L/L<sub>0</sub> (.00000)
        input.center.data(:class="checkedUserLL" v-model.number='userLL')
      p.inline.data (b) L (m)
        input.center.data(:class="checkedUserLb" v-model.number='userLb')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      userDT: '',
      userDL: '',
      userL: '',
      userLL: '',
      userLb: '',
      steelAlpha: 1.2e-5
    }
  },
  computed: {
    tapeLength: function () {
      let max = 6
      let min = 3
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min) * 10
    },
    calibrationTemperature: function () {
      let max = 28
      let min = 20
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min)
    },
    measurementTemperature: function () {
      let max = 40
      let min = 30
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min)
    },
    measurement: function () {
      let max = 44000
      let min = 25000
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min) / 1000
    },
    DT: function () {
      return this.measurementTemperature - this.calibrationTemperature
    },
    DL: function () {
      return Math.round(1000 * this.steelAlpha * this.tapeLength * this.DT) / 1000
    },
    L: function () {
      return Math.round(1000 * (this.tapeLength + this.DL)) / 1000
    },
    LL: function () {
      return Math.round(100000 * this.L / this.tapeLength) / 100000
    },
    Lb: function () {
      return Math.round(1000 * this.LL * this.measurement) / 1000
    },
    checkedUserT1Celsius: function () {
      let check
      console.log(this.T1Celsius + ' : ' + parseFloat(this.userT1Celsius))
      check = parseFloat(this.T1Celsius) === parseFloat(this.userT1Celsius) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserT2Celsius: function () {
      let check
      console.log(this.T2Celsius + ' : ' + parseFloat(this.userT2Celsius))
      check = parseFloat(this.T2Celsius) === parseFloat(this.userT2Celsius) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserDT: function () {
      let check
      console.log(this.DT + ' : ' + parseFloat(this.userDT))
      check = parseFloat(this.DT) === parseFloat(this.userDT) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserDL: function () {
      let check
      console.log(this.DL + ' : ' + parseFloat(this.userDL))
      check = parseFloat(this.DL) === parseFloat(this.userDL) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserL: function () {
      let check
      console.log(this.L + ' : ' + parseFloat(this.userL))
      check = parseFloat(this.L) === parseFloat(this.userL) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserLL: function () {
      let check
      console.log(this.LL + ' : ' + parseFloat(this.userLL))
      check = parseFloat(this.LL) === parseFloat(this.userLL) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserLb: function () {
      let check
      console.log(this.Lb + ' : ' + parseFloat(this.userLb))
      check = parseFloat(this.Lb) === parseFloat(this.userLb) ? 'correct' : 'not-correct'
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
    // FIGURE AND CAPTIONS
    .figure {
      p {
        font-size: 0.7em;
        margin-top: 2em;
        margin-bottom: 0;
        color: #555;
      }
      width: 80%;
      margin-left: 10%;
    }
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
  margin: 15px 20px 15px 20px;
  font-size: 30px;
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
</style>
