<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A particle moves at a speed of {{ Math.abs(speed1) }} c making an anlge of {{ angle }}º from the +x axis. What is the magnitud and direction of the particle for an observer moving horizontally to the {{ side }} with a speed of  {{ Math.abs(speed) }} c?
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Speed measured from S<sub>1</sub> (in c)
        input.center.data(:class="checkedV1" v-model.number='enterV1')
        <span class="error" v-if="errorV1">[e: {{ errorV1.toPrecision(3) }}%]</span>
      p.inline.data Speed between frames (in c)
        input.center.data(:class="checkedV" v-model.number='enterV')
        <span class="error" v-if="errorV">[e: {{ errorV.toPrecision(3) }}%]</span>
      p.inline.data Angle from S<sub>1</sub> (in degrees)
        input.center.data(:class="checkedTheta1" v-model.number='enterTheta1')
        <span class="error" v-if="errorTheta1">[e: {{ errorTheta1.toPrecision(3) }}%]</span>
      <br>
      p.inline.data Speed S<sub>1x</sub> (in c)
        input.center.data(:class="checkedV1x" v-model.number='enterV1x')
        <span class="error" v-if="errorV1x">[e: {{ errorV1x.toPrecision(3) }}%]</span>
      p.inline.data Speed S<sub>1y</sub> (in c)
        input.center.data(:class="checkedV1y" v-model.number='enterV1y')
        <span class="error" v-if="errorV1y">[e: {{ errorV1y.toPrecision(3) }}%]</span>
      p.inline.data Speed S<sub>2x</sub> (in c)
        input.center.data(:class="checkedV2x" v-model.number='enterV2x')
        <span class="error" v-if="errorV2x">[e: {{ errorV2x.toPrecision(3) }}%]</span>
      p.inline.data Speed S<sub>2y</sub> (in c)
        input.center.data(:class="checkedV2y" v-model.number='enterV2y')
        <span class="error" v-if="errorV2y">[e: {{ errorV2y.toPrecision(3) }}%]</span>
      p.inline.data Speed from S<sub>2</sub> (in c)
        input.center.data(:class="checkedV2" v-model.number='enterV2')
        <span class="error" v-if="errorV2">[e: {{ errorV2.toPrecision(3) }}%]</span>
      p.inline.data Angle from S<sub>2</sub> (in degrees)
        input.center.data(:class="checkedTheta2" v-model='enterTheta2')
        <span class="error" v-if="errorTheta2">[e: {{ errorTheta2.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterV1: '',
      errorV1: 0,
      enterTheta1: '',
      errorTheta1: 0,
      enterV1x: '',
      errorV1x: 0,
      enterV1y: '',
      errorV1y: 0,
      enterV2x: '',
      errorV2x: 0,
      enterV2y: '',
      errorV2y: 0,
      enterV: '',
      errorV: 0,
      enterV2: '',
      errorV2: 0,
      enterTheta2: '',
      errorTheta2: 0,
      direction: '',
      side: ''
    }
  },
  computed: {
    speed1: function () {
      console.clear()
      let max = 80
      let min = 50
      this.direction = (Math.round(Math.random()) - 0.5) * 2
      this.side = this.direction === 1 ? 'rigth' : 'left'
      return (Math.round(Math.random() * (max - min + 1) + min) / 100)
    },
    angle: function () {
      let max = 70
      let min = 20
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    speed: function () {
      let max = 80
      let min = 50
      return (Math.round(Math.random() * (max - min + 1) + min) / 100) * this.direction
    },
    speed1x: function () {
      return this.speed1 * Math.cos(this.angle * Math.PI / 180)
    },
    speed1y: function () {
      return this.speed1 * Math.sin(this.angle * Math.PI / 180)
    },
    speed2x: function () {
      return (this.speed1x - this.speed) / (1 - this.speed1x * this.speed)
    },
    speed2y: function () {
      return this.speed1y * Math.sqrt(1 - this.speed * this.speed) / (1 - this.speed1x * this.speed)
    },
    speed2: function () {
      return Math.sqrt(Math.pow(this.speed2x, 2) + Math.pow(this.speed2y, 2))
    },
    angle2: function () {
      return Math.atan2(this.speed2y, this.speed2x) * 180 / (Math.PI)
    },
    checkedV1: function () {
      this.errorV1 = this.errorRelative('V1 => ', this.speed1, parseFloat(this.enterV1))
      return this.errorV1 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedTheta1: function () {
      this.errorTheta1 = this.errorRelative('Theta1 => ', this.angle, parseFloat(this.enterTheta1))
      return this.errorTheta1 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedV1x: function () {
      this.errorV1x = this.errorRelative('V1x => ', this.speed1x, parseFloat(this.enterV1x))
      return this.errorV1x < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedV1y: function () {
      this.errorV1y = this.errorRelative('V1y => ', this.speed1y, parseFloat(this.enterV1y))
      return this.errorV1y < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedV2x: function () {
      this.errorV2x = this.errorRelative('V2x => ', this.speed2x, parseFloat(this.enterV2x))
      return this.errorV2x < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedV2y: function () {
      this.errorV2y = this.errorRelative('V2y => ', this.speed2y, parseFloat(this.enterV2y))
      return this.errorV2y < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedV: function () {
      this.errorV = this.errorRelative('V => ', this.speed, parseFloat(this.enterV))
      return this.errorV < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedV2: function () {
      this.errorV2 = this.errorRelative('V2 => ', this.speed2, parseFloat(this.enterV2))
      return this.errorV2 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedTheta2: function () {
      this.errorTheta2 = this.errorRelative('Theta2 => ', this.angle2, parseFloat(this.enterTheta2))
      return this.errorTheta2 < 1e-1 ? 'correct' : 'not-correct'
    }
  },
  methods: {
    message: function (name) {
      return
    },
    errorRelative: function (comment, A, x) {
      let relativeError
      relativeError = 100 * Math.abs((A - x) / (A + Number.MIN_VALUE))
      console.log(comment + A + ' : ' + x + ' ==> ' + 'error  ' + relativeError + ' %')
      return relativeError
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
      width: 100%;
      margin-left: 0%;
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
  margin: 0;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 25px;
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
.error {
  font-size: 14px;
}
</style>
