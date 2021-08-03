<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem You place a small piece of ice in your mouth. Eventually, the water all converts from ice at T1 = 32.00&#x00B0;F  to body temperature, T2=98.60&#x00B0;F. Express the temperatures in both Celsius degrees and kelvins, and find &#x0394;T = T2 - T1 in the three scales.
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data T1 (celsius)
        input.center.data(:class="checkedT1Celsius" v-model.number='enterT1Celsius')
        <span class="error" v-if="errorT1Celsius">[e: {{ errorT1Celsius.toPrecision(2) }}%]</span>
      p.inline.data T2 (celsius)
        input.center.data(:class="checkedT2Celsius" v-model.number='enterT2Celsius')
        <span class="error" v-if="errorT2Celsius">[e: {{ errorT2Celsius.toPrecision(2) }}%]</span>
      p.inline.data T1 (kelvin)
        input.center.data(:class="checkedT1Kelvin" v-model.number='enterT1Kelvin')
        <span class="error" v-if="errorT1Kelvin">[e: {{ errorT1Kelvin.toPrecision(2) }}%]</span>
      p.inline.data T2 (kelvin)
        input.center.data(:class="checkedT2Kelvin" v-model.number='enterT2Kelvin')
        <span class="error" v-if="errorT2Kelvin">[e: {{ errorT2Kelvin.toPrecision(2) }}%]</span>
      p.inline.data &#x394;T (celcius)
        input.center.data(:class="checkedDTCelsius" v-model.number='enterDTCelsius')
        <span class="error" v-if="errorDTCelsius">[e: {{ errorDTCelsius.toPrecision(2) }}%]</span>
      p.inline.data &#x394;T (kelvin)
        input.center.data(:class="checkedDTKelvin" v-model.number='enterDTKelvin')
        <span class="error" v-if="errorDTKelvin">[e: {{ errorDTKelvin.toPrecision(2) }}%]</span>
      p.inline.data &#x394;T (Fahrenheit)
        input.center.data(:class="checkedDTFahrenheit" v-model.number='enterDTFahrenheit')
        <span class="error" v-if="errorDTFahrenheit">[e: {{ errorDTFahrenheit.toPrecision(2) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      T1Fahrenheit: 32,
      T2Fahrenheit: 98.6,
      enterT1Celsius: '',
      errorT1Celsius: 0,
      enterT2Celsius: '',
      errorT2Celsius: 0,
      enterT1Kelvin: '',
      errorT1Kelvin: 0,
      enterT2Kelvin: '',
      errorT2Kelvin: 0,
      enterDTCelsius: '',
      errorDTCelsius: 0,
      enterDTKelvin: '',
      errorDTKelvin: 0,
      enterDTFahrenheit: '',
      errorDTFahrenheit: 0
    }
  },
  computed: {
    T1Celsius: function () {
      console.clear()
      return Math.round(100 * 5 * (parseFloat(this.T1Fahrenheit) - 32) / 9) / 100
    },
    T2Celsius: function () {
      return Math.round(100 * 5 * (parseFloat(this.T2Fahrenheit) - 32) / 9) / 100
    },
    T1Kelvin: function () {
      return Math.round(100 * (parseFloat(this.T1Celsius) + 273.15)) / 100
    },
    T2Kelvin: function () {
      return Math.round(100 * (parseFloat(this.T2Celsius) + 273.15)) / 100
    },
    DTCelsius: function () {
      return this.T2Celsius - this.T1Celsius
    },
    DTKelvin: function () {
      return this.T2Kelvin - this.T1Kelvin
    },
    DTFahrenheit: function () {
      return this.T2Fahrenheit - this.T1Fahrenheit
    },
    checkedT1Celsius: function () {
      this.errorT1Celsius = this.errorRelative('T1 celsius => ', this.T1Celsius, parseFloat(this.enterT1Celsius))
      return this.errorT1Celsius < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedT2Celsius: function () {
      this.errorT2Celsius = this.errorRelative('T2 celsius => ', this.T2Celsius, parseFloat(this.enterT2Celsius))
      return this.errorT2Celsius < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedT1Kelvin: function () {
      this.errorT1Kelvin = this.errorRelative('T1 Kelvin => ', this.T1Kelvin, parseFloat(this.enterT1Kelvin))
      return this.errorT1Kelvin < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedT2Kelvin: function () {
      this.errorT2Kelvin = this.errorRelative('T2 Kelvin => ', this.T2Kelvin, parseFloat(this.enterT2Kelvin))
      return this.errorT2Kelvin < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedDTCelsius: function () {
      this.errorDTCelsius = this.errorRelative('ΔT celsius => ', this.DTCelsius, parseFloat(this.enterDTCelsius))
      return this.errorDTCelsius < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedDTKelvin: function () {
      this.errorDTKelvin = this.errorRelative('ΔT Kelvin => ', this.DTKelvin, parseFloat(this.enterDTKelvin))
      return this.errorDTKelvin < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedDTFahrenheit: function () {
      this.errorDTFahrenheit = this.errorRelative('ΔT Fahrenheit => ', this.DTFahrenheit, parseFloat(this.enterDTFahrenheit))
      return this.errorDTFahrenheit < 1e-1 ? 'correct' : 'not-correct'
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
