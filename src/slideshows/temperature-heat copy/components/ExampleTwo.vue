<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A surveyor uses a steel tape that is exactly {{ tapeLength }}.000 m long at a temperature of {{ calibrationTemperature }}&#x00B0;C. The marking on the tape are calibrated for this temperature.
    p.problem (a) What is the length of the tape when the temperature is {{ measurementTemperature }}&#x00B0;C?
    p.problem (b) When it is {{ measurementTemperature }}&#x00B0;C, the surveyor uses the tape to measure a distance. The value that she reads off the tape is {{ measurement }} m. What is the actual distance?
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data &#x394;T (&#x00B0;C)
        input.center.data(:class="checkedDT" v-model.number='enterDT')
        <span class="error" v-if="errorDT">[e: {{ errorDT.toPrecision(2) }}%]</span>
      p.inline.data &#x394;L (m)
        input.center.data(:class="checkedDL" v-model.number='enterDL')
        <span class="error" v-if="errorDL">[e: {{ errorDL.toPrecision(2) }}%]</span>
      p.inline.data (a) L (m)
        input.center.data(:class="checkedL" v-model.number='enterL')
        <span class="error" v-if="errorL">[e: {{ errorL.toPrecision(2) }}%]</span>
      p.inline.data L/L<sub>0</sub>
        input.center.data(:class="checkedLL" v-model.number='enterLL')
        <span class="error" v-if="errorLL">[e: {{ errorLL.toPrecision(2) }}%]</span>
      p.inline.data (b) L (m)
        input.center.data(:class="checkedLb" v-model.number='enterLb')
        <span class="error" v-if="errorLb">[e: {{ errorLb.toPrecision(2) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterDT: '',
      errorDT: 0,
      enterDL: '',
      errorDL: 0,
      enterL: '',
      errorL: 0,
      enterLL: '',
      errorLL: 0,
      enterLb: '',
      errorLb: 0,
      steelAlpha: 1.1e-5
    }
  },
  computed: {
    tapeLength: function () {
      console.clear()
      let max = 6
      let min = 3
      return Math.floor(Math.random() * (max - min + 1) + min) * 10
    },
    calibrationTemperature: function () {
      let max = 28
      let min = 20
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    measurementTemperature: function () {
      let max = 40
      let min = 30
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    measurement: function () {
      let max = 44000
      let min = 25000
      return Math.floor(Math.random() * (max - min + 1) + min) / 1000
    },
    DT: function () {
      return this.measurementTemperature - this.calibrationTemperature
    },
    DL: function () {
      return this.steelAlpha * this.tapeLength * this.DT
    },
    L: function () {
      return this.tapeLength + this.DL
    },
    LL: function () {
      return this.L / this.tapeLength
    },
    Lb: function () {
      return this.LL * this.measurement
    },
    checkedDT: function () {
      this.errorDT = this.errorRelative('DT => ', this.DT, parseFloat(this.enterDT))
      return this.errorDT < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedDL: function () {
      this.errorDL = this.errorRelative('DL => ', this.DL, parseFloat(this.enterDL))
      return this.errorDL < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedL: function () {
      this.errorL = this.errorRelative('L => ', this.L, parseFloat(this.enterL))
      return this.errorL < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedLL: function () {
      this.errorLL = this.errorRelative('LL => ', this.LL, parseFloat(this.enterLL))
      return this.errorLL < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedLb: function () {
      this.errorLb = this.errorRelative('Lb => ', this.Lb, parseFloat(this.enterLb))
      return this.errorLb < 1e-1 ? 'correct' : 'not-correct'
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
