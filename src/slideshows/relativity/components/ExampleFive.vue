<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A particle moves at a speed of {{ Math.abs(speed1) }} c making an anlge of {{ angle }}º from the +x axis. What is the magnitud and direction of the particle for an observer moving horizontally to the {{ side }} with a speed of  {{ Math.abs(speed) }} c?
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Speed measured from S<sub>1</sub> (in c)
        input.center.data(:class="checkedV1" v-model.number='enterV1')
      p.inline.data Speed between frames (in c)
        input.center.data(:class="checkedV" v-model.number='enterV')
      p.inline.data Angle from S<sub>1</sub> (in degrees)
        input.center.data(:class="checkedTheta1" v-model.number='enterTheta1')
      p.inline.data Speed S<sub>1x</sub> (in c)
        input.center.data(:class="checkedV1x" v-model.number='enterV1x')
      p.inline.data Speed S<sub>1y</sub> (in c)
        input.center.data(:class="checkedV1y" v-model.number='enterV1y')
      p.inline.data Speed S<sub>2x</sub> (in c)
        input.center.data(:class="checkedV2x" v-model.number='enterV2x')
      p.inline.data Speed S<sub>2y</sub> (in c)
        input.center.data(:class="checkedV2y" v-model.number='enterV2y')
      p.inline.data Speed from S<sub>2</sub> (in c)
        input.center.data(:class="checkedV2" v-model.number='enterV2')
      p.inline.data Angle from S<sub>2</sub> (in degrees)
        input.center.data(:class="checkedTheta2" v-model='enterTheta2')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterV1: '',
      enterTheta1: '',
      enterV1x: '',
      enterV1y: '',
      enterV2x: '',
      enterV2y: '',
      enterV: '',
      enterV2: '',
      enterTheta2: '',
      direction: '',
      side: ''
    }
  },
  computed: {
    speed1: function () {
      let max = 80
      let min = 50
      this.direction = (Math.round(Math.random()) - 0.5) * 2
      this.side = this.direction === 1 ? 'rigth' : 'left'
      return (Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min) / 100)
    },
    angle: function () {
      let max = 70
      let min = 20
      return Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min) / 1
    },
    speed: function () {
      let max = 80
      let min = 50
      return (Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min) / 100) * this.direction
    },
    speed1x: function () {
      return Math.round(this.speed1 * Math.cos(this.angle * Math.PI / 180) * 1000) / 1000
    },
    speed1y: function () {
      return Math.round(this.speed1 * Math.sin(this.angle * Math.PI / 180) * 1000) / 1000
    },
    speed2x: function () {
      return Math.round(((this.speed1x - this.speed) / (1 - this.speed1x * this.speed)) * 1000) / 1000
    },
    speed2y: function () {
      return Math.round((this.speed1y * Math.sqrt(1 - this.speed * this.speed) / (1 - this.speed1x * this.speed)) * 1000) / 1000
    },
    speed2: function () {
      return Math.round(Math.sqrt(Math.pow(this.speed2x, 2) + Math.pow(this.speed2y, 2)) * 1000) / 1000
    },
    angle2: function () {
      return Math.round((Math.atan2(this.speed2y, this.speed2x) * 180 / (Math.PI)) * 1000) / 1000
    },
    checkedV1: function () {
      let check
      console.log('V1 => ' + this.speed1 + ' : ' + parseFloat(this.enterV1))
      check = this.speed1 === parseFloat(this.enterV1) ? 'correct' : 'not-correct'
      return check
    },
    checkedTheta1: function () {
      let check
      console.log('Theta1 => ' + this.angle + ' : ' + parseFloat(this.enterTheta1))
      check = this.angle === parseFloat(this.enterTheta1) ? 'correct' : 'not-correct'
      return check
    },
    checkedV1x: function () {
      let check
      console.log('V1x => ' + this.speed1x + ' : ' + parseFloat(this.enterV1x))
      check = this.speed1x === parseFloat(this.enterV1x) ? 'correct' : 'not-correct'
      return check
    },
    checkedV1y: function () {
      let check
      console.log('V1y => ' + this.speed1y + ' : ' + parseFloat(this.enterV1y))
      check = this.speed1y === parseFloat(this.enterV1y) ? 'correct' : 'not-correct'
      return check
    },
    checkedV2x: function () {
      let check
      console.log('V2x => ' + this.speed2x + ' : ' + parseFloat(this.enterV2x))
      check = this.speed2x === parseFloat(this.enterV2x) ? 'correct' : 'not-correct'
      return check
    },
    checkedV2y: function () {
      let check
      console.log('V2y => ' + this.speed2y + ' : ' + parseFloat(this.enterV2y))
      check = this.speed2y === parseFloat(this.enterV2y) ? 'correct' : 'not-correct'
      return check
    },
    checkedV: function () {
      let check
      console.log('V => ' + this.speed + ' : ' + parseFloat(this.enterV))
      check = this.speed === parseFloat(this.enterV) ? 'correct' : 'not-correct'
      return check
    },
    checkedV2: function () {
      let check
      console.log('V2  => ' + this.speed2 + ' : ' + parseFloat(this.enterV2))
      check = this.speed2 === parseFloat(this.enterV2) ? 'correct' : 'not-correct'
      return check
    },
    checkedTheta2: function () {
      let check
      console.log('Theta2  => ' + this.angle2 + ' : ' + parseFloat(this.enterTheta2))
      check = this.angle2 === parseFloat(this.enterTheta2) ? 'correct' : 'not-correct'
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
