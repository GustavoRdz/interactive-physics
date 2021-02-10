<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A thin metal disk with mass {{ mass }} kg and radius {{ radius }} cm is attached at its center to a long fiber. The disk, when twisted and released, oscillates with a period of {{ period }} s. Find the torsion constant of the fiber.
    .center
        img(src='../assets/problem14.png' height="200px")
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Mass (kg)
        input.center.data(:class="checkedMass" v-model.number='enterMass')
      p.inline.data Radius (m)
        input.center.data(:class="checkedRadius" v-model.number='enterRadius')
      p.inline.data Period (s)
        input.center.data(:class="checkedPeriod" v-model.number='enterPeriod')
      p.inline.data Angular frequency (rad/s)
        input.center.data(:class="checkedAngular" v-model.number='enterAngular')
      p.inline.data Inertia moment (kgm<sup>2</sup>)
        input.center.data(:class="checkedInertia" v-model.number='enterInertia')
      p.inline.data Torsion constant (Nm/rad)
        input.center.data(:class="checkedTorsion" v-model.number='enterTorsion')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterMass: '',
      enterRadius: '',
      enterPeriod: '',
      enterAngular: '',
      enterInertia: '',
      enterTorsion: ''
    }
  },
  computed: {
    mass: function () {
      let max = 99
      let min = 75
      return (Math.floor(Math.random() * (max - min + 1)) + min) / 1000
    },
    radius: function () {
      let max = 3000
      let min = 600
      return (Math.floor(Math.random() * (max - min + 1)) + min) / 1000
    },
    period: function () {
      let max = 3000
      let min = 500
      return (Math.floor(Math.random() * (max - min + 1)) + min) / 1000
    },
    angular: function () {
      return Math.round(2000 * Math.PI / this.period) / 1000
    },
    inertia: function () {
      return Math.round(1000 * this.mass * this.radius * this.radius / 2) / 1000
    },
    torsion: function () {
      return Math.round(1000 * this.angular * this.angular * this.inertia) / 1000
    },
    checkedMass: function () {
      let check
      console.log('Mass : ' + this.mass + ' : ' + parseFloat(this.enterMass))
      check = this.mass === parseFloat(this.enterMass) ? 'correct' : 'not-correct'
      return check
    },
    checkedRadius: function () {
      let check
      console.log('Radius : ' + this.radius + ' : ' + parseFloat(this.enterRadius))
      check = parseFloat(this.radius) === parseFloat(this.enterRadius) ? 'correct' : 'not-correct'
      return check
    },
    checkedPeriod: function () {
      let check
      console.log('Period : ' + this.period + ' : ' + parseFloat(this.enterPeriod))
      check = parseFloat(this.period) === parseFloat(this.enterPeriod) ? 'correct' : 'not-correct'
      return check
    },
    checkedAngular: function () {
      let check
      console.log('Angular : ' + this.angular + ' : ' + parseFloat(this.enterAngular))
      check = parseFloat(this.angular) === parseFloat(this.enterAngular) ? 'correct' : 'not-correct'
      return check
    },
    checkedInertia: function () {
      let check
      console.log('Inertia : ' + this.inertia + ' : ' + parseFloat(this.enterInertia))
      check = parseFloat(this.inertia) === parseFloat(this.enterInertia) ? 'correct' : 'not-correct'
      return check
    },
    checkedTorsion: function () {
      let check
      console.log('Torsion : ' + this.torsion + ' : ' + parseFloat(this.enterTorsion))
      check = parseFloat(this.torsion) === parseFloat(this.enterTorsion) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserSecondOilSpeed: function () {
      let check
      console.log(this.secondOilSpeed + ' : ' + parseFloat(this.userSecondOilSpeed))
      check = parseFloat(this.secondOilSpeed) === parseFloat(this.userSecondOilSpeed) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserSecondMassFlowRate: function () {
      let check
      console.log(this.secondMassFlowRate + ' : ' + parseFloat(this.userSecondMassFlowRate))
      check = parseFloat(this.secondMassFlowRate) === parseFloat(this.userSecondMassFlowRate) ? 'correct' : 'not-correct'
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
