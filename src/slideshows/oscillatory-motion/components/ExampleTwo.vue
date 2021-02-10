<template lang="pug">
  eg-transition(:enter='enter', :leave='leave')
    .eg-slide-content
      p.problem A spring is mounted horizontally, with its left end fixed. A spring balance attached to the free end and pulled toward the right indicates that the stretching force is proportional to the displacement, and a force of {{ force }} N causes a displacement of {{ displacement }} m. We replace the spring balance with a {{ mass }}-kg glider, pull it {{ pullDistance }} m to the right along a frictionless air track, and release it from rest. (a) Find the force constant k of the spring. (b) Find the angular frequency &omega;, frequency <strong>f</strong>, and period <strong>T</strong> of the resulting oscillation.
      .center
        p.solution Please do calculations and introduce your results
        p.inline.data Force (N)
          input.center.data(:class="checkedForce" v-model.number='enterForce')
        p.inline.data Displacement (m)
          input.center.data(:class="checkedDispl" v-model.number='enterDisp')
        p.inline.data Mass (Kg)
          input.center.data(:class="checkedMass" v-model.number='enterMass')
        p.inline.data Pull distance (m)
          input.center.data(:class="checkedPullDist" v-model='enterPull')
        p.inline.data Elastic constant (N/m)
          input.center.data(:class="checkedElasticConst" v-model='enterElastic')
        p.inline.data Angular frequency (rad/s)
          input.center.data(:class="checkedAngularFreq" v-model='enterAngular')
        p.inline.data Frequency (Hz)
          input.center.data(:class="checkedFrequency" v-model='enterFreq')
        p.inline.data Period (s)
          input.center.data(:class="checkedPeriod" v-model='enterPeriod')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterForce: '',
      enterDisp: '',
      enterMass: '',
      enterPull: '',
      enterElastic: '',
      enterAngular: '',
      enterFreq: '',
      enterPeriod: ''
    }
  },
  computed: {
    force: function () {
      let max = 10
      let min = 5
      return Math.floor(1000 * (Math.random() * (max - min + 1) + min)) / 1000
    },
    displacement: function () {
      let max = 10
      let min = 2
      return Math.floor(10 * (Math.random() * (max - min + 1) + min)) / 1000
    },
    mass: function () {
      let max = 8
      let min = 2
      return Math.floor(100 * Math.random() * (max - min + 1) + min) / 1000
    },
    pullDistance: function () {
      let max = 8
      let min = 2
      return Math.floor(10 * Math.random() * (max - min + 1) + min) / 1000
    },
    elastic: function () {
      return Math.round(1000 * (this.force / this.displacement)) / 1000
    },
    frequency: function () {
      return Math.round(1000 * (this.angular / (2 * Math.PI))) / 1000
    },
    angular: function () {
      return Math.round(1000 * Math.sqrt(this.elastic / this.mass)) / 1000
    },
    period: function () {
      return Math.round(1000 * (1 / this.frequency)) / 1000
    },
    checkedForce: function () {
      let check
      console.log('Force => ' + this.force + ' : ' + parseFloat(this.enterForce))
      check = this.force === parseFloat(this.enterForce) ? 'correct' : 'not-correct'
      return check
    },
    checkedDispl: function () {
      let check
      console.log('Displacement => ' + this.displacement + ' : ' + parseFloat(this.enterDisp))
      check = this.displacement === parseFloat(this.enterDisp) ? 'correct' : 'not-correct'
      return check
    },
    checkedMass: function () {
      let check
      console.log('Mass => ' + this.mass + ' : ' + parseFloat(this.enterMass))
      check = this.mass === parseFloat(this.enterMass) ? 'correct' : 'not-correct'
      return check
    },
    checkedPullDist: function () {
      let check
      console.log('Pull Distance => ' + this.pullDistance + ' : ' + parseFloat(this.enterPull))
      check = parseFloat(this.enterPull) === this.pullDistance ? 'correct' : 'not-correct'
      return check
    },
    checkedElasticConst: function () {
      let check
      console.log('Elastic constant => ' + this.elastic + ' : ' + parseFloat(this.enterElastic))
      check = this.elastic === parseFloat(this.enterElastic) ? 'correct' : 'not-correct'
      return check
    },
    checkedAngularFreq: function () {
      let check
      console.log('Angular Frequency => ' + this.angular + ' : ' + parseFloat(this.enterAngular))
      check = this.angular === parseFloat(this.enterAngular) ? 'correct' : 'not-correct'
      return check
    },
    checkedFrequency: function () {
      let check
      console.log('frequency => ' + this.frequency + ' : ' + parseFloat(this.enterFreq))
      check = this.frequency === parseFloat(this.enterFreq) ? 'correct' : 'not-correct'
      return check
    },
    checkedPeriod: function () {
      let check
      console.log('Period => ' + this.period + ' : ' + parseFloat(this.enterPeriod))
      check = this.period === parseFloat(this.enterPeriod) ? 'correct' : 'not-correct'
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
  margin: 5px 5px 5px 5px;
  font-size: 30px;
  color: blue;
  width: 95%;
}

.solution {
  margin: 5px 5px 5px 5px;
  font-size: 20px;
  color: red;
}

.not-correct {
  background: #fa4408;
}
.correct {
  background: #80c080;
}
</style>
