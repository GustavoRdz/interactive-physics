<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem The two mirrors illustrated in Figure meet at a right angle. The beam of light in the vertical plane indicated by the dashed lines strikes mirror at an angle {{ angle }}º and d = {{ d }}cm. (a) Determine the distance the reflected light beam travels before striking mirror 2. (b) In what direction does the light beam travel after being reflected from mirror 2?
    .center
      img(src='../assets/example1.png' width="200px")

    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Incident angle mirror 1 (degrees)
        input.center.data(:class="checkedAngle1" v-model='enterAngle1')
      p.inline.data Incident angle mirror 2 (degrees)
        input.center.data(:class="checkedAngle2" v-model='enterAngle2')
      p.inline.data Traveled distance between mirrors (in m)
        input.center.data(:class="checkedDistance" v-model.number='enterDistance')
      p.inline.data Direction after two reflections respect incident ray (degrees)
        input.center.data(:class="checkedOutAngle" v-model.number='enterOutAngle')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterAngle1: '',
      enterAngle2: '',
      enterDistance: '',
      enterOutAngle: ''
    }
  },
  computed: {
    angle: function () {
      let max = 70
      let min = 20
      return (Math.round(10 * Math.floor(Math.random() * (max - min + 1)) + min) / 10)
    },
    d: function () {
      let max = 50
      let min = 10
      return (Math.round(100 * Math.floor(Math.random() * (max - min + 1)) + min) / 100)
    },
    angle2: function () {
      return 90 - this.angle
    },
    distance: function () {
      return parseFloat((1 * this.d / Math.cos(this.angle2 * Math.PI / 180)).toPrecision(3))
    },
    angleOut: function () {
      return 180 - this.angle
    },
    checkedAngle1: function () {
      let check
      console.log('angle mirror 1: => ' + this.angle + ' : ' + parseFloat(this.enterAngle1))
      check = this.angle === parseFloat(this.enterAngle1) ? 'correct' : 'not-correct'
      return check
    },
    checkedAngle2: function () {
      let check
      console.log('angle mirror 2 => ' + this.angle2 + ' : ' + parseFloat(this.enterAngle2))
      check = this.angle2 === parseFloat(this.enterAngle2) ? 'correct' : 'not-correct'
      return check
    },
    checkedDistance: function () {
      let check
      console.log('Traveled distance => ' + this.distance + ' : ' + parseFloat(this.enterDistance))
      check = this.distance === parseFloat(this.enterDistance) ? 'correct' : 'not-correct'
      return check
    },
    checkedOutAngle: function () {
      let check
      console.log('out angle=> ' + this.angleOut + ' : ' + parseFloat(this.enterOutAngle))
      check = this.angleOut === parseFloat(this.enterOutAngle) ? 'correct' : 'not-correct'
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
