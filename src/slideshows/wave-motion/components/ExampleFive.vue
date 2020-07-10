<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A sinusoidal wave traveling in the negative x direction (to the left) has an amplitude of 20.0 cm, a wavelength of 35.0 cm, and a frequency of 12.0 Hz. The transverse position of an element of the medium at t = 0, x = 0 is y = 23.00 cm, and the element has a positive velocity here. We wish to find an expression for the wave function describing this wave.<br> (a) Sketch the wave at t = 0.<br> (b) Find the angular wave number k from the wavelength.<br> (c) Find the period T from the frequency. Find<br> (d) the angular frequency v and<br> (e) the wave speed v.<br> (f) From the information about t = 0, find the phase constant &phi;.<br> (g) Write an expression for the wave function y(x, t).
    //- .center
    //-   p.solution Please do calculations and introduce your results
    //-   p.inline.data Period (s)
    //-     input.center.data(:class="checkedPeriod" v-model.number='enterPeriod')
    //-   p.inline.data Amplitude (m)
    //-     input.center.data(:class="checkedAmplitude" v-model.number='enterAmplitude')
    //-   p.inline.data Angular frequency (rad/s)
    //-     input.center.data(:class="checkedAngular" v-model.number='enterAngular')
    //-   p.inline.data (a) time (s)
    //-     input.center.data(:class="checkedHalf" v-model.number='enterHalf')
    //-   p.inline.data (b) time (s)
    //-     input.center.data(:class="checkedSecondHalf" v-model='enterSecondHalf')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterPeriod: '',
      enterAmplitude: '',
      enterAngular: '',
      enterHalf: '',
      enterSecondHalf: ''
    }
  },
  computed: {
    period: function () {
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
      return Math.round(2000 * Math.PI / this.period) / 1000
    },
    half: function () {
      return Math.round(1000 * this.period / 6) / 1000
    },
    secondHalf: function () {
      return Math.round(1000 * ((this.period / 4) - this.half)) / 1000
    },
    checkedPeriod: function () {
      let check
      console.log('Period : ' + this.period + ' : ' + parseFloat(this.enterPeriod))
      check = this.period === parseFloat(this.enterPeriod) ? 'correct' : 'not-correct'
      return check
    },
    checkedAmplitude: function () {
      let check
      console.log('Amplitude : ' + this.amplitude + ' : ' + parseFloat(this.enterAmplitude))
      check = this.amplitude === parseFloat(this.enterAmplitude) ? 'correct' : 'not-correct'
      return check
    },
    checkedAngular: function () {
      let check
      console.log('Angular frequency : ' + this.angular + ' : ' + parseFloat(this.enterAngular))
      check = this.angular === parseFloat(this.enterAngular) ? 'correct' : 'not-correct'
      return check
    },
    checkedHalf: function () {
      let check
      console.log('(a) time : ' + this.half + ' : ' + parseFloat(this.enterHalf))
      check = this.half === parseFloat(this.enterHalf) ? 'correct' : 'not-correct'
      return check
    },
    checkedSecondHalf: function () {
      let check
      console.log(' (b) time: ' + this.secondHalf + ' : ' + parseFloat(this.enterSecondHalf))
      check = this.secondHalf === parseFloat(this.enterSecondHalf) ? 'correct' : 'not-correct'
      return check
    }
  },
  methods: {
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
  width: 95%;
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
