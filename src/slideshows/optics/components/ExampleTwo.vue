<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A laser beam is incident on a prism perpendicular to one of its faces as shown in figure. The transmitted beam that exits the hypotenuse of the prism makes an angle of {{ angle }}º with the direction of the incident beam. Find the index of refraction of the prism.
    .center
      img(src='../assets/example2.png' width="300px")
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Incidence angle (degrees)
        input.center.data(:class="checkedAMoon" v-model.number='enterAMoon')
      p.inline.data Velocity of B from the moon (in c)
        input.center.data(:class="checkedBMoon" v-model.number='enterBMoon')
      p.inline.data Velocity of B from A (in c)
        input.center.data(:class="checkedBA" v-model.number='enterBA')
      p.inline.data Velocity of A from B (in c)
        input.center.data(:class="checkedAB" v-model='enterAB')
      p.inline.data Velocity of the moon from A (in c)
        input.center.data(:class="checkedMoonA" v-model='enterMoonA')
      p.inline.data Velocity of the moon from B (in c)
        input.center.data(:class="checkedMoonB" v-model='enterMoonB')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterAMoon: '',
      enterBMoon: '',
      enterBA: '',
      enterAB: '',
      enterMoonA: '',
      enterMoonB: '',
      direction: '',
      side: ''
    }
  },
  computed: {
    angle: function () {
      let max = 30
      let min = 10
      return (Math.round(100 * Math.floor(Math.random() * (max - min + 1)) + min) / 100)
    },
    speedAB: function () {
      return this.speedB - this.speedA
    },
    speedBA: function () {
      // v2 = v1 -v
      return this.speedA - this.speedB
    },
    electronAlpha: function () {
      return -this.electronAlphaSpeed
    },
    checkedAMoon: function () {
      let check
      console.log('A from M => ' + this.speedA + ' : ' + parseFloat(this.enterAMoon))
      check = this.speedA === parseFloat(this.enterAMoon) ? 'correct' : 'not-correct'
      return check
    },
    checkedBMoon: function () {
      let check
      console.log('B from M => ' + this.speedB + ' : ' + parseFloat(this.enterBMoon))
      check = this.speedB === parseFloat(this.enterBMoon) ? 'correct' : 'not-correct'
      return check
    },
    checkedBA: function () {
      let check
      console.log('B from A => ' + this.speedBA + ' : ' + parseFloat(this.enterBA))
      check = this.speedBA === parseFloat(this.enterBA) ? 'correct' : 'not-correct'
      return check
    },
    checkedAB: function () {
      let check
      console.log('A from B => ' + this.speedAB + ' : ' + parseFloat(this.enterAB))
      check = this.speedAB === parseFloat(this.enterAB) ? 'correct' : 'not-correct'
      return check
    },
    checkedMoonA: function () {
      let check
      console.log('M from A => ' + this.speedA * -this.direction + ' : ' + parseFloat(this.enterMoonA))
      check = this.speedA * -this.direction === parseFloat(this.enterMoonA) ? 'correct' : 'not-correct'
      return check
    },
    checkedMoonB: function () {
      let check
      console.log('M from B => ' + this.speedB * -this.direction + ' : ' + parseFloat(this.enterMoonB))
      check = this.speedB * -this.direction === parseFloat(this.enterMoonB) ? 'correct' : 'not-correct'
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
