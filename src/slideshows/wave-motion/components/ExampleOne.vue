<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A sinusoidal wave traveling in the positive x direction has an amplitude of 15.0 cm, a wavelength of 40.0 cm, and a frequency of 8.00 Hz. The vertical position of an element of the medium at t = 0 and x = 0 is also 15.0 cm as shown in Figure (a) Find the wave number k, period T, angular frequency v, and speed v of the wave. (b) Determine the phase constant &phi; and write a general expression for the wave function.
    .center
      //- p.solution Please do calculations and introduce your results
      //- p.inline.data Frequency: f (Hz)
      //-   input.center.data(:class="checkedFrequency" v-model.number='freq')
      //- p.inline.data Period:T (s)
      //-   input.center.data(:class="checkedPeriod" v-model.number='peri')
      //- p.inline.data Angular frequency: &omega; (rad/s)
      //-   input.center.data(:class="checkedAngularFreq" v-model.number='angular')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      freq: '',
      peri: '',
      angular: ''
    }
  },
  computed: {
    frequency: function () {
      let max = 8
      let min = 5
      return Math.round(1000 * ((Math.random() * (max - min + 1)) + min)) / 1000
    },
    period: function () {
      return Math.round((1 / this.frequency) * 1000) / 1000
    },
    angularFrequency: function () {
      return Math.round(2 * Math.PI * this.frequency * 1000) / 1000
    },
    errorAngular: function () {
      return Math.abs(this.angular - this.angularFrequency) / this.angularFrequency
    },
    checkedFrequency: function () {
      let check
      console.log('frequency => ' + this.frequency + ' : ' + parseFloat(this.freq))
      check = this.frequency === parseFloat(this.freq) ? 'correct' : 'not-correct'
      return check
    },
    checkedPeriod: function () {
      let check
      console.log('Period => ' + this.period + ' : ' + parseFloat(this.peri))
      check = this.period === parseFloat(this.peri) ? 'correct' : 'not-correct'
      return check
    },
    checkedAngularFreq: function () {
      let check
      console.log('Angular frequency => ' + this.angularFrequency + ' : ' + parseFloat(this.angular))
      check = this.angularFrequency === parseFloat(this.angular) ? 'correct' : 'not-correct'
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
