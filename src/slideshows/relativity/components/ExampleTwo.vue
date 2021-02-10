<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A man on the moon observes two spaceships, A and B that are heading toward him in opposite directions (A from the {{ side }}) and at a respective speeds of {{ Math.abs(speedA) }}c and {{ Math.abs(speedB) }}c. Calculate the following velocities
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Velocity of A from the moon (in c)
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
    speedA: function () {
      let max = 100
      let min = 50
      this.direction = (Math.round(Math.random()) - 0.5) * 2
      this.side = this.direction === 1 ? 'left' : 'rigth'
      return (Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min) / 100) * this.direction
    },
    speedB: function () {
      let max = 50
      let min = 20
      return (Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min) / 100) * (-this.direction)
    },
    speedAfromB: function () {
      return Math.round(1000 * (this.speedA - this.speedB)) / 1000
    },
    speedBfromA: function () {
      // v2 = v1 -v
      return Math.round(1000 * (this.speedB - this.speedA)) / 1000
    },
    // electronAlpha: function () {
    //   return -this.electronAlphaSpeed
    // },
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
      console.log('B from A => ' + this.speedBfromA + ' : ' + parseFloat(this.enterBA))
      check = this.speedBfromA === parseFloat(this.enterBA) ? 'correct' : 'not-correct'
      return check
    },
    checkedAB: function () {
      let check
      console.log('A from B => ' + this.speedAfromB + ' : ' + parseFloat(this.enterAB))
      check = this.speedAfromB === parseFloat(this.enterAB) ? 'correct' : 'not-correct'
      return check
    },
    checkedMoonA: function () {
      let check
      console.log('M from A => ' + this.speedA * this.direction + ' : ' + parseFloat(this.enterMoonA))
      check = this.speedA * this.direction === parseFloat(this.enterMoonA) ? 'correct' : 'not-correct'
      return check
    },
    checkedMoonB: function () {
      let check
      console.log('M from B => ' + this.speedB * this.direction + ' : ' + parseFloat(this.enterMoonB))
      check = this.speedB * this.direction === parseFloat(this.enterMoonB) ? 'correct' : 'not-correct'
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
