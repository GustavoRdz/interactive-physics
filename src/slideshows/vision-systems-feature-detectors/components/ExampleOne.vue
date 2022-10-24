<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem You place a small piece of ice in your mouth. Eventually, the water all converts from ice at T1 = 32.00&#x00B0;F  to body temperature, T2=98.60&#x00B0;F. Express the temperatures in both Celsius degrees and kelvins, and find &#x0394;T = T2 - T1 in the three scales.
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data T1 (celsius)
        input.center.data(:class="checkedUserT1Celsius" v-model.number='userT1Celsius')
      p.inline.data T2 (celsius)
        input.center.data(:class="checkedUserT2Celsius" v-model.number='userT2Celsius')
      p.inline.data T1 (kelvin)
        input.center.data(:class="checkedUserT1Kelvin" v-model.number='userT1Kelvin')
      p.inline.data T2 (kelvin)
        input.center.data(:class="checkedUserT2Kelvin" v-model.number='userT2Kelvin')
      p.inline.data &#x394;T (celcius)
        input.center.data(:class="checkedUserDTCelsius" v-model.number='userDTCelsius')
      p.inline.data &#x394;T (kelvin)
        input.center.data(:class="checkedUserDTKelvin" v-model.number='userDTKelvin')
      p.inline.data &#x394;T (Fahrenheit)
        input.center.data(:class="checkedUserDTFahrenheit" v-model.number='userDTFahrenheit')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      T1Fahrenheit: 32,
      T2Fahrenheit: 98.6,
      userT1Celsius: '',
      userT2Celsius: '',
      userT1Kelvin: '',
      userT2Kelvin: '',
      userDTCelsius: '',
      userDTKelvin: '',
      userDTFahrenheit: ''
    }
  },
  computed: {
    T1Celsius: function () {
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
    checkedUserT1Kelvin: function () {
      let check
      console.log(this.T1Kelvin + ' : ' + parseFloat(this.userT1Kelvin))
      check = parseFloat(this.T1Kelvin) === parseFloat(this.userT1Kelvin) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserT2Kelvin: function () {
      let check
      console.log(this.T2Kelvin + ' : ' + parseFloat(this.userT2Kelvin))
      check = parseFloat(this.T2Kelvin) === parseFloat(this.userT2Kelvin) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserDTCelsius: function () {
      let check
      console.log(this.DTCelsius + ' : ' + parseFloat(this.userDTCelsius))
      check = parseFloat(this.DTCelsius) === parseFloat(this.userDTCelsius) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserDTKelvin: function () {
      let check
      console.log(this.DTKelvin + ' : ' + parseFloat(this.userDTKelvin))
      check = parseFloat(this.DTKelvin) === parseFloat(this.userDTKelvin) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserDTFahrenheit: function () {
      let check
      console.log(this.DTFahrenheit + ' : ' + parseFloat(this.userDTFahrenheit))
      check = parseFloat(this.DTFahrenheit) === parseFloat(this.userDTFahrenheit) ? 'correct' : 'not-correct'
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
