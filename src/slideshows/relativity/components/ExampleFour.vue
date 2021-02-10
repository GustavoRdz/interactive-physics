<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem The pilot on a spaceship (A) that moves at a velocity of {{ Math.abs(speedA) }} c respect to a radar on Earth, the radar operators detects another spaceship (B) that moves toward the first spacecraft at a velocity of {{ Math.abs(speedB) }}  c. Suppose A moves is to the {{ side }} and B in opposite direction, Determine:
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Velocity of A from the radar (in c)
        input.center.data(:class="checkedARadar" v-model.number='enterARadar')
      p.inline.data Velocity of B from the radar (in c)
        input.center.data(:class="checkedBRadar" v-model.number='enterBRadar')
      p.inline.data Velocity of B from A (in c)
        input.center.data(:class="checkedBA" v-model.number='enterBA')
      p.inline.data Velocity of A from B (in c)
        input.center.data(:class="checkedAB" v-model='enterAB')
      p.inline.data Velocity of the radar from A (in c)
        input.center.data(:class="checkedRadarA" v-model='enterRadarA')
      p.inline.data Velocity of the radar from B (in c)
        input.center.data(:class="checkedRadarB" v-model='enterRadarB')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterARadar: '',
      enterBRadar: '',
      enterBA: '',
      enterAB: '',
      enterRadarA: '',
      enterRadarB: '',
      direction: '',
      side: ''
    }
  },
  computed: {
    speedA: function () {
      let max = 95
      let min = 50
      this.direction = (Math.round(Math.random()) - 0.5) * 2
      this.side = this.direction === 1 ? 'rigth' : 'left'
      return (Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min) / 100) * this.direction
    },
    speedB: function () {
      let max = 95
      let min = 50
      return (Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min) / 100) * -this.direction
    },
    speedAB: function () {
      return Math.floor(((this.speedA - this.speedB) / (1 - (this.speedA * this.speedB))) * 100) / 100
    },
    speedBA: function () {
      return -this.speedAB
    },
    checkedARadar: function () {
      let check
      console.log('A from M => ' + this.speedA + ' : ' + parseFloat(this.enterARadar))
      check = this.speedA === parseFloat(this.enterARadar) ? 'correct' : 'not-correct'
      return check
    },
    checkedBRadar: function () {
      let check
      console.log('B from M => ' + this.speedB + ' : ' + parseFloat(this.enterBRadar))
      check = this.speedB === parseFloat(this.enterBRadar) ? 'correct' : 'not-correct'
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
    checkedRadarA: function () {
      let check
      console.log('M from A => ' + this.speedA * -this.direction + ' : ' + parseFloat(this.enterRadarA))
      check = this.speedA * -this.direction === parseFloat(this.enterRadarA) ? 'correct' : 'not-correct'
      return check
    },
    checkedRadarB: function () {
      let check
      console.log('M from B => ' + this.speedB * -this.direction + ' : ' + parseFloat(this.enterRadarB))
      check = this.speedB * -this.direction === parseFloat(this.enterRadarB) ? 'correct' : 'not-correct'
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
