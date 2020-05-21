<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem An 80.0-kg hiker is trapped on a mountain ledge following a storm. A helicopter rescues the hiker by hovering above him and lowering a cable to him. The mass of the cable is 8.00 kg, and its length is 15.0 m. A sling of mass 70.0 kg is attached to the end of the cable. The hiker attaches himself to the sling, and the helicopter then accelerates upward. Terrified by hanging from the cable in midair, the hiker tries to signal the pilot by sending transverse pulses up the cable. A pulse takes 0.250 s to travel the length of the cable. What is the acceleration of the helicopter? Assume the tension in the cable is uniform.

    .center
      //- p.solution Please do calculations and introduce your results
      //- p.inline.data Initial displacement (m)
      //-   input.center.data(:class="checkedInitDisp" v-model.number='enterInitDisp')
      //- p.inline.data Initial speed (m/s)
      //-   input.center.data(:class="checkedInitSpeed" v-model.number='enterInitSpeed')
      //- p.inline.data Angular frequency (rad/s)
      //-   input.center.data(:class="checkedAngularFreq" v-model.number='enterAngularFreq')
      //- p.inline.data Period (s)
      //-   input.center.data(:class="checkedPeriod" v-model.number='enterPeriod')
      //- p.inline.data Amplitude (m)
      //-   input.center.data(:class="checkedAmplitude" v-model='enterAmplitude')
      //- p.inline.data Phase angle (rad)
      //-   input.center.data(:class="checkedPhase" v-model='enterPhase')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterInitDisp: '',
      enterInitSpeed: '',
      enterAngularFreq: '',
      enterPeriod: '',
      enterAmplitude: '',
      enterPhase: ''
    }
  },
  computed: {
    initialDisplacement: function () {
      let max = 5
      let min = 1
      return Math.round(10 * Math.floor(Math.random() * (max - min + 1)) + min) / 1000
    },
    initialSpeed: function () {
      let max = 5
      let min = 1
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min) / 10
    },
    angular: function () {
      let max = 50
      let min = 20
      return Math.round(1000 * Math.floor(Math.random() * (max - min + 1)) + min) / 1000
    },
    period: function () {
      return Math.round(1000 * 2 * Math.PI / this.angular) / 1000
    },
    amplitude: function () {
      return Math.round(1000 * Math.sqrt(Math.pow(this.initialDisplacement, 2) + Math.pow(this.initialSpeed / this.angular, 2))) / 1000
    },
    phase: function () {
      return Math.round(1000 * Math.atan2(-this.initialSpeed, this.angular * this.initialDisplacement)) / 1000
    },
    checkedInitDisp: function () {
      let check
      console.log('Initial displacement => ' + this.initialDisplacement + ' : ' + parseFloat(this.enterInitDisp))
      check = this.initialDisplacement === parseFloat(this.enterInitDisp) ? 'correct' : 'not-correct'
      return check
    },
    checkedInitSpeed: function () {
      let check
      console.log('Initial speed => ' + this.initialSpeed + ' : ' + parseFloat(this.enterInitSpeed))
      check = this.initialSpeed === parseFloat(this.enterInitSpeed) ? 'correct' : 'not-correct'
      return check
    },
    checkedAngularFreq: function () {
      let check
      console.log('Angular frequency => ' + this.angular + ' : ' + parseFloat(this.enterAngularFreq))
      check = this.angular === parseFloat(this.enterAngularFreq) ? 'correct' : 'not-correct'
      return check
    },
    checkedPeriod: function () {
      let check
      console.log('Period => ' + this.period + ' : ' + parseFloat(this.enterPeriod))
      check = this.period === parseFloat(this.enterPeriod) ? 'correct' : 'not-correct'
      return check
    },
    checkedAmplitude: function () {
      let check
      console.log('Amplitude => ' + this.amplitude + ' : ' + parseFloat(this.enterAmplitude))
      check = this.amplitude === parseFloat(this.enterAmplitude) ? 'correct' : 'not-correct'
      return check
    },
    checkedPhase: function () {
      let check
      console.log('Phase angle => ' + this.phase + ' : ' + parseFloat(this.enterPhase))
      check = this.phase === parseFloat(this.enterPhase) ? 'correct' : 'not-correct'
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
