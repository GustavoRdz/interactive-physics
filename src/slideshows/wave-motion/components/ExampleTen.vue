<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A 1.50-m string of weight 0.0125 N is tied to the ceiling at its upper end, and the lower end supports a weight W. Neglect the very small variation in tension along the length of the string that is produced by the weight of the string. When you pluck the string slightly, the waves traveling up the string obey the equation
      .center.problem y(x, t) = (8.50mm)cos(172m<sup>-1</sup>x - 4830s<sup>-1</sup>t)
    p.problem Assume that the tension of the string is constant and equal to W.<br> (a) How much time does it take a pulse to travel the full length of the string?<br> (b) What is the weight W?<br> (c) How many wavelengths are on the string at any instant of time?<br> (d) What is the equation for waves traveling down the string?
    //- .center
    //-   p.solution Please do calculations and introduce your results
    //-   p.inline.data Amplitude (m)
    //-     input.center.data(:class="checkedAmplitude" v-model.number='enterAmplitude')
    //-   p.inline.data  Frequency (Hz)
    //-     input.center.data(:class="checkedFrequency" v-model.number='enterFrequency')
    //-   p.inline.data Max Acceleration (m/s<sup>2</sup>)
    //-     input.center.data(:class="checkedMaxAcc" v-model.number='enterMaxAcc')
    //-   p.inline.data Max velocity (m/s)
    //-     input.center.data(:class="checkedMaxVel" v-model.number='enterMaxVel')
    //-   p.inline.data Acceleration (m/s<sup>2</sup>) at x = {{ position }} (m);
    //-     input.center.data(:class="checkedAcc" v-model.number='enterAcc')
    //-   p.inline.data Velocity (m/s)  at x = {{ position }} (m);
    //-     input.center.data(:class="checkedVel" v-model.number='enterVel')
    //-   p.inline.data Time (s)
    //-     input.center.data(:class="checkedTime" v-model.number='enterTime')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterAmplitude: '',
      enterFrequency: '',
      enterMaxAcc: '',
      enterMaxVel: '',
      enterAcc: '',
      enterVel: '',
      enterTime: ''
    }
  },
  computed: {
    amplitude: function () {
      let max = 2000
      let min = 1000
      return (Math.floor(Math.random() * (max - min + 1)) + min) / 100
    },
    frequency: function () {
      let max = 2000
      let min = 500
      return (Math.floor(Math.random() * (max - min + 1)) + min) / 1000
    },
    position: function () {
      let max = 1500
      let min = 500
      return (Math.floor(Math.random() * (max - min + 1)) + min) / 100
    },
    position2: function () {
      let max = 1900
      let min = 1000
      return (Math.floor(Math.random() * (max - min + 1)) + min) / 100
    },
    angular: function () {
      return 2 * Math.PI * this.frequency
    },
    maxAcc: function () {
      return Math.round(1000 * Math.pow(this.angular, 2) * this.amplitude / 100) / 1000
    },
    maxVel: function () {
      return Math.round(1000 * this.angular * this.amplitude / 100) / 1000
    },
    acc: function () {
      return Math.round(1000 * Math.pow(this.angular, 2) * this.position / 100) / 1000
    },
    vel: function () {
      return Math.round(1000 * this.angular * Math.sqrt(Math.pow((this.amplitude / 100), 2) - Math.pow((this.position / 100), 2))) / 1000
    },
    time: function () {
      return Math.round(1000 * Math.acos((this.position2 / 100) / (this.amplitude / 100)) / this.angular) / 1000
    },
    crownVolume: function () {
      return Number(this.bouyant / (9.81 * 1000)).toPrecision(3)
    },
    crownDensity: function () {
      // return (this.airWeight * 1000 / this.bouyant).toPrecision(3)
      return (this.crownMass / this.crownVolume).toPrecision(3)
    },
    cheat: function () {
      return this.bouyant === this.realGoldBouyant
    },
    checkedAmplitude: function () {
      let check
      console.log('Amplitude : ' + Math.round(1000 * this.amplitude / 100) / 1000 + ' : ' + parseFloat(this.enterAmplitude))
      check = Math.round(1000 * this.amplitude / 100) / 1000 === parseFloat(this.enterAmplitude) ? 'correct' : 'not-correct'
      return check
    },
    checkedFrequency: function () {
      let check
      console.log('Frequency : ' + this.frequency + ' : ' + parseFloat(this.enterFrequency))
      check = parseFloat(this.frequency) === parseFloat(this.enterFrequency) ? 'correct' : 'not-correct'
      return check
    },
    checkedMaxAcc: function () {
      let check
      console.log('Maximum acceleration : ' + this.maxAcc + ' : ' + parseFloat(this.enterMaxAcc))
      check = parseFloat(this.maxAcc) === parseFloat(this.enterMaxAcc) ? 'correct' : 'not-correct'
      return check
    },
    checkedMaxVel: function () {
      let check
      console.log('Maximum velocity : ' + this.maxVel + ' : ' + parseFloat(this.enterMaxVel))
      check = this.maxVel === parseFloat(this.enterMaxVel) ? 'correct' : 'not-correct'
      return check
    },
    checkedAcc: function () {
      let check
      console.log('Acceleration at ' + this.position + ' : ' + this.acc + ' : ' + parseFloat(this.enterAcc))
      check = this.acc === parseFloat(this.enterAcc) ? 'correct' : 'not-correct'
      return check
    },
    checkedVel: function () {
      let check
      console.log('Velocity at x = ' + this.position + ' : ' + this.vel + ' : ' + parseFloat(this.enterVel))
      check = this.vel === parseFloat(this.enterVel) ? 'correct' : 'not-correct'
      return check
    },
    checkedTime: function () {
      let check
      console.log('Time : ' + this.time + ' : ' + parseFloat(this.enterTime))
      check = this.time === parseFloat(this.enterTime) ? 'correct' : 'not-correct'
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
